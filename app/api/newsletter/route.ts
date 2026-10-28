import { NextRequest } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GHL_BASE_URL = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

/**
 * Newsletter signups go straight to GHL as tagged contacts, same pattern
 * as the property-owner funnel - no separate email marketing tool.
 *
 * Deliberately a two-step write, not a single upsert-with-tags call:
 * GHL's POST /contacts/upsert docs state its `tags` field "will overwrite
 * all current tags associated with the contact." Since the same email
 * could already exist as a contact for another reason (e.g. the co-host
 * funnel), overwriting tags there would silently wipe unrelated tags. The
 * separate POST /contacts/:contactId/tags endpoint only adds tags, so step
 * 2 can't destroy anything step 1 (or anything else) already set.
 */
async function ghlFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const token = process.env.GHL_PRIVATE_TOKEN;
  if (!token) {
    throw new Error(
      "GHL_PRIVATE_TOKEN is not set. Add it to .env.local before using the newsletter signup."
    );
  }

  const res = await fetch(`${GHL_BASE_URL}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Version: GHL_API_VERSION,
      Accept: "application/json",
      "Content-Type": "application/json",
      ...init?.headers,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`GHL API ${res.status}: ${body}`);
  }

  return res.json() as Promise<T>;
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { email: rawEmail } = body as Record<string, unknown>;
  const email = typeof rawEmail === "string" ? rawEmail.trim() : "";

  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const locationId = process.env.GHL_LOCATION_ID;
  if (!locationId) {
    console.error("GHL_LOCATION_ID is not set.");
    return Response.json({ error: "Unable to sign up right now." }, { status: 500 });
  }

  try {
    const contact = await ghlFetch<{ contact: { id: string } }>("/contacts/upsert", {
      method: "POST",
      body: JSON.stringify({
        locationId,
        email,
        source: "Website Footer Newsletter",
      }),
    });

    await ghlFetch(`/contacts/${contact.contact.id}/tags`, {
      method: "POST",
      body: JSON.stringify({
        tags: ["Newsletter Subscriber", "Source: Website Footer"],
      }),
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Newsletter signup failed:", err);
    return Response.json({ error: "Unable to sign up right now. Please try again." }, { status: 500 });
  }
}

import { NextRequest } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  // TODO: wire this up to an email marketing provider — Mailchimp, Klaviyo,
  // ConvertKit, Beehiiv, etc. — by calling their API here with `email`.
  return Response.json({ ok: true });
}

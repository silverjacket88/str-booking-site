import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  // TODO: wire up to an email/CRM provider (Resend, Postmark, HubSpot, etc.)
  // For now this just acknowledges receipt.
  return Response.json({ ok: true });
}

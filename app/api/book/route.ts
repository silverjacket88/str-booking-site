import { NextRequest } from "next/server";
import { pms } from "@/lib/pms";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { propertyId, checkIn, checkOut, guests } = body as Record<string, unknown>;

  if (
    typeof propertyId !== "string" ||
    !propertyId ||
    typeof checkIn !== "string" ||
    !checkIn ||
    typeof checkOut !== "string" ||
    !checkOut
  ) {
    return Response.json({ error: "Missing required booking fields." }, { status: 400 });
  }

  const guestCount = Number(guests);
  const safeGuests = Number.isFinite(guestCount) && guestCount > 0 ? Math.floor(guestCount) : 2;

  try {
    const confirmation = await pms.createBooking({
      propertyId,
      checkIn,
      checkOut,
      guests: safeGuests,
    });
    return Response.json(confirmation);
  } catch (err) {
    // Log full detail server-side only; the client gets a generic message
    // so we don't leak internal file paths / env var names to callers.
    console.error("createBooking failed:", err);
    return Response.json({ error: "Unable to complete booking." }, { status: 500 });
  }
}

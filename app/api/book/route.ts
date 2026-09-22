import { NextRequest } from "next/server";
import { pms } from "@/lib/pms";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { propertyId, checkIn, checkOut, guests } = body;

  if (!propertyId || !checkIn || !checkOut) {
    return Response.json({ error: "Missing required booking fields." }, { status: 400 });
  }

  try {
    const confirmation = await pms.createBooking({
      propertyId,
      checkIn,
      checkOut,
      guests: Number(guests ?? 2),
    });
    return Response.json(confirmation);
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Unable to complete booking." },
      { status: 500 }
    );
  }
}

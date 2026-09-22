import { NextRequest } from "next/server";
import { pms } from "@/lib/pms";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const propertyId = searchParams.get("propertyId");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const guests = Number(searchParams.get("guests") ?? "2");

  if (!propertyId || !checkIn || !checkOut) {
    return Response.json(
      { error: "propertyId, checkIn, and checkOut are required." },
      { status: 400 }
    );
  }

  try {
    const quote = await pms.getQuote({ propertyId, checkIn, checkOut, guests });
    return Response.json(quote);
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Unable to price this stay." },
      { status: 500 }
    );
  }
}

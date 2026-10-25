import { NextRequest } from "next/server";
import { pms } from "@/lib/pms";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const propertyId = searchParams.get("propertyId");
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  if (!propertyId || !start || !end) {
    return Response.json(
      { error: "propertyId, start, and end are required." },
      { status: 400 }
    );
  }

  try {
    const days = await pms.getAvailability(propertyId, start, end);
    return Response.json({ days });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Unable to load availability." },
      { status: 500 }
    );
  }
}

import type { Metadata } from "next";
import CabinsBrowser from "@/components/CabinsBrowser";
import { properties } from "@/lib/data/properties";
import { market } from "@/lib/data/market";

export const metadata: Metadata = {
  title: "Our Cabins",
  description: `Browse all ${properties.length} cabins in ${market.name}, ${market.state}.`,
};

function firstValue(v: string | string[] | undefined): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}

export default async function CabinsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wider text-forest">
        Browse cabins
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight text-ink md:text-5xl">
        Our cabins in <span className="italic">{market.name}, {market.state}</span>.
      </h1>
      <p className="mt-4 max-w-2xl text-ink-soft">
        All {properties.length}{" "}
        cabins are professionally managed and inspected before your arrival. Filter by
        size, or just browse — there aren&apos;t many, so it won&apos;t take long.
      </p>

      <div className="mt-10">
        <CabinsBrowser
          initial={{
            minBedrooms: Number(firstValue(params.bedrooms) ?? 0) || undefined,
            minGuests: Number(firstValue(params.guests) ?? 0) || undefined,
            checkIn: firstValue(params.checkIn),
            checkOut: firstValue(params.checkOut),
            sort: firstValue(params.sort) as
              | "bedrooms-desc"
              | "bedrooms-asc"
              | "guests-desc"
              | undefined,
            tag: firstValue(params.tag),
          }}
        />
      </div>
    </div>
  );
}

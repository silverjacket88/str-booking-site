import { unstable_cache } from "next/cache";
import { getQuoteCharges } from "@/lib/pms/ownerrez";
import { properties } from "@/lib/data/properties";
import { computeAllChannelTotals, ChannelTotal } from "@/lib/pricing/channelMarkup";
import { buildNextMonthCandidates } from "@/lib/pricing/sampleDates";

export interface CabinComparison {
  slug: string;
  name: string;
  totals: ChannelTotal[];
}

export interface ComparisonResult {
  checkIn: string;
  checkOut: string;
  nights: number;
  isWeekend: boolean;
  checkedAt: string; // ISO date this snapshot was computed
  cabins: CabinComparison[];
}

/**
 * Finds the first candidate date range (see buildNextMonthCandidates) that
 * is actually bookable on ALL cabins at once - so the comparison table can
 * show one shared "these dates" header rather than a different date range
 * per cabin. Real availability is confirmed live against OwnerRez for
 * every candidate tried (a quote only comes back non-null if OwnerRez
 * actually priced it), not assumed.
 */
// This is deliberately a periodic snapshot, not a live-per-visitor query -
// it tries several candidate date ranges against the real OwnerRez account
// (up to 3 quote calls per candidate), which would be wasteful and slow to
// redo on every single page load. Cached for an hour across all visitors;
// the "checked at" date shown in the UI makes clear it's a snapshot.
export const getPriceComparison = unstable_cache(
  getPriceComparisonUncached,
  ["price-comparison-next-month"],
  { revalidate: 3600 }
);

async function getPriceComparisonUncached(): Promise<ComparisonResult | null> {
  const candidates = buildNextMonthCandidates();

  for (const candidate of candidates) {
    const perCabin = await Promise.all(
      properties.map(async (property) => {
        const result = await getQuoteCharges({
          propertyId: property.id,
          checkIn: candidate.checkIn,
          checkOut: candidate.checkOut,
          guests: 2,
        });
        return { property, result };
      })
    );

    if (perCabin.some(({ result }) => result === null)) continue; // try next candidate

    return {
      checkIn: candidate.checkIn,
      checkOut: candidate.checkOut,
      nights: candidate.nights,
      isWeekend: candidate.isWeekend,
      checkedAt: new Date().toISOString().slice(0, 10),
      cabins: perCabin.map(({ property, result }) => ({
        slug: property.slug,
        name: property.name,
        totals: computeAllChannelTotals(result!.charges),
      })),
    };
  }

  return null; // nothing available anywhere next month (shouldn't normally happen)
}

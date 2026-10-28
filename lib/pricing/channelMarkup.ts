import { QuoteChargeModel } from "@/lib/pms/ownerrez";

/**
 * Real markup Harry applies in OwnerRez for bookings attributed to each
 * channel (confirmed directly by him, not estimated): rent and surcharges
 * go up by this percentage; taxes and percentage-based fees are then
 * recalculated against that higher amount, exactly like real sales tax
 * would be - never based on the pre-markup numbers.
 */
export const CHANNEL_MARKUP = {
  direct: 0,
  airbnb: 0.3,
  vrbo: 0.05,
} as const;

export type Channel = keyof typeof CHANNEL_MARKUP;

export interface ChannelTotal {
  channel: Channel;
  total: number;
}

/**
 * Recomputes a quote's total for a given channel markup, using OwnerRez's
 * own real charge breakdown as the source of truth:
 *  1. Rent and surcharges (cleaning fee, management fee, processing fee,
 *     etc.) are multiplied by (1 + markup).
 *  2. Taxes are recalculated as their real percentage rate applied to the
 *     new, marked-up taxable subtotal (matching exactly which charges
 *     OwnerRez itself flagged `is_taxable` on the direct quote).
 * At markup 0 (direct), this reduces to the plain sum of real charges.
 */
export function computeChannelTotal(charges: QuoteChargeModel[], markup: number): number {
  let subtotal = 0;
  let taxableBase = 0;

  for (const charge of charges) {
    if (charge.type === "tax" || charge.type === "tax_other") continue;
    const amount = charge.amount * (1 + markup);
    subtotal += amount;
    if (charge.is_taxable) taxableBase += amount;
  }

  let taxTotal = 0;
  for (const charge of charges) {
    if (charge.type !== "tax" && charge.type !== "tax_other") continue;
    // Taxes are already expressed as a real percent rate on the direct
    // quote (e.g. rate: 7, rate_is_percent: true for a 7% tax) - reapply
    // that same real rate to the new taxable base. Fall back to the
    // original flat amount (unscaled) in the unexpected case a tax isn't
    // percent-based, rather than guessing at a rate.
    taxTotal += charge.rate_is_percent ? taxableBase * (charge.rate / 100) : charge.amount;
  }

  return Math.round((subtotal + taxTotal) * 100) / 100;
}

export function computeAllChannelTotals(charges: QuoteChargeModel[]): ChannelTotal[] {
  return (Object.keys(CHANNEL_MARKUP) as Channel[]).map((channel) => ({
    channel,
    total: computeChannelTotal(charges, CHANNEL_MARKUP[channel]),
  }));
}

import { properties } from "@/lib/data/properties";
import {
  BookingConfirmation,
  BookingRequest,
  DayRate,
  PmsAdapter,
  Quote,
  QuoteRequest,
} from "@/lib/pms/types";

const TAX_RATE = 0.11; // placeholder lodging tax rate
const SERVICE_FEE_RATE = 0; // direct-booking sites typically pass no platform fee

function parseISO(date: string): Date {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

function toISO(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

/** Small deterministic hash so the same date always produces the same "randomness". */
function seededFraction(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return (Math.abs(hash) % 1000) / 1000;
}

function priceForDate(basePrice: number, propertyId: string, date: Date): number {
  const day = date.getUTCDay(); // 0 = Sunday
  const isWeekend = day === 5 || day === 6; // Fri/Sat night
  const month = date.getUTCMonth(); // 0-11
  const isPeakSeason = month === 5 || month === 6 || month === 7 || month === 11; // summer + Dec

  let multiplier = 1;
  if (isWeekend) multiplier += 0.18;
  if (isPeakSeason) multiplier += 0.22;

  const wiggle = 0.9 + seededFraction(`${propertyId}-${toISO(date)}`) * 0.2; // 0.9 - 1.1
  return Math.round(basePrice * multiplier * wiggle);
}

function isBlocked(propertyId: string, date: Date): boolean {
  // Deterministically "book out" ~12% of nights so the calendar isn't wide open.
  return seededFraction(`${propertyId}-blocked-${toISO(date)}`) < 0.12;
}

function findProperty(propertyId: string) {
  return properties.find((p) => p.id === propertyId || p.slug === propertyId);
}

export const mockPmsAdapter: PmsAdapter = {
  async listPropertyIds() {
    return properties.map((p) => p.id);
  },

  async getAvailability(propertyId, startDate, endDate) {
    const property = findProperty(propertyId);
    if (!property) return [];

    const start = parseISO(startDate);
    const end = parseISO(endDate);
    const days: DayRate[] = [];

    for (let d = start; d < end; d = addDays(d, 1)) {
      const blocked = isBlocked(property.id, d);
      days.push({
        date: toISO(d),
        available: !blocked,
        minStayNights: property.minStayNights,
        price: blocked ? null : priceForDate(property.basePrice, property.id, d),
      });
    }

    return days;
  },

  async getQuote(request: QuoteRequest): Promise<Quote> {
    const property = findProperty(request.propertyId);
    if (!property) {
      throw new Error(`Unknown property: ${request.propertyId}`);
    }

    const checkIn = parseISO(request.checkIn);
    const checkOut = parseISO(request.checkOut);
    const nights = Math.round((checkOut.getTime() - checkIn.getTime()) / 86_400_000);

    if (nights <= 0) {
      return {
        propertyId: property.id,
        checkIn: request.checkIn,
        checkOut: request.checkOut,
        nights: 0,
        nightlyAverage: 0,
        lineItems: [],
        total: 0,
        currency: "USD",
        available: false,
        unavailableReason: "Check-out must be after check-in.",
      };
    }

    if (nights < property.minStayNights) {
      return {
        propertyId: property.id,
        checkIn: request.checkIn,
        checkOut: request.checkOut,
        nights,
        nightlyAverage: 0,
        lineItems: [],
        total: 0,
        currency: "USD",
        available: false,
        unavailableReason: `${property.minStayNights}-night minimum stay.`,
      };
    }

    let subtotal = 0;
    let blockedNight = false;
    for (let d = checkIn; d < checkOut; d = addDays(d, 1)) {
      if (isBlocked(property.id, d)) {
        blockedNight = true;
        break;
      }
      subtotal += priceForDate(property.basePrice, property.id, d);
    }

    if (blockedNight) {
      return {
        propertyId: property.id,
        checkIn: request.checkIn,
        checkOut: request.checkOut,
        nights,
        nightlyAverage: 0,
        lineItems: [],
        total: 0,
        currency: "USD",
        available: false,
        unavailableReason: "One or more nights in this range are already booked.",
      };
    }

    const serviceFee = Math.round(subtotal * SERVICE_FEE_RATE);
    const taxes = Math.round((subtotal + property.cleaningFee + serviceFee) * TAX_RATE);
    const total = subtotal + property.cleaningFee + serviceFee + taxes;

    const lineItems = [
      { label: `$${Math.round(subtotal / nights)} x ${nights} night${nights === 1 ? "" : "s"}`, amount: subtotal },
      { label: "Cleaning fee", amount: property.cleaningFee },
      { label: "Taxes", amount: taxes },
    ];

    return {
      propertyId: property.id,
      checkIn: request.checkIn,
      checkOut: request.checkOut,
      nights,
      nightlyAverage: Math.round(subtotal / nights),
      lineItems,
      total,
      currency: "USD",
      available: true,
    };
  },

  async createBooking(request: BookingRequest): Promise<BookingConfirmation> {
    // In this mock adapter we just simulate success. The real OwnerRez
    // adapter should redirect to (or embed) OwnerRez's hosted checkout
    // instead of collecting payment details on this site directly.
    return {
      bookingId: `mock-${request.propertyId}-${Date.now()}`,
      status: "pending_payment",
      confirmationCode: `HK-${Math.floor(100000 + Math.random() * 900000)}`,
    };
  },
};

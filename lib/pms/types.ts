/**
 * PMS-agnostic booking-engine contract.
 *
 * Every page in this app talks to this interface, never to a specific
 * PMS SDK directly. That keeps `mock.ts` (sample data, used today) and
 * `ownerrez.ts` (real integration, wired up when API credentials exist)
 * interchangeable — swap the provider in `lib/pms/index.ts` and nothing
 * else in the app needs to change.
 */

export interface DayRate {
  date: string; // ISO yyyy-mm-dd
  available: boolean;
  minStayNights: number;
  price: number | null; // nightly rate in USD, null if unavailable/unpriced
}

export interface QuoteRequest {
  propertyId: string;
  checkIn: string; // ISO yyyy-mm-dd
  checkOut: string; // ISO yyyy-mm-dd
  guests: number;
}

export interface QuoteLineItem {
  label: string;
  amount: number;
}

export interface Quote {
  propertyId: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  nightlyAverage: number;
  lineItems: QuoteLineItem[];
  total: number;
  currency: "USD";
  available: boolean;
  unavailableReason?: string;
}

export interface BookingRequest extends QuoteRequest {
  guestName: string;
  guestEmail: string;
  guestPhone: string;
}

export interface BookingConfirmation {
  bookingId: string;
  status: "confirmed" | "pending_payment" | "failed";
  confirmationCode: string;
}

export interface PmsAdapter {
  /** List of PMS property ids this adapter currently manages. */
  listPropertyIds(): Promise<string[]>;

  /** Nightly availability + price for a property across a date range. */
  getAvailability(
    propertyId: string,
    startDate: string,
    endDate: string
  ): Promise<DayRate[]>;

  /** Priced quote for a specific stay, including fees/taxes. */
  getQuote(request: QuoteRequest): Promise<Quote>;

  /**
   * Create a booking. In production this should nearly always hand off
   * to the PMS's own hosted checkout/payment page (see README) rather
   * than collect card data on this site, for PCI-scope reasons.
   */
  createBooking(request: BookingRequest): Promise<BookingConfirmation>;
}

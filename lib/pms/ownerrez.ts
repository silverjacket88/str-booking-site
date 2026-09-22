/**
 * OwnerRez PMS adapter — REAL INTEGRATION, verified against OwnerRez's live
 * API reference at https://api.ownerrez.com (checked directly, not guessed).
 *
 * Setup checklist:
 *  1. In OwnerRez: Settings -> Developer / API Settings -> "Generate New
 *     Token" under Personal Access Tokens.
 *  2. Auth is HTTP Basic: username = your OwnerRez account EMAIL,
 *     password = that Personal Access Token. (Not two separate "API key +
 *     token" values — just your email and the one token.)
 *  3. Map each listing's OwnerRez `property_id` to the `id` field on the
 *     objects in `lib/data/properties.ts` (or fetch properties directly
 *     from OwnerRez via `listPropertyIds` and drop the local sample data
 *     once you're live).
 *  4. Payments: don't collect card numbers on this site. OwnerRez's API
 *     does support POST /v2/bookings directly, but confirm with OwnerRez
 *     how payment capture works for API-created bookings before relying
 *     on it — the safer default (what `createBooking` does below) is to
 *     deep-link to OwnerRez's own hosted checkout, which keeps this app
 *     out of PCI scope entirely.
 *
 * Endpoints/fields below match OwnerRez's own interactive docs as of this
 * writing (https://api.ownerrez.com/help/v2/...). Re-check there if
 * anything starts returning unexpected shapes — this is a real third-party
 * API and can change.
 */

import {
  BookingConfirmation,
  BookingRequest,
  DayRate,
  PmsAdapter,
  Quote,
  QuoteRequest,
} from "@/lib/pms/types";

const OWNERREZ_BASE_URL = "https://api.ownerrez.com";

/**
 * OwnerRez returns structured validation errors, e.g. requesting a quote
 * for dates that conflict with an existing booking returns HTTP 400 with
 * `{ code: "validation_failed", messages: ["The arrival and departure
 * dates conflict with existing bookings.", ...] }`. Confirmed against a
 * real account — this is real API behavior, not a guess.
 */
class OwnerRezApiError extends Error {
  status: number;
  messages?: string[];

  constructor(status: number, body: string) {
    let messages: string[] | undefined;
    try {
      const parsed = JSON.parse(body);
      if (Array.isArray(parsed.messages)) messages = parsed.messages;
    } catch {
      // Body wasn't JSON (or didn't have `messages`) — fall through with
      // just the raw body in the error message below.
    }
    super(messages ? messages.join(" ") : `OwnerRez API ${status}: ${body}`);
    this.status = status;
    this.messages = messages;
  }
}

function authHeader(): string {
  const email = process.env.OWNERREZ_ACCOUNT_EMAIL;
  const token = process.env.OWNERREZ_PERSONAL_ACCESS_TOKEN;
  if (!email || !token) {
    throw new Error(
      "OWNERREZ_ACCOUNT_EMAIL / OWNERREZ_PERSONAL_ACCESS_TOKEN are not set. Add them to .env.local before using the OwnerRez adapter."
    );
  }
  const basic = Buffer.from(`${email}:${token}`).toString("base64");
  return `Basic ${basic}`;
}

async function ownerRezFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${OWNERREZ_BASE_URL}${path}`, {
    ...init,
    headers: {
      Authorization: authHeader(),
      Accept: "application/json",
      "Content-Type": "application/json",
      ...init?.headers,
    },
    // Availability/pricing changes constantly — don't let Next.js cache it.
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new OwnerRezApiError(res.status, body);
  }

  return res.json() as Promise<T>;
}

function nightsBetween(checkIn: string, checkOut: string): number {
  const start = new Date(`${checkIn}T00:00:00Z`);
  const end = new Date(`${checkOut}T00:00:00Z`);
  return Math.round((end.getTime() - start.getTime()) / 86_400_000);
}

// --- Shapes below match OwnerRez's documented models -----------------

interface PropertyViewModel {
  id: number;
  [key: string]: unknown;
}

interface PageableListOfPropertyViewModel {
  count: number;
  items: PropertyViewModel[];
}

interface CalendarDayModel {
  date: string;
  status: "available" | "booked" | "blocked" | "gap" | "unavailable";
  rate?: { amount: number; rent: number; is_spot_rate: boolean };
  rules?: {
    min_nights?: number;
    max_nights?: number;
    is_stay_disallowed?: boolean;
    is_arrival_disallowed?: boolean;
    is_departure_disallowed?: boolean;
  };
  booking_id?: number;
}

interface CalendarPropertyModel {
  currency_code: string;
  days: CalendarDayModel[];
}

interface QuoteChargeModel {
  type: "rent" | "surcharge" | "tax" | "tax_other" | "surcharge_other";
  description?: string;
  amount: number;
}

interface QuoteViewModel {
  arrival: string;
  departure: string;
  property_id: number;
  charges: QuoteChargeModel[];
}

export const ownerRezPmsAdapter: PmsAdapter = {
  async listPropertyIds() {
    const data = await ownerRezFetch<PageableListOfPropertyViewModel>(
      "/v2/properties"
    );
    return data.items.map((p) => String(p.id));
  },

  async getAvailability(propertyId, startDate, endDate) {
    // GET /v2/calendar/{property_id}?from=&to= — each entry is one night.
    // Nights outside the booking window or without data are simply
    // omitted from `days`, so a missing date here doesn't mean "blocked."
    const data = await ownerRezFetch<CalendarPropertyModel>(
      `/v2/calendar/${propertyId}?from=${startDate}&to=${endDate}`
    );

    return (data.days ?? []).map(
      (d): DayRate => ({
        date: d.date,
        available: d.status === "available",
        minStayNights: d.rules?.min_nights ?? 1,
        price: d.rate?.amount ?? null,
      })
    );
  },

  async getQuote(request: QuoteRequest): Promise<Quote> {
    const nights = nightsBetween(request.checkIn, request.checkOut);

    try {
      // POST /v2/quotes — the response has no single "total" field; it
      // returns a `charges` array (rent/surcharge/tax line items) that we
      // sum ourselves. Confirmed against a real account: requesting a
      // conflicting/invalid date range returns HTTP 400 with a structured
      // `messages` array (see OwnerRezApiError above), caught below and
      // surfaced as `unavailableReason`.
      const data = await ownerRezFetch<QuoteViewModel>("/v2/quotes", {
        method: "POST",
        body: JSON.stringify({
          property_id: Number(request.propertyId),
          arrival: request.checkIn,
          departure: request.checkOut,
          adults: request.guests,
          generate_charges: true,
        }),
      });

      const total = data.charges.reduce((sum, c) => sum + c.amount, 0);
      const rentTotal = data.charges
        .filter((c) => c.type === "rent")
        .reduce((sum, c) => sum + c.amount, 0);

      const lineItems = data.charges.map((c) => ({
        label: c.description || c.type,
        amount: c.amount,
      }));

      return {
        propertyId: request.propertyId,
        checkIn: request.checkIn,
        checkOut: request.checkOut,
        nights,
        nightlyAverage: nights > 0 ? Math.round(rentTotal / nights) : 0,
        lineItems,
        total,
        currency: "USD",
        available: true,
      };
    } catch (err) {
      return {
        propertyId: request.propertyId,
        checkIn: request.checkIn,
        checkOut: request.checkOut,
        nights,
        nightlyAverage: 0,
        lineItems: [],
        total: 0,
        currency: "USD",
        available: false,
        unavailableReason:
          err instanceof Error ? err.message : "Unable to price this stay.",
      };
    }
  },

  async createBooking(request: BookingRequest): Promise<BookingConfirmation> {
    // Embed OwnerRez's own Inquiry/Booking widget directly (via iframe) on
    // this site's confirmation step, instead of redirecting guests to each
    // cabin's separate marketing domain. Same underlying OwnerRez checkout
    // (still PCI-safe — payment happens inside OwnerRez's own iframe, never
    // touching this app), but the guest never appears to leave this site.
    //
    // widgetId/propertyKey below were read directly out of each cabin's own
    // existing site's embedded widget (view-source on their /book page) —
    // confirmed the widget's host, app.ownerrez.com, sends no
    // X-Frame-Options/frame-ancestors restriction, so embedding it
    // cross-domain here is not blocked.
    //
    // or_arrival/or_departure/or_adults all confirmed prefilling correctly
    // when embedded this way (tested live). They did NOT prefill when
    // testing via each cabin's own existing WordPress site — that's the
    // "double iframe" issue OwnerRez's docs warn about (WordPress wraps
    // their embed snippet in an extra iframe layer, which blocks the
    // widget from reading its own URL params). Embedding a single clean
    // iframe directly, as done here, avoids that problem entirely.
    const widgets: Record<string, { widgetId: string; propertyKey: string }> = {
      "411998": {
        widgetId: "8803317455f741e89a289c1c38a7049a",
        propertyKey: "2e573ca29680483b956f01634ee15081",
      },
      "480455": {
        widgetId: "acc8b0a60b9d4aa38e5174a013f798ee",
        propertyKey: "6e8229a102f94317a7eb02acceb90675",
      },
      "361555": {
        widgetId: "bbc7ea996a994981bfe1f786bdbc0411",
        propertyKey: "4a53f63795f04414b14eb3d6bb6b5b0c",
      },
    };

    const widget = widgets[request.propertyId];
    if (!widget) {
      throw new Error(
        `No OwnerRez widget configured for property ${request.propertyId}. Add it to the widgets map in lib/pms/ownerrez.ts.`
      );
    }

    const widgetUrl = new URL(
      `https://app.ownerrez.com/widgets/${widget.widgetId}`
    );
    widgetUrl.searchParams.set("propertyKey", widget.propertyKey);
    widgetUrl.searchParams.set("or_arrival", request.checkIn);
    widgetUrl.searchParams.set("or_departure", request.checkOut);
    widgetUrl.searchParams.set("or_adults", String(request.guests));

    return {
      bookingId: widgetUrl.toString(),
      status: "pending_payment",
      confirmationCode: "EMBED",
    };
  },
};

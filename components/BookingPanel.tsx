"use client";

import { useEffect, useState } from "react";
import { Property } from "@/lib/types";
import { BookingConfirmation, Quote } from "@/lib/pms/types";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";

export default function BookingPanel({ property }: { property: Property }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const hasDates = Boolean(checkIn && checkOut);
  const requestKey = hasDates ? `${checkIn}-${checkOut}-${guests}` : "";

  const [result, setResult] = useState<{ key: string; quote: Quote } | null>(null);
  const quote = hasDates && result?.key === requestKey ? result.quote : null;
  const quoteLoading = hasDates && result?.key !== requestKey;

  useEffect(() => {
    if (!hasDates) return;
    let cancelled = false;
    fetch(
      `/api/quote?propertyId=${property.id}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`
    )
      .then((res) => res.json())
      .then((data: Quote) => {
        if (!cancelled) setResult({ key: requestKey, quote: data });
      });
    return () => {
      cancelled = true;
    };
  }, [hasDates, requestKey, checkIn, checkOut, guests, property.id]);

  async function handleReserve() {
    setSubmitting(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ propertyId: property.id, checkIn, checkOut, guests }),
      });
      const data: BookingConfirmation = await res.json();
      setConfirmation(data);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="rounded-lg border border-line/60 bg-paper p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Check-in</p>
      <p className="font-display text-lg text-ink">{checkIn || "—"}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink-soft">
        Check-out
      </p>
      <p className="font-display text-lg text-ink">{checkOut || "—"}</p>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Guests</p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setGuests((g) => Math.max(1, g - 1))}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-ink"
            aria-label="Decrease guests"
          >
            −
          </button>
          <span className="w-4 text-center text-sm text-ink">{guests}</span>
          <button
            type="button"
            onClick={() => setGuests((g) => Math.min(property.maxGuests, g + 1))}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-ink"
            aria-label="Increase guests"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-6 border-t border-line pt-6">
        <AvailabilityCalendar
          propertyId={property.id}
          checkIn={checkIn}
          checkOut={checkOut}
          onSelect={(ci, co) => {
            setCheckIn(ci);
            setCheckOut(co);
          }}
        />
      </div>

      <div className="mt-6 border-t border-line pt-6">
        {!checkIn || !checkOut ? (
          <p className="text-sm text-ink-soft">Select dates to see pricing.</p>
        ) : quoteLoading ? (
          <p className="text-sm text-ink-soft">Calculating price…</p>
        ) : quote && !quote.available ? (
          <p className="text-sm text-red-700">{quote.unavailableReason}</p>
        ) : quote ? (
          <div>
            <div className="space-y-2 text-sm text-ink-soft">
              {quote.lineItems.map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span>{item.label}</span>
                  <span>${item.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-between border-t border-line pt-3 font-medium text-ink">
              <span>Total</span>
              <span>${quote.total.toLocaleString()}</span>
            </div>
          </div>
        ) : null}
      </div>

      {confirmation && confirmation.confirmationCode === "REDIRECT" ? (
        <div className="mt-6 rounded-lg bg-forest/10 p-4 text-sm text-forest-dark">
          <p className="font-medium">Almost there.</p>
          <p className="mt-1">
            One last step: confirm your dates and pay securely on our booking partner&apos;s
            checkout page. Your guest count carries over automatically — you&apos;ll just
            need to re-enter your dates once there.
          </p>
          <a
            href={confirmation.bookingId}
            className="mt-3 inline-block w-full rounded-lg bg-forest px-5 py-2.5 text-center text-sm font-medium text-cream hover:bg-forest-dark"
          >
            Continue to secure checkout →
          </a>
        </div>
      ) : confirmation ? (
        <div className="mt-6 rounded-lg bg-forest/10 p-4 text-sm text-forest-dark">
          <p className="font-medium">Request received.</p>
          <p className="mt-1">
            Confirmation reference:{" "}
            <span className="font-mono">{confirmation.confirmationCode}</span>. We&apos;ll be
            in touch shortly to finalize payment.
          </p>
        </div>
      ) : (
        <button
          type="button"
          disabled={!quote?.available || submitting}
          onClick={handleReserve}
          className="mt-6 w-full rounded-lg bg-forest px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-forest-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          {submitting ? "Preparing…" : "Reserve"}
        </button>
      )}

      <div className="mt-6 rounded-lg border border-line/60 p-4 text-xs text-ink-soft">
        <p className="font-medium text-ink">Lowest price, guaranteed.</p>
        <p className="mt-1">
          Same home, same dates, less money — no platform fees added on top like Airbnb or
          Vrbo. Find these dates cheaper elsewhere and we&apos;ll match it.
        </p>
      </div>
    </div>
  );
}

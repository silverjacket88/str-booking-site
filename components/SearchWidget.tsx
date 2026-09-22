"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function SearchWidget() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (guests) params.set("guests", guests);
    router.push(`/cabins?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid w-full gap-3 rounded-lg border border-line bg-paper p-4 shadow-xl shadow-ink/5 md:grid-cols-4 md:items-end md:gap-4"
    >
      <label className="block text-left">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Check-in
        </span>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-forest focus:outline-none"
        />
      </label>

      <label className="block text-left">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Check-out
        </span>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-forest focus:outline-none"
        />
      </label>

      <label className="block text-left">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Guests
        </span>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-forest focus:outline-none"
        >
          <option value="">Add guests</option>
          {[2, 4, 6, 8, 10, 12, 16].map((n) => (
            <option key={n} value={n}>
              {n}+ guests
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream shadow-[0_8px_20px_-8px_rgba(63,74,56,0.55)] transition-colors hover:bg-forest-dark"
      >
        Find your stay
      </button>
    </form>
  );
}

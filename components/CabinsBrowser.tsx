"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/data/properties";
import { AmenityTag, SearchFilters } from "@/lib/types";

type SortOption = "bedrooms-desc" | "bedrooms-asc" | "guests-desc";

export default function CabinsBrowser({
  initial,
}: {
  initial: SearchFilters & { tag?: string };
}) {
  const router = useRouter();

  const [bedrooms, setBedrooms] = useState(String(initial.minBedrooms ?? 0));
  const [guests, setGuests] = useState(String(initial.minGuests ?? 0));
  const [checkIn, setCheckIn] = useState(initial.checkIn ?? "");
  const [checkOut, setCheckOut] = useState(initial.checkOut ?? "");
  const [sort, setSort] = useState<SortOption>(initial.sort ?? "bedrooms-desc");
  const [activeTag, setActiveTag] = useState<AmenityTag | "">(
    (initial.tag as AmenityTag) ?? ""
  );

  function syncUrl(next: {
    bedrooms?: string;
    guests?: string;
    checkIn?: string;
    checkOut?: string;
    sort?: string;
    tag?: string;
  }) {
    const merged = { bedrooms, guests, checkIn, checkOut, sort, tag: activeTag, ...next };
    const params = new URLSearchParams();
    if (merged.bedrooms && merged.bedrooms !== "0") params.set("bedrooms", merged.bedrooms);
    if (merged.guests && merged.guests !== "0") params.set("guests", merged.guests);
    if (merged.checkIn) params.set("checkIn", merged.checkIn);
    if (merged.checkOut) params.set("checkOut", merged.checkOut);
    if (merged.sort) params.set("sort", merged.sort);
    if (merged.tag) params.set("tag", merged.tag);
    router.replace(`/cabins?${params.toString()}`, { scroll: false });
  }

  const filtered = useMemo(() => {
    let list = properties.filter((p) => {
      if (Number(bedrooms) && p.bedrooms < Number(bedrooms)) return false;
      if (Number(guests) && p.maxGuests < Number(guests)) return false;
      if (activeTag && !p.tags.includes(activeTag)) return false;
      return true;
    });

    list = [...list].sort((a, b) => {
      if (sort === "bedrooms-desc") return b.bedrooms - a.bedrooms;
      if (sort === "bedrooms-asc") return a.bedrooms - b.bedrooms;
      return b.maxGuests - a.maxGuests;
    });

    return list;
  }, [bedrooms, guests, activeTag, sort]);

  return (
    <div>
      <div className="flex flex-wrap gap-3 border-b border-line/60 pb-6">
        <select
          value={bedrooms}
          onChange={(e) => {
            setBedrooms(e.target.value);
            syncUrl({ bedrooms: e.target.value });
          }}
          className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink focus:border-forest focus:outline-none"
        >
          <option value="0">Bedrooms: Any</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}+ beds
            </option>
          ))}
        </select>

        <select
          value={guests}
          onChange={(e) => {
            setGuests(e.target.value);
            syncUrl({ guests: e.target.value });
          }}
          className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink focus:border-forest focus:outline-none"
        >
          <option value="0">Guests: Any</option>
          {[2, 4, 6, 8, 10, 12].map((n) => (
            <option key={n} value={n}>
              {n}+ guests
            </option>
          ))}
        </select>

        <input
          type="date"
          value={checkIn}
          onChange={(e) => {
            setCheckIn(e.target.value);
            syncUrl({ checkIn: e.target.value });
          }}
          className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink focus:border-forest focus:outline-none"
          aria-label="Check-in"
        />
        <input
          type="date"
          value={checkOut}
          onChange={(e) => {
            setCheckOut(e.target.value);
            syncUrl({ checkOut: e.target.value });
          }}
          className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink focus:border-forest focus:outline-none"
          aria-label="Check-out"
        />

        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value as SortOption);
            syncUrl({ sort: e.target.value });
          }}
          className="ml-auto rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink focus:border-forest focus:outline-none"
        >
          <option value="bedrooms-desc">Most bedrooms first</option>
          <option value="bedrooms-asc">Fewest bedrooms first</option>
          <option value="guests-desc">Most guests first</option>
        </select>
      </div>

      {activeTag && (
        <div className="mt-4 flex items-center gap-2">
          <span className="rounded-full bg-forest px-3 py-1 text-xs font-medium text-cream">
            Filtered by tag: {activeTag.replace("-", " ")}
          </span>
          <button
            type="button"
            onClick={() => {
              setActiveTag("");
              syncUrl({ tag: "" });
            }}
            className="text-xs text-ink-soft underline hover:text-forest"
          >
            Clear
          </button>
        </div>
      )}

      <p className="mt-6 text-sm text-ink-soft">
        {filtered.length} of {properties.length} cabins
      </p>

      {filtered.length === 0 ? (
        <p className="mt-10 text-ink-soft">
          No cabins match those filters yet. Try widening your search.
        </p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";

export default function AmenitiesList({ amenities }: { amenities: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? amenities : amenities.slice(0, 8);

  return (
    <div>
      <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
        {visible.map((a) => (
          <li key={a} className="flex items-start gap-2 text-sm text-ink-soft">
            <span className="mt-0.5 text-forest" aria-hidden>
              ✓
            </span>
            {a}
          </li>
        ))}
      </ul>
      {amenities.length > 8 && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="mt-4 rounded-full border border-line bg-paper px-4 py-2 text-xs font-medium text-ink hover:border-forest"
        >
          {expanded ? "Show less" : `Show all ${amenities.length} amenities`}
        </button>
      )}
    </div>
  );
}

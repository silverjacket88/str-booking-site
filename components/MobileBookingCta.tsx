"use client";

import { useState } from "react";
import SearchWidget from "@/components/SearchWidget";

export default function MobileBookingCta() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full rounded-full bg-forest px-5 py-3 text-sm font-medium text-cream shadow-[0_8px_20px_-8px_rgba(63,74,56,0.55)] transition-colors hover:bg-forest-dark"
      >
        Book Your Escape
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/95 p-6 pt-20"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mb-4 rounded-full bg-cream px-4 py-2 text-xs font-medium text-ink"
            >
              Close
            </button>
            <SearchWidget />
          </div>
        </div>
      )}
    </>
  );
}

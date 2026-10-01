"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { galleryPhotos } from "@/lib/data/galleryPhotos";
import { getEasternWeekNumber } from "@/lib/utils/weeklyRotation";
import { pickWeeklyPhotos } from "@/lib/utils/weeklyPhotos";

// Picking the weekly set client-side (not in the server-rendered page)
// matters because this homepage is statically built — a server-computed
// "this week's photos" would freeze to whatever week the site was last
// deployed in, instead of actually changing week to week.
const FALLBACK_PHOTOS = [
  ...galleryPhotos.riverCabin.slice(0, 7),
  ...galleryPhotos.chasingSunset.slice(0, 7),
  ...galleryPhotos.wthCabin.slice(0, 6),
];

export default function PhotoMarquee() {
  const [images, setImages] = useState<string[]>(FALLBACK_PHOTOS);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    setImages(pickWeeklyPhotos(getEasternWeekNumber()));
  }, []);

  useEffect(() => {
    if (!selected) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const track = [...images, ...images];

  return (
    <div>
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-ink-soft">
        Tap or click a photo to view
      </p>

      <div className="overflow-hidden py-2">
        <div className="marquee-track flex w-max gap-4">
          {track.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(src)}
              aria-label="View larger photo"
              className="relative h-48 w-72 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg transition-transform duration-200 hover:scale-[1.03] sm:h-56 sm:w-80"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="320px"
                className="object-cover grayscale"
              />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink hover:bg-cream-dark sm:right-6 sm:top-6"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <div
            className="relative h-full max-h-[85vh] w-full max-w-4xl"
            onClick={() => setSelected(null)}
          >
            <Image src={selected} alt="" fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

export default function PropertyGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-lg">
        <div className="relative col-span-4 row-span-1 aspect-[16/9] sm:col-span-2 sm:row-span-2 sm:aspect-auto">
          <Image
            src={images[0]}
            alt={name}
            fill
            priority
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        {images.slice(1, 5).map((src, i) => (
          <div key={i} className="relative hidden aspect-square sm:block">
            <Image
              src={src}
              alt={`${name} photo ${i + 2}`}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 rounded-full border border-line bg-paper px-4 py-2 text-xs font-medium text-ink hover:border-forest"
      >
        Show all {images.length} photos
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-ink/95 p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto max-w-4xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="sticky top-0 mb-4 rounded-full bg-cream px-4 py-2 text-xs font-medium text-ink"
            >
              Close
            </button>
            <div className="space-y-3">
              {images.map((src, i) => (
                <div key={i} className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
                  <Image src={src} alt={`${name} photo ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

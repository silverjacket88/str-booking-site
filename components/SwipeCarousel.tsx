"use client";

import { useRef, type ReactNode } from "react";

export default function SwipeCarousel({
  children,
  cardWidthClassName = "w-[82%] sm:w-[46%] lg:w-[31%]",
}: {
  children: ReactNode[];
  cardWidthClassName?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-carousel-card]");
    const amount = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <p className="mb-5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-soft">
        <span aria-hidden>←</span> Swipe to see more <span aria-hidden>→</span>
      </p>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, i) => (
          <div
            key={i}
            data-carousel-card
            className={`shrink-0 snap-start ${cardWidthClassName}`}
          >
            {child}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-md hover:bg-cream-dark sm:flex"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-md hover:bg-cream-dark sm:flex"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
    </div>
  );
}

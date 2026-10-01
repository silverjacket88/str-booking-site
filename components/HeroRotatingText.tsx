"use client";

import { useEffect, useState } from "react";
import { reviews } from "@/lib/data/reviews";

type Slide =
  | { kind: "copy"; text: string }
  | { kind: "review"; text: string; author: string };

const copyLines = [
  "Three-bedroom retreats with private hot tubs, mountain views, and fire pits under the stars — steps from Gatlinburg and Pigeon Forge, booked direct.",
  "Riverfront decks. Panoramic mountain views. Private hot tubs and fire pits waiting after a day in the Smokies.",
  "Wake up to the Smokies from your own hot tub, unwind by the fire pit at night, fall asleep minutes from Gatlinburg's lights.",
  "Hot tubs. Fire pits. Mountain and riverfront views. Every cabin handpicked for the view, the location, and the details that make a trip feel like an escape.",
  "Minutes from Gatlinburg and Pigeon Forge, our cabins pair prime Smoky Mountain locations with the amenities that matter — private hot tubs, fire pits, and views you won't want to leave.",
];

// One real, most-recent review per cabin, pulled from lib/data/reviews.ts.
// reviews.ts lists each cabin's reviews most-recent-first, so keep only the
// first occurrence per property rather than the last.
const seenProperties = new Set<string>();
const reviewSlides: Slide[] = reviews
  .filter((r) => {
    if (seenProperties.has(r.propertyName)) return false;
    seenProperties.add(r.propertyName);
    return true;
  })
  .map((r) => ({
    kind: "review" as const,
    text: `"${r.quote}"`,
    author: `${r.author}, ${r.propertyName} · ${r.monthYear}`,
  }));

const SLIDES: Slide[] = [
  { kind: "copy", text: copyLines[0] },
  reviewSlides[0],
  { kind: "copy", text: copyLines[1] },
  reviewSlides[1],
  { kind: "copy", text: copyLines[2] },
  reviewSlides[2],
  { kind: "copy", text: copyLines[3] },
  { kind: "copy", text: copyLines[4] },
].filter(Boolean) as Slide[];

export default function HeroRotatingText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const rotate = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % SLIDES.length);
        setVisible(true);
      }, 600);
    }, 6500);
    return () => clearInterval(rotate);
  }, []);

  const slide = SLIDES[index];

  return (
    <div className="mt-6 max-w-xl min-h-[6.5rem] md:min-h-[5.5rem]">
      <p
        className={`text-base text-cream/90 transition-opacity duration-600 ease-in-out md:text-lg ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {slide.text}
        {slide.kind === "review" && (
          <span className="mt-2 block text-sm not-italic text-cream/70">
            — {slide.author}
          </span>
        )}
      </p>
    </div>
  );
}

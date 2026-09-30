"use client";

import { useEffect, useRef, useState } from "react";

type Slide =
  | { kind: "copy"; text: string }
  | { kind: "review"; text: string; author: string };

const SLIDES: Slide[] = [
  {
    kind: "copy",
    text: "Three-bedroom retreats with private hot tubs, mountain views, and fire pits under the stars — steps from Gatlinburg and Pigeon Forge, booked direct.",
  },
  {
    kind: "review",
    text: '"Everything was perfect. We wanted for and needed nothing. Best place on Little Pigeon Forge!"',
    author: "Michelle N., Take Me To The River Cabin",
  },
  {
    kind: "copy",
    text: "Riverfront decks. Panoramic mountain views. Private hot tubs and fire pits waiting after a day in the Smokies.",
  },
  {
    kind: "review",
    text: '"Such an amazing property! I would absolutely stay here again!"',
    author: "Derek H., Chasing Sunset Cabin",
  },
  {
    kind: "copy",
    text: "Wake up to the Smokies from your own hot tub, unwind by the fire pit at night, fall asleep minutes from Gatlinburg's lights.",
  },
  {
    kind: "review",
    text: '"Everything about this home was amazing. The views were breathtaking."',
    author: "Gary P., The WTH Cabin",
  },
  {
    kind: "copy",
    text: "Hot tubs. Fire pits. Mountain and riverfront views. Every cabin handpicked for the view, the location, and the details that make a trip feel like an escape.",
  },
  {
    kind: "copy",
    text: "Minutes from Gatlinburg and Pigeon Forge, our cabins pair prime Smoky Mountain locations with the amenities that matter — private hot tubs, fire pits, and views you won't want to leave.",
  },
];

export default function HeroRotatingText() {
  const [typed, setTyped] = useState("");
  const [author, setAuthor] = useState<string | null>(null);
  const [fading, setFading] = useState(false);
  const runningRef = useRef(true);

  useEffect(() => {
    runningRef.current = true;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function loop() {
      let i = 0;
      while (runningRef.current) {
        const slide = SLIDES[i % SLIDES.length];
        setAuthor(slide.kind === "review" ? slide.author : null);
        setFading(false);

        for (let c = 1; c <= slide.text.length && runningRef.current; c++) {
          setTyped(slide.text.slice(0, c));
          await sleep(28);
        }

        if (slide.kind === "review") {
          await sleep(3200);
          setFading(true);
          await sleep(600);
          setTyped("");
          setAuthor(null);
          await sleep(300);
        } else {
          await sleep(2200);
          for (let c = slide.text.length; c >= 0 && runningRef.current; c--) {
            setTyped(slide.text.slice(0, c));
            await sleep(14);
          }
          await sleep(300);
        }
        i++;
      }
    }

    loop();
    return () => {
      runningRef.current = false;
    };
  }, []);

  return (
    <div className="mt-6 max-w-xl min-h-[6.5rem] md:min-h-[5.5rem]">
      <p
        className={`text-base text-cream/90 transition-opacity duration-600 ease-in-out md:text-lg ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        {typed}
        {!(fading && author) && (
          <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-cream align-middle" />
        )}
        {author && (
          <span className="mt-2 block text-sm not-italic text-cream/70">— {author}</span>
        )}
      </p>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

type Part = { text: string; italic?: boolean };
type Headline = Part[];

const HEADLINES: Headline[] = [
  [
    { text: "Mountain views or riverfront — your Smokies escape, " },
    { text: "done right", italic: true },
    { text: "." },
  ],
  [
    { text: "From mountaintop to riverside, the Smokies are " },
    { text: "yours", italic: true },
    { text: " to choose." },
  ],
  [
    { text: "Handpicked", italic: true },
    { text: " stays across the Smoky Mountains." },
  ],
  [{ text: "Wake up to mountains. Fall asleep by the river." }],
  [{ text: "Your basecamp for the Smokies — wherever the view calls you." }],
  [
    { text: "Real", italic: true },
    { text: " hospitality, prime Smoky Mountain locations." },
  ],
];

function fullLength(h: Headline) {
  return h.reduce((sum, p) => sum + p.text.length, 0);
}

function renderPartial(h: Headline, n: number) {
  let remaining = n;
  const nodes: React.ReactNode[] = [];
  h.forEach((part, i) => {
    if (remaining <= 0) return;
    const take = Math.min(part.text.length, remaining);
    const slice = part.text.slice(0, take);
    remaining -= take;
    if (!slice) return;
    nodes.push(part.italic ? <em key={i}>{slice}</em> : <span key={i}>{slice}</span>);
  });
  return nodes;
}

export default function HeroRotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const runningRef = useRef(true);

  useEffect(() => {
    runningRef.current = true;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function loop() {
      let i = 0;
      while (runningRef.current) {
        setIndex(i % HEADLINES.length);
        const headline = HEADLINES[i % HEADLINES.length];
        const len = fullLength(headline);

        for (let c = 1; c <= len && runningRef.current; c++) {
          setCount(c);
          await sleep(30);
        }
        await sleep(2600);
        for (let c = len; c >= 0 && runningRef.current; c--) {
          setCount(c);
          await sleep(16);
        }
        await sleep(300);
        i++;
      }
    }

    loop();
    return () => {
      runningRef.current = false;
    };
  }, []);

  const headline = HEADLINES[index];

  return (
    <h1 className="mt-4 max-w-2xl min-h-[10rem] font-display text-4xl leading-[1.1] tracking-tight text-cream sm:min-h-[9rem] sm:text-5xl md:min-h-[11rem] md:text-6xl">
      {renderPartial(headline, count)}
      <span className="ml-1 inline-block h-[0.85em] w-[3px] animate-pulse bg-cream align-middle" />
    </h1>
  );
}

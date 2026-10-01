"use client";

import { useEffect, useRef, useState } from "react";

type Part = { text: string; italic?: boolean };

type Pair = { q: Part[]; a: string };

const PAIRS: Pair[] = [
  {
    q: [{ text: "Hi there — ready for your " }, { text: "next", italic: true }, { text: " getaway?" }],
    a: "We thought you'd never ask. Mountain views and hot tubs are waiting.",
  },
  {
    q: [{ text: "Stressed out and need a break?" }],
    a: "That's literally our whole business. Pick a cabin, we'll handle the rest.",
  },
  {
    q: [{ text: "Ever wake up to a view like this?" }],
    a: "You will here. Coffee tastes better over the Smokies.",
  },
  {
    q: [{ text: "Hot tub under the stars sound good?" }],
    a: "Every cabin's got one. Bring marshmallows for the fire pit too.",
  },
  {
    q: [{ text: "Do bears get " }, { text: "vacation days", italic: true }, { text: "?" }],
    a: "Unclear. You definitely do, though.",
  },
  {
    q: [{ text: "Tired of hotel ice machines at 2am?" }],
    a: "Our cabins skip that. Just mountains, quiet, and you.",
  },
  {
    q: [{ text: "Mountain person or " }, { text: "river", italic: true }, { text: " person?" }],
    a: "Why pick? We've got both.",
  },
  {
    q: [{ text: "Need a real excuse to disconnect?" }],
    a: "Spotty cell service in the Smokies says yes.",
  },
  {
    q: [{ text: "Wondering what's for s'mores tonight?" }],
    a: "Whatever you want. The fire pit's already lit.",
  },
  {
    q: [{ text: "So... when are you booking?" }],
    a: "Right now works great. We'll leave the porch light on.",
  },
];

function fullLength(parts: Part[]) {
  return parts.reduce((sum, p) => sum + p.text.length, 0);
}

function renderPartial(parts: Part[], n: number) {
  let remaining = n;
  const nodes: React.ReactNode[] = [];
  parts.forEach((part, i) => {
    if (remaining <= 0) return;
    const take = Math.min(part.text.length, remaining);
    const slice = part.text.slice(0, take);
    remaining -= take;
    if (!slice) return;
    nodes.push(part.italic ? <em key={i}>{slice}</em> : <span key={i}>{slice}</span>);
  });
  return nodes;
}

export default function HeroQA() {
  const [pairIndex, setPairIndex] = useState(0);
  const [typedCount, setTypedCount] = useState(0);
  const [answerVisible, setAnswerVisible] = useState(false);
  const runningRef = useRef(true);

  useEffect(() => {
    runningRef.current = true;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function loop() {
      let i = 0;
      while (runningRef.current) {
        setPairIndex(i % PAIRS.length);
        const pair = PAIRS[i % PAIRS.length];
        const len = fullLength(pair.q);

        setAnswerVisible(false);
        for (let c = 1; c <= len && runningRef.current; c++) {
          setTypedCount(c);
          await sleep(30);
        }
        await sleep(500);
        setAnswerVisible(true);
        await sleep(3200);
        setAnswerVisible(false);
        await sleep(500);
        for (let c = len; c >= 0 && runningRef.current; c--) {
          setTypedCount(c);
          await sleep(16);
        }
        await sleep(250);
        i++;
      }
    }

    loop();
    return () => {
      runningRef.current = false;
    };
  }, []);

  const pair = PAIRS[pairIndex];

  return (
    <>
      <h1 className="mt-4 max-w-2xl min-h-[10rem] font-display text-4xl leading-[1.1] tracking-tight text-cream sm:min-h-[9rem] sm:text-5xl md:min-h-[11rem] md:text-6xl">
        {renderPartial(pair.q, typedCount)}
        <span className="ml-1 inline-block h-[0.85em] w-[3px] animate-pulse bg-cream align-middle" />
      </h1>
      <div className="mt-6 max-w-xl min-h-[4rem]">
        <p
          className={`text-base text-cream/90 transition-opacity duration-500 ease-in-out md:text-lg ${
            answerVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {pair.a}
        </p>
      </div>
    </>
  );
}

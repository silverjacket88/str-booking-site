"use client";

import { useEffect, useRef, useState } from "react";
import { Part, QAPair, holidayConversations, weekdayConversations } from "@/lib/data/heroConversations";
import { getActiveHoliday } from "@/lib/utils/holidays";
import { getEasternDateOnly, getEasternWeekday } from "@/lib/utils/weeklyRotation";

// Holiday pairs are only inserted on these weekdays (0=Sun..6=Sat).
const HOLIDAY_DAYS = [2, 4]; // Tuesday, Thursday
const HOLIDAY_SLOTS = 2;

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

function buildTodaysPairs(): QAPair[] {
  const weekday = getEasternWeekday();
  const base = [...(weekdayConversations[weekday] ?? weekdayConversations[1])];

  if (HOLIDAY_DAYS.includes(weekday)) {
    const holiday = getActiveHoliday(getEasternDateOnly());
    if (holiday) {
      const pool = holidayConversations[holiday] ?? [];
      const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
      const slotsToReplace = Math.min(HOLIDAY_SLOTS, shuffledPool.length, base.length);
      const indices = [...Array(base.length).keys()].sort(() => Math.random() - 0.5).slice(0, slotsToReplace);
      indices.forEach((slot, i) => {
        base[slot] = shuffledPool[i];
      });
    }
  }

  return base;
}

// Static, deterministic default used for server rendering and the very
// first client paint, so hydration always matches. The real day/holiday
// aware set is computed client-side after mount (buildTodaysPairs uses
// Math.random and the visitor's clock, both of which can legitimately
// differ from the server and would otherwise cause a hydration mismatch).
const DEFAULT_PAIRS = weekdayConversations[1];

export default function HeroQA() {
  const [pairs, setPairs] = useState<QAPair[]>(DEFAULT_PAIRS);
  const [pairIndex, setPairIndex] = useState(0);
  const [typedCount, setTypedCount] = useState(0);
  const [answerVisible, setAnswerVisible] = useState(false);
  const runningRef = useRef(true);

  useEffect(() => {
    setPairs(buildTodaysPairs());
  }, []);

  useEffect(() => {
    runningRef.current = true;
    setPairIndex(0);
    setTypedCount(0);
    setAnswerVisible(false);
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function loop() {
      let i = 0;
      while (runningRef.current) {
        setPairIndex(i % pairs.length);
        const pair = pairs[i % pairs.length];
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
  }, [pairs]);

  const pair = pairs[pairIndex];

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

"use client";

import { useEffect, useRef, useState } from "react";
import { Part, QAPair, holidayConversations, weekdayConversations } from "@/lib/data/heroConversations";
import { getActiveHoliday } from "@/lib/utils/holidays";
import { getEasternDateOnly, getEasternWeekday } from "@/lib/utils/weeklyRotation";

// Temporarily off while the base 70 lines are still being reviewed — flip
// back to true once that's settled. Leaving the rest of the holiday logic
// in place so re-enabling is a one-line change.
const HOLIDAY_SUBSTITUTION_ENABLED = false;

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

  if (HOLIDAY_SUBSTITUTION_ENABLED && HOLIDAY_DAYS.includes(weekday)) {
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

// This page is statically built, so any day-of-week/holiday logic has to
// run client-side (after mount) to reflect the visitor's actual "today"
// rather than whatever day the site last happened to be deployed on.
// Starting from `null` (instead of a hardcoded day's pairs) avoids a
// visible flash of the wrong day's question before the real one loads —
// nothing types until the real pairs are known.
export default function HeroQA() {
  const [pairs, setPairs] = useState<QAPair[] | null>(null);
  const [pairIndex, setPairIndex] = useState(0);
  const [typedCount, setTypedCount] = useState(0);
  const [answerVisible, setAnswerVisible] = useState(false);
  const runningRef = useRef(true);

  useEffect(() => {
    setPairs(buildTodaysPairs());
  }, []);

  useEffect(() => {
    if (!pairs) return;
    const todaysPairs = pairs;
    runningRef.current = true;
    setPairIndex(0);
    setTypedCount(0);
    setAnswerVisible(false);
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function loop() {
      let i = 0;
      while (runningRef.current) {
        setPairIndex(i % todaysPairs.length);
        const pair = todaysPairs[i % todaysPairs.length];
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

  const pair = pairs ? pairs[pairIndex] : null;

  return (
    <>
      <h1 className="mt-4 max-w-2xl min-h-[10rem] font-display text-4xl leading-[1.1] tracking-tight text-cream sm:min-h-[9rem] sm:text-5xl md:min-h-[11rem] md:text-6xl">
        {pair && renderPartial(pair.q, typedCount)}
        <span className="ml-1 inline-block h-[0.85em] w-[3px] animate-pulse bg-cream align-middle" />
      </h1>
      <div className="mt-6 max-w-xl min-h-[4rem]">
        <p
          className={`text-base text-cream/90 transition-opacity duration-500 ease-in-out md:text-lg ${
            answerVisible && pair ? "opacity-100" : "opacity-0"
          }`}
        >
          {pair?.a}
        </p>
      </div>
    </>
  );
}

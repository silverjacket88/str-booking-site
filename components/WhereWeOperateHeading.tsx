"use client";

import { useEffect, useState } from "react";
import { whereWeOperateSets } from "@/lib/data/whereWeOperate";
import { getEasternWeekNumber, pickWeeklyFromSets } from "@/lib/utils/weeklyRotation";

export default function WhereWeOperateHeading() {
  // Default to week 0's set during server render / first paint, then sync to
  // the real current week once mounted (avoids a server/client date mismatch).
  const [set, setSet] = useState(whereWeOperateSets[0]);

  useEffect(() => {
    const week = getEasternWeekNumber();
    setSet(pickWeeklyFromSets(whereWeOperateSets, week));
  }, []);

  return (
    <>
      <h2 className="mt-2 font-display text-3xl tracking-tight text-ink md:text-4xl">
        {set.heading}
      </h2>
      <span className="mt-3 block h-[3px] w-12 bg-forest" aria-hidden />
      <p className="mt-4 max-w-md text-ink-soft">{set.subtext}</p>
    </>
  );
}

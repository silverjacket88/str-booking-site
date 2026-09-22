"use client";

import { useEffect, useMemo, useState } from "react";
import { DayRate } from "@/lib/pms/types";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function toISO(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

function startOfMonth(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
}

export default function AvailabilityCalendar({
  propertyId,
  checkIn,
  checkOut,
  onSelect,
}: {
  propertyId: string;
  checkIn: string;
  checkOut: string;
  onSelect: (checkIn: string, checkOut: string) => void;
}) {
  const today = useMemo(() => {
    const t = new Date();
    return new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()));
  }, []);
  const rangeEnd = useMemo(() => addDays(today, 90), [today]);
  const requestKey = `${propertyId}-${toISO(today)}-${toISO(rangeEnd)}`;

  const [result, setResult] = useState<{ key: string; days: Record<string, DayRate> } | null>(
    null
  );
  const loading = result?.key !== requestKey;
  const days = result?.key === requestKey ? result.days : {};

  useEffect(() => {
    let cancelled = false;
    fetch(
      `/api/availability?propertyId=${propertyId}&start=${toISO(today)}&end=${toISO(rangeEnd)}`
    )
      .then((res) => res.json())
      .then((data: { days: DayRate[] }) => {
        if (cancelled) return;
        const map: Record<string, DayRate> = {};
        data.days.forEach((d) => (map[d.date] = d));
        setResult({ key: requestKey, days: map });
      });
    return () => {
      cancelled = true;
    };
  }, [propertyId, today, rangeEnd, requestKey]);

  function handleClick(dateStr: string) {
    const day = days[dateStr];
    if (!day || !day.available) return;

    if (!checkIn || (checkIn && checkOut)) {
      onSelect(dateStr, "");
      return;
    }
    if (dateStr <= checkIn) {
      onSelect(dateStr, "");
      return;
    }
    onSelect(checkIn, dateStr);
  }

  const firstMonth = startOfMonth(today);
  const secondMonth = new Date(
    Date.UTC(firstMonth.getUTCFullYear(), firstMonth.getUTCMonth() + 1, 1)
  );
  const months = [firstMonth, secondMonth];

  return (
    <div>
      <div className="grid gap-8 sm:grid-cols-2">
        {months.map((monthStart, idx) => (
          <MonthGrid
            key={idx}
            monthStart={monthStart}
            days={days}
            checkIn={checkIn}
            checkOut={checkOut}
            onClick={handleClick}
          />
        ))}
      </div>
      {loading && <p className="mt-3 text-xs text-ink-soft">Loading availability…</p>}
    </div>
  );
}

function MonthGrid({
  monthStart,
  days,
  checkIn,
  checkOut,
  onClick,
}: {
  monthStart: Date;
  days: Record<string, DayRate>;
  checkIn: string;
  checkOut: string;
  onClick: (date: string) => void;
}) {
  const year = monthStart.getUTCFullYear();
  const month = monthStart.getUTCMonth();
  const firstWeekday = new Date(Date.UTC(year, month, 1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();

  const cells: (string | null)[] = Array(firstWeekday).fill(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(toISO(new Date(Date.UTC(year, month, d))));
  }

  return (
    <div>
      <p className="font-display text-lg text-ink">
        {MONTH_NAMES[month]} {year}
      </p>
      <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs text-ink-soft">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={i}>{d}</div>
        ))}
        {cells.map((date, i) => {
          if (!date) return <div key={i} />;
          const info = days[date];
          const inRange = checkIn && checkOut && date > checkIn && date < checkOut;
          const isEdge = date === checkIn || date === checkOut;
          const unavailable = info ? !info.available : false;

          return (
            <button
              key={date}
              type="button"
              disabled={unavailable}
              onClick={() => onClick(date)}
              aria-label={date}
              className={`aspect-square rounded-md text-xs transition-colors ${
                unavailable
                  ? "cursor-not-allowed text-ink-soft/40 line-through"
                  : isEdge
                    ? "bg-forest text-cream"
                    : inRange
                      ? "bg-forest/20 text-ink"
                      : "text-ink hover:bg-cream-dark"
              }`}
            >
              {Number(date.slice(-2))}
            </button>
          );
        })}
      </div>
    </div>
  );
}

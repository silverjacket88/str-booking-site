import { SimpleDate } from "@/lib/utils/weeklyRotation";

export type HolidayName = "thanksgiving" | "christmas" | "easter" | "springbreak" | "summer";

function daysBetween(a: SimpleDate, b: SimpleDate): number {
  const aMs = Date.UTC(a.year, a.month - 1, a.day);
  const bMs = Date.UTC(b.year, b.month - 1, b.day);
  return Math.round((bMs - aMs) / 86400000);
}

function computeEaster(year: number): { month: number; day: number } {
  // Anonymous Gregorian algorithm.
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return { month, day };
}

function computeThanksgiving(year: number): { month: number; day: number } {
  const nov1Day = new Date(Date.UTC(year, 10, 1)).getUTCDay();
  const firstThursday = 1 + ((4 - nov1Day + 7) % 7);
  return { month: 11, day: firstThursday + 21 };
}

function computeMemorialDay(year: number): { month: number; day: number } {
  const may31Day = new Date(Date.UTC(year, 4, 31)).getUTCDay();
  const lastMonday = 31 - ((may31Day + 6) % 7);
  return { month: 5, day: lastMonday };
}

const HOLIDAYS: { name: HolidayName; compute: (year: number) => { month: number; day: number } }[] = [
  { name: "thanksgiving", compute: computeThanksgiving },
  { name: "christmas", compute: () => ({ month: 12, day: 25 }) },
  { name: "easter", compute: computeEaster },
  { name: "springbreak", compute: () => ({ month: 3, day: 15 }) },
  { name: "summer", compute: computeMemorialDay },
];

const LOOKAHEAD_DAYS = 90;

/** Returns the holiday within 90 days ahead of `today`, if any (checks adjacent years for wraparound). */
export function getActiveHoliday(today: SimpleDate): HolidayName | null {
  for (const h of HOLIDAYS) {
    for (const y of [today.year - 1, today.year, today.year + 1]) {
      const hd = h.compute(y);
      const diff = daysBetween(today, { year: y, month: hd.month, day: hd.day });
      if (diff >= 0 && diff <= LOOKAHEAD_DAYS) return h.name;
    }
  }
  return null;
}

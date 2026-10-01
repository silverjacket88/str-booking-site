// Shared helpers for anything that rotates on a weekly cadence, or needs to
// know "today" in the cabins' own timezone (Eastern) rather than the
// visitor's local time.

export type SimpleDate = { year: number; month: number; day: number };

const EASTERN_TZ = "America/New_York";

function getEasternParts(d: Date) {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: EASTERN_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  });
  const parts = fmt.formatToParts(d);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    year: Number(get("year")),
    month: Number(get("month")),
    day: Number(get("day")),
    weekday: get("weekday"),
  };
}

/** 0 = Sunday ... 6 = Saturday, based on Eastern time. */
export function getEasternWeekday(d: Date = new Date()): number {
  const map: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return map[getEasternParts(d).weekday] ?? 0;
}

export function getEasternDateOnly(d: Date = new Date()): SimpleDate {
  const { year, month, day } = getEasternParts(d);
  return { year, month, day };
}

/** Whole weeks elapsed since a fixed Monday epoch, based on Eastern calendar date. */
export function getEasternWeekNumber(d: Date = new Date()): number {
  const { year, month, day } = getEasternDateOnly(d);
  const epoch = Date.UTC(2024, 0, 1); // Jan 1, 2024 — a Monday
  const current = Date.UTC(year, month - 1, day);
  const daysSince = Math.floor((current - epoch) / 86400000);
  return Math.floor(daysSince / 7);
}

/** Tiny seeded PRNG (mulberry32) so "random" picks are stable for a given seed. */
function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function deterministicShuffle<T>(items: T[], seed: number): T[] {
  const rand = mulberry32(seed);
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Picks one item from a fixed-size list, cycling weekly, repeating once exhausted. */
export function pickWeeklyFromSets<T>(sets: T[], weekNumber: number): T {
  return sets[((weekNumber % sets.length) + sets.length) % sets.length];
}

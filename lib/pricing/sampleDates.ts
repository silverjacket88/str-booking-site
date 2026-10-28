function toISO(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

export interface DateCandidate {
  checkIn: string;
  checkOut: string;
  nights: number;
  isWeekend: boolean;
}

/**
 * Candidate 3-night stays in the calendar month right after `today`:
 * every Friday-to-Monday weekend first (in date order), then every
 * Monday-to-Thursday weekday stretch as a fallback if no weekend in that
 * month turns out to be available. Real availability is checked
 * separately (see getFirstAvailableSample) - this just builds the
 * candidate list to try, in priority order.
 */
export function buildNextMonthCandidates(today: Date = new Date()): DateCandidate[] {
  const year = today.getUTCFullYear();
  const month = today.getUTCMonth();
  const nextMonthStart = new Date(Date.UTC(year, month + 1, 1));
  const nextMonthEnd = new Date(Date.UTC(year, month + 2, 1)); // exclusive

  const weekends: DateCandidate[] = [];
  const weekdays: DateCandidate[] = [];

  for (let d = new Date(nextMonthStart); d < nextMonthEnd; d = addDays(d, 1)) {
    const dayOfWeek = d.getUTCDay(); // 0=Sun..6=Sat
    if (dayOfWeek === 5) {
      // Friday -> Monday (3 nights)
      const checkOut = addDays(d, 3);
      if (checkOut < nextMonthEnd) {
        weekends.push({
          checkIn: toISO(d),
          checkOut: toISO(checkOut),
          nights: 3,
          isWeekend: true,
        });
      }
    }
    if (dayOfWeek === 1) {
      // Monday -> Thursday (3 nights)
      const checkOut = addDays(d, 3);
      if (checkOut < nextMonthEnd) {
        weekdays.push({
          checkIn: toISO(d),
          checkOut: toISO(checkOut),
          nights: 3,
          isWeekend: false,
        });
      }
    }
  }

  return [...weekends, ...weekdays];
}

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
 * Candidate 3-night stays in a single calendar month: every Friday-to-Monday
 * weekend first (in date order), then every Monday-to-Thursday weekday
 * stretch as a fallback if no weekend in that month turns out to be
 * available. Real availability is checked separately (see
 * getFirstAvailableSample) - this just builds the candidate list to try,
 * in priority order.
 */
function buildMonthCandidates(monthStart: Date): DateCandidate[] {
  const monthEnd = new Date(Date.UTC(monthStart.getUTCFullYear(), monthStart.getUTCMonth() + 1, 1)); // exclusive

  const weekends: DateCandidate[] = [];
  const weekdays: DateCandidate[] = [];

  for (let d = new Date(monthStart); d < monthEnd; d = addDays(d, 1)) {
    const dayOfWeek = d.getUTCDay(); // 0=Sun..6=Sat
    if (dayOfWeek === 5) {
      // Friday -> Monday (3 nights)
      const checkOut = addDays(d, 3);
      if (checkOut < monthEnd) {
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
      if (checkOut < monthEnd) {
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

/**
 * Candidate 3-night stays starting with the calendar month right after
 * `today` and cascading forward month-by-month (up to `monthsAhead` months)
 * so a caller can keep trying later months instead of giving up when the
 * immediate next month is fully booked. Candidates are grouped by month, in
 * chronological order; within each month, weekends are tried before
 * weekdays (see buildMonthCandidates).
 */
export function buildNextMonthCandidates(
  today: Date = new Date(),
  monthsAhead: number = 12
): DateCandidate[] {
  const year = today.getUTCFullYear();
  const month = today.getUTCMonth();

  const candidates: DateCandidate[] = [];
  for (let offset = 1; offset <= monthsAhead; offset++) {
    const monthStart = new Date(Date.UTC(year, month + offset, 1));
    candidates.push(...buildMonthCandidates(monthStart));
  }

  return candidates;
}

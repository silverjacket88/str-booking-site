import AnimatedNumber from "@/components/AnimatedNumber";

export interface Stat {
  value: number | string;
  label: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

const DESKTOP_COLS: Record<number, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

export default function StatsBar({ stats }: { stats: Stat[] }) {
  const desktopCols = DESKTOP_COLS[stats.length] ?? "md:grid-cols-4";

  return (
    <div className={`grid grid-cols-2 gap-6 text-center md:gap-10 ${desktopCols}`}>
      {stats.map((s) => (
        <div key={s.label}>
          <p className="font-display text-3xl tracking-tight text-ink md:text-4xl">
            {typeof s.value === "number" ? (
              <AnimatedNumber
                value={s.value}
                decimals={s.decimals}
                prefix={s.prefix}
                suffix={s.suffix}
              />
            ) : (
              s.value
            )}
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}

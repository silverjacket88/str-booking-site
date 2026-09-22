import AnimatedNumber from "@/components/AnimatedNumber";

export interface Stat {
  value: number | string;
  label: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export default function StatsBar({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
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

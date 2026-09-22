import AnimatedNumber from "@/components/AnimatedNumber";
import { funFacts } from "@/lib/data/funFacts";

export default function LocalFunFacts() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {funFacts.map((fact) => (
        <div
          key={fact.label}
          className="rounded-lg border border-line bg-paper p-6 text-center"
        >
          <span className="text-3xl">{fact.emoji}</span>
          <p className="mt-3 font-display text-3xl tracking-tight text-forest">
            <AnimatedNumber
              value={fact.value}
              decimals={fact.decimals}
              prefix={fact.prefix}
              suffix={fact.suffix}
            />
          </p>
          <p className="mt-1 text-sm font-medium text-ink">{fact.label}</p>
          <p className="mt-2 text-xs leading-relaxed text-ink-soft">{fact.note}</p>
        </div>
      ))}
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { properties } from "@/lib/data/properties";
import { market } from "@/lib/data/market";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.founderStoryTitle,
};

export default function AboutPage() {
  const avgRating = properties.reduce((sum, p) => sum + p.rating, 0) / properties.length;

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-wider text-forest">About us</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight text-ink md:text-5xl">
        {siteConfig.founderStoryTitle}
      </h1>

      <div className="mt-6 space-y-4 text-ink-soft">
        {siteConfig.founderStory.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-line bg-paper p-8">
        <StatsBar
          stats={[
            { value: properties.length, label: "Cabins" },
            { value: `${market.name}, ${market.state}`, label: "Where we operate" },
            { value: avgRating, decimals: 2, label: "Avg. guest rating" },
            {
              value: siteConfig.stats.avgResponseMinutes,
              suffix: "min",
              label: "Avg. response",
            },
          ]}
        />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg bg-forest p-8 text-cream">
          <h2 className="font-display text-2xl tracking-tight">Planning a trip?</h2>
          <p className="mt-2 text-cream/80">
            Browse all three cabins and book direct — no platform fees.
          </p>
          <Link
            href="/cabins"
            className="mt-5 inline-block rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-forest-dark hover:bg-cream-dark"
          >
            Browse cabins →
          </Link>
        </div>
        <div className="rounded-lg border border-line bg-paper p-8">
          <h2 className="font-display text-2xl tracking-tight text-ink">Own a rental?</h2>
          <p className="mt-2 text-ink-soft">
            See how our small, hands-on team manages cabins in {market.name}.
          </p>
          <Link
            href="/for-owners"
            className="mt-5 inline-block rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream hover:bg-forest-dark"
          >
            For property owners →
          </Link>
        </div>
      </div>
    </div>
  );
}

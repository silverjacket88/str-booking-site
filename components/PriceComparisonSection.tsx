import Link from "next/link";
import { getPriceComparison } from "@/lib/pricing/comparisonData";
import { Channel } from "@/lib/pricing/channelMarkup";

const CHANNEL_LABEL: Record<Channel, string> = {
  airbnb: "Airbnb",
  vrbo: "Vrbo",
  direct: "Book direct",
};

function formatDateRange(checkIn: string, checkOut: string): string {
  const fmt = (iso: string) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  const [year] = checkOut.split("-");
  return `${fmt(checkIn)} - ${fmt(checkOut)}, ${year}`;
}

export default async function PriceComparisonSection() {
  const comparison = await getPriceComparison();
  if (!comparison) return null; // nothing available anywhere next month - skip rather than show broken data

  const { checkIn, checkOut, nights, checkedAt, cabins } = comparison;

  return (
    <section className="border-y border-line/60 bg-forest py-16 text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-cream/70">
          Real numbers, not a sales pitch
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl tracking-tight md:text-4xl">
          Same cabin, same dates - here&apos;s what booking direct actually saves you.
        </h2>
        <p className="mt-3 max-w-2xl text-cream/80">
          Sample dates: {formatDateRange(checkIn, checkOut)} ({nights} nights). Direct pricing
          pulled live from our booking system; Airbnb and Vrbo reflect our actual channel
          pricing for those platforms. Checked {checkedAt}.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cabins.map((cabin) => {
            const byChannel = Object.fromEntries(
              cabin.totals.map((t) => [t.channel, t.total])
            ) as Record<Channel, number>;
            const directTotal = byChannel.direct;
            const airbnbSavings = byChannel.airbnb - directTotal;
            const savingsPct = Math.round((airbnbSavings / byChannel.airbnb) * 100);

            return (
              <div
                key={cabin.slug}
                className="rounded-lg border border-cream/20 bg-cream/5 p-6"
              >
                <p className="font-display text-lg tracking-tight">{cabin.name}</p>

                <div className="mt-4 space-y-2 text-sm">
                  {(["airbnb", "vrbo", "direct"] as Channel[]).map((channel) => (
                    <div
                      key={channel}
                      className={`flex items-center justify-between rounded-md px-3 py-2 ${
                        channel === "direct" ? "bg-cream text-forest-dark" : "text-cream/90"
                      }`}
                    >
                      <span className={channel === "direct" ? "font-semibold" : ""}>
                        {CHANNEL_LABEL[channel]}
                      </span>
                      <span className={channel === "direct" ? "font-semibold" : "line-through opacity-70"}>
                        ${byChannel[channel].toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-center text-sm font-medium text-gold">
                  Save ${airbnbSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })} (
                  {savingsPct}%) vs. Airbnb
                </p>

                <Link
                  href={`/cabins/${cabin.slug}`}
                  className="mt-4 block rounded-full bg-cream px-5 py-2.5 text-center text-sm font-medium text-forest-dark hover:bg-cream-dark"
                >
                  Check these dates →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

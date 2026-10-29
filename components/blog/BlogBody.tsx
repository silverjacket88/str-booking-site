import Link from "next/link";
import { BlogBlock } from "@/lib/types";
import { getBlogPost } from "@/lib/data/blog";

function Paragraph({ block, index }: { block: BlogBlock & { kind: "p" }; index: number }) {
  return (
    <p
      key={index}
      className={
        block.lead
          ? "text-lg leading-relaxed text-ink"
          : block.note
            ? "rounded-lg border border-line/60 bg-cream-dark p-4 text-sm leading-relaxed text-ink-soft"
            : "leading-relaxed text-ink-soft"
      }
    >
      {block.label && <strong className="text-ink">{block.label} </strong>}
      {block.text}
    </p>
  );
}

export default function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "p":
            return <Paragraph key={i} block={block} index={i} />;

          case "pricingTiles":
            return (
              <div key={i} className="grid gap-3 sm:grid-cols-3">
                {block.items.map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-lg border p-5 text-center ${
                      item.emphasized
                        ? "border-forest bg-forest text-cream"
                        : "border-line bg-paper"
                    }`}
                  >
                    <p className="font-display text-3xl tracking-tight">{item.price}</p>
                    <p
                      className={`mt-1 text-xs font-semibold uppercase tracking-wider ${
                        item.emphasized ? "text-cream/80" : "text-ink-soft"
                      }`}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            );

          case "qa":
            return (
              <div key={i} className="space-y-4 border-t border-line pt-6">
                {block.items.map((item) => (
                  <div key={item.q}>
                    <p className="font-medium text-ink">{item.q}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.a}</p>
                  </div>
                ))}
              </div>
            );

          case "timeline":
            return (
              <div key={i} className="space-y-6 border-t border-line pt-6">
                {block.items.map((item, idx) => (
                  <div key={item.label} className="relative flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-forest text-xs font-bold text-cream">
                        {idx + 1}
                      </span>
                      {idx < block.items.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-line" aria-hidden />
                      )}
                    </div>
                    <div className="pb-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-forest">
                        {item.label}
                      </p>
                      <p className="mt-0.5 font-display text-lg tracking-tight text-ink">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                      {item.relatedSlug &&
                        (() => {
                          const related = getBlogPost(item.relatedSlug!);
                          return related ? (
                            <Link
                              href={`/blog/${related.slug}`}
                              className="mt-2 inline-block text-sm font-medium text-forest hover:text-forest-dark"
                            >
                              Read: {related.title} →
                            </Link>
                          ) : null;
                        })()}
                    </div>
                  </div>
                ))}
              </div>
            );

          case "trailCards":
            return (
              <div key={i} className="grid gap-4 sm:grid-cols-2">
                {block.items.map((trail) => (
                  <div key={trail.name} className="rounded-lg border border-line bg-paper p-5">
                    <p className="font-display text-lg tracking-tight text-ink">{trail.name}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {trail.pills.map((pill) => (
                        <span
                          key={pill}
                          className="rounded-full bg-cream-dark px-2.5 py-1 text-xs text-ink-soft"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{trail.text}</p>
                  </div>
                ))}
              </div>
            );

          case "venueGroup":
            return (
              <div key={i} className="border-t border-line pt-6 first:border-t-0 first:pt-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-forest">
                  {block.category}
                </p>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  {block.items.map((venue) => (
                    <div key={venue.name} className="rounded-lg border border-line bg-paper p-5">
                      <p className="font-display text-lg tracking-tight text-ink">{venue.name}</p>
                      {venue.pills && venue.pills.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {venue.pills.map((pill) => (
                            <span
                              key={pill}
                              className="rounded-full bg-cream-dark px-2.5 py-1 text-xs text-ink-soft"
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{venue.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "checklist":
            return (
              <div key={i} className="space-y-4 border-t border-line pt-6">
                {block.items.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span
                      className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-forest text-[10px] text-cream"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      <strong className="text-ink">{item.title}</strong> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

import Link from "next/link";
import { amenityTags } from "@/lib/data/amenityTags";
import { properties } from "@/lib/data/properties";

export default function AmenityChips() {
  const presentTags = new Set(properties.flatMap((p) => p.tags));
  const visibleTags = amenityTags.filter((tag) => presentTags.has(tag.slug));

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {visibleTags.map((tag) => (
        <Link
          key={tag.slug}
          href={`/cabins?tag=${tag.slug}`}
          className="group flex flex-col items-start gap-2 rounded-lg border border-line bg-paper p-4 transition-colors hover:border-forest"
        >
          <span className="text-2xl">{tag.emoji}</span>
          <span className="font-display text-base tracking-tight text-ink">{tag.label}</span>
          <span className="text-xs text-ink-soft">{tag.blurb}</span>
        </Link>
      ))}
    </div>
  );
}

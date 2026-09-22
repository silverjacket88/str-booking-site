import { Review } from "@/lib/types";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-line/60 bg-paper p-6">
      <div className="flex gap-0.5 text-gold" aria-hidden>
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink">&ldquo;{review.quote}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-xs font-semibold text-cream">
          {review.initials}
        </div>
        <div>
          <p className="text-sm font-medium text-ink">{review.author}</p>
          <p className="text-xs text-ink-soft">{review.propertyName} · Verified guest</p>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { market } from "@/lib/data/market";
import { properties } from "@/lib/data/properties";
import { reviews } from "@/lib/data/reviews";
import ReviewCard from "@/components/ReviewCard";

const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
const reviewsTitle = `Guest Reviews - ${avgRating.toFixed(2)} out of 5`;
const reviewsDescription = `${reviews.length} real guest reviews across our ${market.name} cabins, pulled directly from our booking system.`;

export const metadata: Metadata = {
  title: reviewsTitle,
  description: reviewsDescription,
  alternates: { canonical: "/reviews" },
  openGraph: { title: reviewsTitle, description: reviewsDescription, url: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-wider text-forest">
        Why guests love us
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight text-ink md:text-5xl">
        {`${avgRating.toFixed(2)} out of 5, across ${reviews.length} reviews.`}
      </h1>
      <p className="mt-3 max-w-2xl text-ink-soft">
        Every review here is real, pulled directly from our booking system - nothing curated
        or written for show.
      </p>

      {properties.map((property) => {
        const propertyReviews = reviews.filter((r) => r.propertyName === property.name);
        if (propertyReviews.length === 0) return null;
        return (
          <section key={property.id} className="mt-14">
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
              <h2 className="font-display text-2xl tracking-tight text-ink">{property.name}</h2>
              <Link
                href={`/cabins/${property.slug}`}
                className="whitespace-nowrap text-sm text-forest hover:text-forest-dark"
              >
                View cabin →
              </Link>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {propertyReviews.map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </div>
          </section>
        );
      })}

      <div className="mt-16 rounded-lg bg-forest p-8 text-cream">
        <h2 className="font-display text-2xl tracking-tight">Ready to see it for yourself?</h2>
        <p className="mt-2 text-cream/80">
          Browse all {properties.length} cabins and book direct - no platform fees.
        </p>
        <Link
          href="/cabins"
          className="mt-5 inline-block rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-forest-dark hover:bg-cream-dark"
        >
          Browse cabins →
        </Link>
      </div>
    </div>
  );
}

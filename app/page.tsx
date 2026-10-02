import Image from "next/image";
import Link from "next/link";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import HeroQA from "@/components/HeroQA";
import SearchWidget from "@/components/SearchWidget";
import StatsBar from "@/components/StatsBar";
import AmenityChips from "@/components/AmenityChips";
import PropertyCard from "@/components/PropertyCard";
import GuestJourneyCarousel from "@/components/GuestJourneyCarousel";
import ReviewCard from "@/components/ReviewCard";
import SwipeCarousel from "@/components/SwipeCarousel";
import PhotoMarquee from "@/components/PhotoMarquee";
import LocalFunFacts from "@/components/LocalFunFacts";
import WhereWeOperateHeading from "@/components/WhereWeOperateHeading";
import OurCabinsHeading from "@/components/OurCabinsHeading";
import { market } from "@/lib/data/market";
import { properties } from "@/lib/data/properties";
import { reviews } from "@/lib/data/reviews";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  const avgRating = properties.reduce((sum, p) => sum + p.rating, 0) / properties.length;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroVideoBackground />

        <div className="mx-auto max-w-7xl px-6 pb-40 pt-28 md:pt-36">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream">
            {market.name}, {market.state}
          </p>
          <HeroQA />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="-mt-28 md:-mt-24">
            <SearchWidget />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-16 pt-10">
          <StatsBar
            stats={[
              { value: properties.length, label: "Handpicked Stays" },
              { value: `${market.name}, ${market.state}`, label: "Prime Smoky Location" },
              { value: avgRating, decimals: 2, label: "Guest Approved" },
              {
                value: siteConfig.stats.avgResponseMinutes,
                suffix: "min",
                label: "Here When You Need Us",
              },
            ]}
          />
        </div>
      </section>

      {/* Amenity chips */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-wider text-forest">
          Your escape, your way
        </p>
        <h2 className="mt-2 font-display text-3xl tracking-tight text-ink md:text-4xl">
          Search by the things you can&apos;t vacation without.
        </h2>
        <div className="mt-8">
          <AmenityChips />
        </div>
      </section>

      {/* The area */}
      <section className="border-y border-line/60 bg-cream-dark/50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <WhereWeOperateHeading />
            <p className="mt-2 max-w-md text-sm text-ink-soft">
              Covers {market.towns.join(", ")}.
            </p>
            <Link
              href="/cabins"
              className="mt-6 inline-block rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-cream shadow-[0_8px_20px_-8px_rgba(63,74,56,0.55)] hover:bg-forest-dark"
            >
              See all {properties.length} cabins →
            </Link>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <Image
              src={market.heroImage}
              alt={`${market.name}, ${market.state}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Photo marquee */}
      <section className="py-12">
        <PhotoMarquee />
      </section>

      {/* Our cabins */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-forest">
              Our cabins
            </p>
            <OurCabinsHeading />
          </div>
          <Link
            href="/cabins"
            className="whitespace-nowrap text-sm font-medium text-forest hover:underline"
          >
            View all {properties.length} cabins →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>

      {/* Guest journey (merged "why book direct" + "guest journey") */}
      <section className="border-y border-line/60 bg-forest/5 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-forest">
            The comfort of home. Your home away from home in the Smokies.
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl tracking-tight text-ink md:text-4xl">
            The Alderford booking direct difference
          </h2>
          <div className="mt-10">
            <GuestJourneyCarousel />
          </div>
        </div>
      </section>

      {/* Fun facts about the area */}
      <section
        id="fun-facts"
        className="scroll-mt-24 border-y border-line/60 bg-gold/8 py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-forest">
            While you&apos;re here
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl tracking-tight text-ink md:text-4xl">
            A few fun facts about the Smokies.
          </h2>
          <div className="mt-10">
            <LocalFunFacts />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-line/60 bg-cream-dark py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-forest">
            Why guests love us
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-ink md:text-4xl">
            {`${avgRating.toFixed(2)} out of 5. Here's why.`}
          </h2>
          <div className="mt-10">
            <SwipeCarousel>
              {reviews
                .filter((r) => r.featured)
                .map((r) => (
                  <ReviewCard key={r.id} review={r} />
                ))}
            </SwipeCarousel>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl rounded-lg border border-line bg-paper p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-forest">About us</p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-ink md:text-4xl">
            {siteConfig.founderStoryTitle}
          </h2>
          <div className="mt-6 space-y-4 text-ink-soft">
            {siteConfig.founderStory.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom booking bar */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <SearchWidget />
      </section>
    </>
  );
}

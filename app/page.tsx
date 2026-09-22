import Image from "next/image";
import Link from "next/link";
import SearchWidget from "@/components/SearchWidget";
import StatsBar from "@/components/StatsBar";
import AmenityChips from "@/components/AmenityChips";
import PropertyCard from "@/components/PropertyCard";
import JourneyTimeline from "@/components/JourneyTimeline";
import StayTimeline from "@/components/StayTimeline";
import ReviewCard from "@/components/ReviewCard";
import PhotoMarquee from "@/components/PhotoMarquee";
import LocalFunFacts from "@/components/LocalFunFacts";
import { market } from "@/lib/data/market";
import { properties } from "@/lib/data/properties";
import { reviews } from "@/lib/data/reviews";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  const avgRating = properties.reduce((sum, p) => sum + p.rating, 0) / properties.length;
  const marqueeImages = properties.flatMap((p) => p.images.slice(0, 2));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://picsum.photos/seed/alderford-hero/1920/1200"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-cream" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-40 pt-28 md:pt-36">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream">
            {market.name}, {market.state}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.1] tracking-tight text-cream sm:text-5xl md:text-6xl">
            Three cabins, <span className="italic">one</span> family running them.
          </h1>
          <p className="mt-6 max-w-xl text-base text-cream/90 md:text-lg">
            {siteConfig.description}{" "}
            No portfolio of a hundred houses — just three, in Sevierville, kept the way
            we&apos;d want them kept for our own family.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="-mt-28 md:-mt-24">
            <SearchWidget />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-16 pt-10">
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
      </section>

      {/* Amenity chips */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-wider text-forest">
          Find your perfect stay
        </p>
        <h2 className="mt-2 font-display text-3xl tracking-tight text-ink md:text-4xl">
          Browse by what matters most to you.
        </h2>
        <div className="mt-8">
          <AmenityChips />
        </div>
      </section>

      {/* The area */}
      <section className="border-y border-line/60 bg-cream-dark/50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-forest">
              Where we operate
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-ink md:text-4xl">
              All three cabins, one town: {market.name}, {market.state}.
            </h2>
            <span className="mt-3 block h-[3px] w-12 bg-forest" aria-hidden />
            <p className="mt-4 max-w-md text-ink-soft">{market.blurb}</p>
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
        <PhotoMarquee images={marqueeImages} />
      </section>

      {/* Our cabins */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-forest">
              Our cabins
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-ink md:text-4xl">
              Hand-picked, professionally managed, ready when you arrive.
            </h2>
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

      {/* Why book direct */}
      <section className="border-y border-line/60 bg-cream-dark/50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-forest">
            Why guests book direct
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl tracking-tight text-ink md:text-4xl">
            A stay that feels easy, from search to checkout.
          </h2>
          <div className="mt-10">
            <JourneyTimeline />
          </div>
        </div>
      </section>

      {/* Guest journey */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-wider text-forest">
          The guest journey
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl tracking-tight text-ink md:text-4xl">
          From first click to checkout, seamlessly.
        </h2>
        <div className="mt-10">
          <StayTimeline />
        </div>
      </section>

      {/* Fun facts about the area */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-wider text-forest">
          While you&apos;re here
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl tracking-tight text-ink md:text-4xl">
          A few fun facts about {market.name}.
        </h2>
        <div className="mt-10">
          <LocalFunFacts />
        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-line/60 bg-cream-dark/50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-forest">
            What guests say
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-ink md:text-4xl">
            {avgRating.toFixed(2)} out of 5, every time.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-forest">About us</p>
        <h2 className="mx-auto mt-2 max-w-2xl font-display text-3xl tracking-tight text-ink md:text-4xl">
          {siteConfig.founderStoryTitle}
        </h2>
        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-ink-soft">
          {siteConfig.founderStory.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/about"
            className="inline-block rounded-full border border-forest px-6 py-2.5 text-sm font-medium text-forest hover:bg-forest hover:text-cream"
          >
            Read more →
          </Link>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 md:grid-cols-2">
        <div className="rounded-lg bg-forest p-10 text-cream">
          <h3 className="font-display text-2xl tracking-tight">Ready to book your next trip?</h3>
          <p className="mt-3 text-cream/80">
            Browse all {properties.length} cabins in {market.name}, {market.state}. Book direct
            and skip the platform fees.
          </p>
          <Link
            href="/cabins"
            className="mt-6 inline-block rounded-full bg-cream px-6 py-2.5 text-sm font-medium text-forest-dark hover:bg-cream-dark"
          >
            Browse all cabins →
          </Link>
        </div>
        <div className="rounded-lg border border-line bg-paper p-10">
          <h3 className="font-display text-2xl tracking-tight text-ink">
            Want to earn more from your rental?
          </h3>
          <p className="mt-3 text-ink-soft">
            We manage the whole thing — pricing, guests, maintenance, and deposits. Get a
            free rental review and see what your property could earn.
          </p>
          <Link
            href="/for-owners"
            className="mt-6 inline-block rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-cream shadow-[0_8px_20px_-8px_rgba(63,74,56,0.55)] hover:bg-forest-dark"
          >
            Get a free rental review →
          </Link>
        </div>
      </section>
    </>
  );
}

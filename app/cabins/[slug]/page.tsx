import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProperty, properties } from "@/lib/data/properties";
import { standardAmenities } from "@/lib/data/standardAmenities";
import { getAmenityTag } from "@/lib/data/amenityTags";
import PropertyGallery from "@/components/PropertyGallery";
import AmenitiesList from "@/components/AmenitiesList";
import BookingPanel from "@/components/BookingPanel";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const property = getProperty(slug);
  if (!property) return {};
  return {
    title: property.name,
    description: property.tagline,
  };
}

export default async function PropertyPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const property = getProperty(slug);
  if (!property) notFound();

  const allAmenities = [...property.amenities, ...standardAmenities];

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <Link href="/cabins" className="text-sm text-ink-soft hover:text-forest">
        ← All cabins
      </Link>

      <div className="mt-4">
        <PropertyGallery images={property.images} name={property.name} />
      </div>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_380px]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            {property.city}, {property.state}
          </p>
          <h1 className="mt-1 font-display text-3xl tracking-tight text-ink md:text-4xl">
            {property.name}
          </h1>
          <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-soft">
            <span>Max. {property.maxGuests} guests</span>
            <span aria-hidden>·</span>
            <span>{property.bedrooms} bedrooms</span>
            <span aria-hidden>·</span>
            <span>{property.baths} baths</span>
            <span aria-hidden>·</span>
            <span className="flex items-center gap-1 text-ink">
              <span className="text-gold" aria-hidden>★</span>
              {property.rating.toFixed(2)} avg. ({property.reviewCount} reviews)
            </span>
          </p>

          {property.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {property.tags.map((tag) => {
                const info = getAmenityTag(tag);
                if (!info) return null;
                return (
                  <span
                    key={tag}
                    className="rounded-full bg-cream-dark px-3 py-1 text-xs text-ink"
                  >
                    {info.emoji} {info.label}
                  </span>
                );
              })}
            </div>
          )}

          <div className="mt-8 border-t border-line pt-8">
            <h2 className="font-display text-2xl tracking-tight text-ink">About this cabin</h2>
            <span className="mt-2 block h-[3px] w-10 bg-forest" aria-hidden />
            <p className="mt-4 text-ink">{property.tagline}</p>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink-soft">
              {property.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-8 sm:grid-cols-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Check-in
              </p>
              <p className="mt-1 text-sm text-ink">{property.checkInTime}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Check-out
              </p>
              <p className="mt-1 text-sm text-ink">{property.checkOutTime}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Min. stay
              </p>
              <p className="mt-1 text-sm text-ink">
                {property.minStayNights} night{property.minStayNights === 1 ? "" : "s"}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Pets
              </p>
              <p className="mt-1 text-sm text-ink">
                {property.petsAllowed ? "Welcome" : "Not allowed"}
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-line pt-8">
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Where you&apos;ll sleep
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {property.bedroomConfigs.map((b) => (
                <li
                  key={b.label}
                  className="rounded-lg border border-line/60 bg-paper p-4 text-sm"
                >
                  <p className="font-medium text-ink">{b.label}</p>
                  <p className="mt-1 text-ink-soft">{b.beds}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-line pt-8">
            <h2 className="font-display text-2xl tracking-tight text-ink">
              What this place offers
            </h2>
            <div className="mt-4">
              <AmenitiesList amenities={allAmenities} />
            </div>
          </div>

          <div className="mt-8 border-t border-line pt-8">
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Where you&apos;ll be
            </h2>
            <div className="mt-4 flex h-56 items-center justify-center rounded-lg border border-line/60 bg-cream-dark text-sm text-ink-soft">
              Map preview — exact address sent after booking
            </div>
            <p className="mt-3 text-sm text-ink-soft">
              This cabin is located in {property.city}, {property.state}. After your booking
              is confirmed, you&apos;ll receive full check-in instructions including the exact
              address, door code, and parking directions.
            </p>
          </div>

          <div className="mt-8 border-t border-line pt-8">
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Cancellation policy
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {property.cancellationPolicy}
            </p>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <BookingPanel property={property} />
        </div>
      </div>
    </div>
  );
}

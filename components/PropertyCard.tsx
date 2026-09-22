import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/types";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/cabins/${property.slug}`}
      className="group block overflow-hidden rounded-lg border border-line bg-paper transition-colors hover:border-forest"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={property.images[0]}
          alt={`${property.name} - ${property.city}, ${property.state}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-xs font-medium text-ink shadow-sm">
          {property.favoriteLabel}
        </span>
      </div>

      <div className="p-4">
        <p className="text-sm text-ink-soft">
          {property.city}, {property.state}
        </p>
        <h3 className="mt-1 font-display text-lg leading-snug tracking-tight text-ink">
          {property.name}
        </h3>
        <p className="mt-1 text-sm text-ink-soft">
          Max. {property.maxGuests} guests · {property.bedrooms} bedrooms · {property.baths} baths
        </p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-ink-soft">
            From <span className="font-semibold text-ink">${property.basePrice}</span>
            <span className="text-ink-soft"> / night</span>
          </p>
          <p className="flex items-center gap-1 text-sm text-ink">
            <span aria-hidden className="text-gold">★</span>
            {property.rating.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
}

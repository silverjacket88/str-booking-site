import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/types";
import { getProperty, properties } from "@/lib/data/properties";

export default function BlogCta({ post }: { post: BlogPost }) {
  if (post.ctaGrid) {
    return (
      <div className="mt-10 rounded-lg border border-line bg-paper p-6 sm:p-8">
        <h2 className="font-display text-2xl tracking-tight text-ink">{post.ctaHeadline}</h2>
        <p className="mt-2 text-ink-soft">{post.ctaBody}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {properties.map((property) => (
            <Link
              key={property.id}
              href={`/cabins/${property.slug}`}
              className="group block overflow-hidden rounded-lg border border-line"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={property.images[0]}
                  alt={property.name}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="p-3 text-sm font-medium text-ink group-hover:text-forest">
                {property.name}
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="/cabins"
          className="mt-6 inline-block rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream hover:bg-forest-dark"
        >
          See all {properties.length} cabins →
        </Link>
      </div>
    );
  }

  const property = post.ctaCabinSlug ? getProperty(post.ctaCabinSlug) : undefined;
  if (!property) return null;

  return (
    <div className="mt-10 overflow-hidden rounded-lg bg-forest text-cream">
      <div className="grid sm:grid-cols-[1fr_1.2fr]">
        <div className="relative aspect-[4/3] sm:aspect-auto">
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            sizes="(min-width: 640px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <h2 className="font-display text-2xl tracking-tight">{post.ctaHeadline}</h2>
          <p className="mt-2 text-cream/80">{post.ctaBody}</p>
          <Link
            href={`/cabins/${property.slug}`}
            className="mt-5 inline-block w-fit rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-forest-dark hover:bg-cream-dark"
          >
            See {property.name} →
          </Link>
        </div>
      </div>
    </div>
  );
}

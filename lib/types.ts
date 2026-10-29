export type AmenityTag =
  | "hot-tub"
  | "private-pool"
  | "pet-friendly"
  | "family"
  | "couples"
  | "game-room"
  | "beach-access"
  | "on-the-water"
  | "mountain-views"
  | "large-groups"
  | "fire-pit";

export interface AmenityTagInfo {
  slug: AmenityTag;
  label: string;
  blurb: string;
  emoji: string;
}

export interface Market {
  name: string;
  state: string;
  towns: string[];
  blurb: string;
  heroImage: string;
}

export interface BedroomConfig {
  label: string;
  beds: string;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  city: string;
  state: string;
  favoriteLabel: string;
  tagline: string;
  description: string[];
  maxGuests: number;
  bedrooms: number;
  baths: number;
  rating: number;
  reviewCount: number;
  tags: AmenityTag[];
  amenities: string[];
  bedroomConfigs: BedroomConfig[];
  images: string[];
  checkInTime: string;
  checkOutTime: string;
  minStayNights: number;
  petsAllowed: boolean;
  basePrice: number;
  cleaningFee: number;
  cancellationPolicy: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  initials: string;
  propertyName: string;
  quote: string;
  rating: number;
  monthYear: string;
  featured?: boolean;
}

export interface SearchFilters {
  minBedrooms?: number;
  minGuests?: number;
  checkIn?: string;
  checkOut?: string;
  sort?: "bedrooms-desc" | "bedrooms-asc" | "guests-desc";
}

export type BlogBlock =
  | { kind: "p"; text: string; label?: string; lead?: boolean; note?: boolean }
  | { kind: "pricingTiles"; items: { price: string; label: string; emphasized?: boolean }[] }
  | { kind: "qa"; items: { q: string; a: string }[] }
  | {
      kind: "timeline";
      items: { label: string; title: string; text: string; relatedSlug?: string }[];
    }
  | { kind: "trailCards"; items: { name: string; pills: string[]; text: string }[] }
  | { kind: "checklist"; items: { title: string; text: string }[] }
  | {
      kind: "venueGroup";
      category: string;
      items: { name: string; text: string; pills?: string[] }[];
    };

export interface BlogPost {
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  heroImage: string;
  heroImageAlt: string;
  body: BlogBlock[];
  ctaHeadline: string;
  ctaBody: string;
  ctaCabinSlug?: string;
  ctaGrid?: boolean;
}

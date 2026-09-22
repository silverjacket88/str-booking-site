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
  | "large-groups";

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
}

export interface SearchFilters {
  minBedrooms?: number;
  minGuests?: number;
  checkIn?: string;
  checkOut?: string;
  sort?: "bedrooms-desc" | "bedrooms-asc" | "guests-desc";
}

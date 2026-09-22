import { AmenityTagInfo } from "@/lib/types";

export const amenityTags: AmenityTagInfo[] = [
  {
    slug: "hot-tub",
    label: "Hot Tub",
    blurb: "Soak under the stars",
    emoji: "🛁",
  },
  {
    slug: "private-pool",
    label: "Private Pool",
    blurb: "Your own slice of summer",
    emoji: "🏊",
  },
  {
    slug: "pet-friendly",
    label: "Pet Friendly",
    blurb: "Bring the whole family",
    emoji: "🐾",
  },
  {
    slug: "family",
    label: "Great for Families",
    blurb: "Space for everyone",
    emoji: "👨‍👩‍👧‍👦",
  },
  {
    slug: "couples",
    label: "Couples Getaway",
    blurb: "Just the two of you",
    emoji: "💑",
  },
  {
    slug: "game-room",
    label: "Game Room",
    blurb: "Unplug and play",
    emoji: "🎱",
  },
  {
    slug: "beach-access",
    label: "Beach Access",
    blurb: "Sand between your toes",
    emoji: "🏖️",
  },
  {
    slug: "on-the-water",
    label: "On the Water",
    blurb: "Lakefront and bayside",
    emoji: "🚤",
  },
  {
    slug: "mountain-views",
    label: "Mountain Views",
    blurb: "Ridge lines and mist",
    emoji: "🏔️",
  },
  {
    slug: "large-groups",
    label: "Large Groups",
    blurb: "Sleeps 10 or more",
    emoji: "🧑‍🤝‍🧑",
  },
];

export function getAmenityTag(slug: string) {
  return amenityTags.find((t) => t.slug === slug);
}

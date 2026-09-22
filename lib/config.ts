export const siteConfig = {
  name: "Alderford Homes",
  shortName: "Alderford",
  tagline: "Three cabins in Sevierville, run like they're our own.",
  description:
    "A small collection of cabins in Sevierville, TN — locally cleaned, locally supported, booked direct.",
  founderStoryTitle: "A small, hands-on cabin company — on purpose.",
  founderStory: [
    "Alderford Homes started with one cabin and a simple idea: keep it small enough that we know every guest's name and every squeaky stair in every house.",
    "We're not trying to manage a hundred cabins across ten states. We manage three, in one town, and we know them better than anyone. That's the whole model.",
  ],
  supportPhoneDisplay: "(865) 214-6377",
  // Digits only, country code first, no symbols — used to build wa.me chat links.
  whatsappNumber: "18652146377",
  supportEmail: "stay@alderfordhomes.com",
  ownerEmail: "owners@alderfordhomes.com",
  stats: {
    homes: 0, // derived at build time from data, kept here as fallback
    avgRating: 4.96,
    avgResponseMinutes: 5,
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  nav: [
    { label: "Our Cabins", href: "/cabins" },
    { label: "For Owners", href: "/for-owners" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

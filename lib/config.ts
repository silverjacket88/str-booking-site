export const siteConfig = {
  name: "Alderford Homes",
  shortName: "Alderford",
  brandTagline: "Hospitality",
  tagline: "Smoky Mountain cabins, run like they're our own.",
  description:
    "A small collection of cabins in Sevierville, TN - locally cleaned, locally supported, booked direct.",
  founderStoryTitle: "A small, hands-on cabin company - on purpose.",
  founderStory: [
    "Alderford Homes started with one cabin, a notebook full of guest preferences, and a commitment to treating every guest like a welcomed friend, not just a transaction. We walked every room ourselves before the first guest ever did, and we've kept walking them ever since.",
    "We're not chasing a number. Every cabin we take on gets the same thing the first one did: a local team that's actually been inside it - knows the neighbors, the best spot for sunset, the little details that make a house feel like itself - backed by an owner who stays closely involved, not a company that disappears once the booking's confirmed.",
    "That's the whole model: grow carefully, keep real people on the ground, and never let a guest feel like a transaction. The day that changes is the day we're doing it wrong.",
  ],
  supportPhoneDisplay: "(865) 214-6377",
  // Digits only, country code first, no symbols — used to build wa.me chat links.
  whatsappNumber: "18652146377",
  supportEmail: "stay@alderfordhomes.com",
  ownerEmail: "owners@alderfordhomes.com",
  // GHL-hosted property owner inquiry funnel (captures leads, tags them, and
  // creates an opportunity in the Cabin Co-Hosting Acquisition pipeline).
  ownerFunnelUrl: "https://api.leadconnectorhq.com/widget/form/oNMjxvoPlyG5PkvSaAgD",
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
    { label: "Fun Facts", href: "/#fun-facts" },
    { label: "Our Story", href: "/about" },
    { label: "Get in Touch", href: "/contact" },
  ],
} as const;

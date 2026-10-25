import { siteConfig } from "@/lib/config";
import { market } from "@/lib/data/market";
import { properties } from "@/lib/data/properties";

// llms.txt - an emerging convention (llmstxt.org) for giving AI assistants
// a concise, structured summary of a site. Generated from the same real
// data the rest of the site renders, so it can't drift out of sync.
export async function GET() {
  const avgRating = properties.reduce((sum, p) => sum + p.rating, 0) / properties.length;
  const totalReviews = properties.reduce((sum, p) => sum + p.reviewCount, 0);

  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    `${siteConfig.name} is a small, direct-booking vacation rental company operating ${properties.length} cabins in ${market.towns.join(", ")}, ${market.state}, near Great Smoky Mountains National Park and Dollywood. Guests book directly through our own website - no Airbnb/Vrbo platform fees - and can also book through major OTAs if they prefer. Average rating: ${avgRating.toFixed(2)}/5 across ${totalReviews} reviews.`,
    "",
    `Contact: ${siteConfig.supportEmail} / ${siteConfig.supportPhoneDisplay}`,
    "",
    "## Cabins",
    "",
    ...properties.map(
      (p) =>
        `- [${p.name}](${siteConfig.url}/cabins/${p.slug}): ${p.tagline} Sleeps ${p.maxGuests}, ${p.bedrooms} bedrooms, ${p.baths} baths. From $${p.basePrice}/night. ${p.rating.toFixed(2)} stars (${p.reviewCount} reviews). Key amenities: ${p.amenities.join(", ")}.`
    ),
    "",
    "## Pages",
    "",
    `- [All cabins](${siteConfig.url}/cabins): Full list with filters by amenity (hot tub, fire pit, mountain views, on the water, game room, large groups, family-friendly).`,
    `- [About](${siteConfig.url}/about): Who runs ${siteConfig.name} and how the company operates.`,
    `- [Contact](${siteConfig.url}/contact): Guest support contact details.`,
    `- [For property owners](${siteConfig.url}/for-owners): Cabin co-hosting / property management services in ${market.name}.`,
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}

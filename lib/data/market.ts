import { Market } from "@/lib/types";

/**
 * Alderford Homes operates in a single market today. Keeping this as one
 * object (rather than an array of destinations) is deliberate — if a
 * second market gets added later, promote this back to a `markets: Market[]`
 * array and reintroduce a destinations index page.
 */
export const market: Market = {
  name: "Sevierville",
  state: "TN",
  towns: ["Sevierville", "Pigeon Forge", "Gatlinburg"],
  blurb:
    "Minutes from Dollywood and the entrance to Great Smoky Mountains National Park — ridge views, hot tubs, and small-town Smokies charm.",
  heroImage: "https://picsum.photos/seed/sevierville-hero/1600/900",
};

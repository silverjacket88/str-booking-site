import { Property } from "@/lib/types";

// Real photos and copy pulled directly from OwnerRez (property_id shown per
// entry) via the Listings API — see README for how this was fetched.
export const properties: Property[] = [
  {
    id: "411998", // real OwnerRez property_id
    slug: "take-me-to-the-river-cabin",
    name: "Take Me To The River Cabin",
    city: "Sevierville",
    state: "TN",
    favoriteLabel: "Sevierville favorite",
    tagline: "Private hot tub, direct river access, and a game room — steps from the Little Pigeon River.",
    description: [
      "Escape to Take Me to The River cabin — a private riverfront oasis on the Little Pigeon River in the Smoky Mountains. Wake up to water views, step just seconds to the river, relax in the hot tub, or enjoy arcade games with family and friends.",
      "Three bedrooms across the main and upper levels — two with king beds, one with a queen bunk — make this an easy fit for couples, families, or small groups. Surrounded by nature yet minutes from the Greenbrier entrance to Great Smoky Mountains National Park.",
    ],
    maxGuests: 8,
    bedrooms: 3,
    baths: 2.5,
    rating: 5,
    reviewCount: 103,
    tags: ["hot-tub", "on-the-water", "game-room", "family"],
    amenities: [
      "Private hot tub",
      "Direct private river access (Little Pigeon River)",
      "Electric fireplace",
      "Game room with arcade machine",
      "Two-level riverfront deck",
    ],
    bedroomConfigs: [
      { label: "Bedroom 1", beds: "1 King Bed" },
      { label: "Bedroom 2", beds: "1 King Bed" },
      { label: "Bedroom 3", beds: "1 Queen Bunk Bed" },
    ],
    images: [
      "https://uc.orez.io/i/26edc330074943bd8e4894f73d37eb68-Large",
      "https://uc.orez.io/i/b2eab4931bc045aaa65206df0046e26a-Large",
      "https://uc.orez.io/i/72b1d6d2605140e692a80a4c14cfd2c5-Large",
      "https://uc.orez.io/i/f445d8564b8e45a5854477f02bf201d0-Large",
      "https://uc.orez.io/i/63b5335524394690bfa4c1edbeb8b354-Large",
    ],
    checkInTime: "4:00 PM",
    checkOutTime: "10:00 AM",
    minStayNights: 2,
    petsAllowed: false,
    basePrice: 217,
    cleaningFee: 250,
    cancellationPolicy:
      "Ninety-seven percent (97.00%) of the total booking charges will be refunded if the cancellation is made more than 30 days prior to the arrival date of the reservation. Forty-seven percent (47.00%) of the total booking charges will be refunded if the cancellation is made more than 21 days prior to the arrival date of the reservation. For cancellations made within 21 days prior to the arrival date, no refund will be issued.",
    featured: true,
  },
  {
    id: "480455", // real OwnerRez property_id
    slug: "chasing-sunset-cabin",
    name: "Chasing Sunset Cabin",
    city: "Sevierville",
    state: "TN",
    favoriteLabel: "Sevierville favorite",
    tagline: "Panoramic sunset and mountain views from a private hot tub.",
    description: [
      "Escape to Chasing Sunset, where every day starts and ends with a breathtaking view. This thoughtfully designed Smoky Mountain cabin offers stunning sunsets, layered mountain views, and sparkling city lights at night.",
      "A main-level king suite, a king loft bedroom, and a queen bunk room near the game level sleep up to 8. Unwind in the hot tub as the sun sets, or gather around the fire pit table after a day exploring Gatlinburg and Pigeon Forge.",
    ],
    maxGuests: 8,
    bedrooms: 3,
    baths: 2.5,
    rating: 5,
    reviewCount: 24,
    tags: ["hot-tub", "mountain-views", "couples", "family"],
    amenities: [
      "Private hot tub with mountain views",
      "Fire pit with seating",
      "Foosball & arcade game room",
      "Hammock & egg chairs on the deck",
      "Panoramic sunset & city-light views",
    ],
    bedroomConfigs: [
      { label: "Bedroom 1", beds: "1 King Bed" },
      { label: "Bedroom 2", beds: "1 King Bed" },
      { label: "Bedroom 3", beds: "1 Queen Bunk Bed" },
    ],
    images: [
      "https://uc.orez.io/i/2a78ac3a45c34181b49ab4a6a9f89b9b-Large",
      "https://uc.orez.io/i/54e408edbf62428a95c500072dfeb56b-Large",
      "https://uc.orez.io/i/783106af4d394e53bae0fd4cb42d88f8-Large",
      "https://uc.orez.io/i/f91090075781458abe721d7a8b0b54ef-Large",
      "https://uc.orez.io/i/f2bb84f3ef3c4e10a756498780815051-Large",
    ],
    checkInTime: "4:00 PM",
    checkOutTime: "10:00 AM",
    minStayNights: 2,
    petsAllowed: false,
    basePrice: 211,
    cleaningFee: 250,
    cancellationPolicy:
      "Ninety-seven percent (97.00%) of the total booking charges will be refunded if the cancellation is made more than 30 days prior to the arrival date of the reservation. Forty-seven percent (47.00%) of the total booking charges will be refunded if the cancellation is made more than 21 days prior to the arrival date of the reservation. For cancellations made within 21 days prior to the arrival date, no refund will be issued.",
    featured: true,
  },
  {
    id: "361555", // real OwnerRez property_id
    slug: "the-wth-cabin",
    name: "The WTH Cabin",
    city: "Sevierville",
    state: "TN",
    favoriteLabel: "Sevierville favorite",
    tagline: "A true 5-bedroom layout with two master suites — built for big groups.",
    description: [
      "Wake up to panoramic Smoky Mountain views from every room in this upscale cabin. A rare true 5-bedroom layout — no lofts, no sofa beds — means everyone in your group gets real privacy, including two master suites with spa-style bathrooms.",
      "The game room comes stocked with foosball, air hockey, and arcade games, and the private hot tub and fire pit make for easy evenings after a day in the Smokies. Sleeps up to 12.",
    ],
    maxGuests: 12,
    bedrooms: 5,
    baths: 3.5,
    rating: 4.99,
    reviewCount: 151,
    tags: ["hot-tub", "mountain-views", "game-room", "large-groups"],
    amenities: [
      "Private hot tub & jacuzzi",
      "Two master suites with spa-style bathrooms",
      "Game room: foosball, air hockey, arcade",
      "Fire pit",
      "Panoramic mountain views from every room",
    ],
    bedroomConfigs: [
      { label: "Bedroom 1", beds: "1 King Bed" },
      { label: "Bedroom 2", beds: "1 King Bed" },
      { label: "Bedroom 3", beds: "1 Bunk Bed, 1 Twin Bed" },
      { label: "Bedroom 4", beds: "1 Bunk Bed, 1 Twin Bed" },
      { label: "Bedroom 5", beds: "1 Bunk Bed" },
    ],
    images: [
      "https://uc.orez.io/i/78053b15ff384503862d26bbee803794-Large",
      "https://uc.orez.io/i/128cac9c67f648c9ba829776598dd71f-Large",
      "https://uc.orez.io/i/d67136a341294cca88b3e2502e99c670-Large",
      "https://uc.orez.io/i/f946f247e9a84ad3b8530eed0b99c30f-Large",
      "https://uc.orez.io/i/48c419eb253b4c47bfdf6c3f306662fc-Large",
    ],
    checkInTime: "4:00 PM",
    checkOutTime: "10:00 AM",
    minStayNights: 2,
    petsAllowed: false,
    basePrice: 258,
    cleaningFee: 250,
    cancellationPolicy:
      "Ninety-seven percent (97.00%) of the total booking charges will be refunded if the cancellation is made more than 30 days prior to the arrival date of the reservation. Forty-seven percent (47.00%) of the total booking charges will be refunded if the cancellation is made more than 21 days prior to the arrival date of the reservation. For cancellations made within 21 days prior to the arrival date, no refund will be issued.",
    featured: true,
  },
];

export function getProperty(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

import { Review } from "@/lib/types";

// Real guest reviews pulled from OwnerRez (aggregated from Airbnb/Vrbo).
// Anonymous reviewers are labeled "Verified Guest" rather than given a
// fabricated name.
export const reviews: Review[] = [
  {
    id: "r-001",
    author: "Michelle N.",
    initials: "MN",
    propertyName: "Take Me To The River Cabin",
    quote:
      "Everything was perfect. We wanted for and needed nothing. Best place on Little Pigeon Forge!",
    rating: 5,
  },
  {
    id: "r-002",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Take Me To The River Cabin",
    quote:
      "Harry has been one of the most communicative hosts in all my years of renting. Local recommendations, helpful insight, constantly checking in to see if things were going well. Fantastic cabin with the absolute best and most peaceful view of the creek.",
    rating: 5,
  },
  {
    id: "r-003",
    author: "Derek H.",
    initials: "DH",
    propertyName: "Chasing Sunset Cabin",
    quote: "Such an amazing property! I would absolutely stay here again!",
    rating: 5,
  },
  {
    id: "r-004",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Chasing Sunset Cabin",
    quote:
      "It was an amazing experience! The house was beautiful, clean, and exactly as pictured. We loved all the amenities, especially the outdoor Jacuzzi at night while looking at the stars.",
    rating: 5,
  },
  {
    id: "r-005",
    author: "Gary P.",
    initials: "GP",
    propertyName: "The WTH Cabin",
    quote: "Everything about this home was amazing. The views were breathtaking.",
    rating: 5,
  },
  {
    id: "r-006",
    author: "Verified Guest",
    initials: "G",
    propertyName: "The WTH Cabin",
    quote:
      "We had a wonderful stay. The house has amazing views and tons of amenities. 4 adults and 7 kids slept comfortably. Host was very responsive and extremely helpful.",
    rating: 5,
  },
];

import { Review } from "@/lib/types";

// Real guest reviews pulled from OwnerRez via the Reviews API (OAuth).
// Anonymous reviewers are labeled "Verified Guest" rather than given a
// fabricated name. 10 most recent per cabin, skewed toward 2026.
export const reviews: Review[] = [
  {
    id: "r-001",
    author: "Diane H",
    initials: "DH",
    propertyName: "Take Me To The River Cabin",
    quote:
      "The cabin was clean and beautifully decorated. We loved the Pigeon River and the fire pit. The hot tub was relaxing. Walmart delivered groceries We also played shuffle board and air hockey. We had a...",
    rating: 5,
    monthYear: "September 2026",
    featured: true,
  },
  {
    id: "r-002",
    author: "Michelle N",
    initials: "MN",
    propertyName: "Take Me To The River Cabin",
    quote:
      "Everything was perfect. We wanted for and needed nothing. Best place on Little Pigeon Forge!",
    rating: 5,
    monthYear: "September 2026",
    featured: true,
  },
  {
    id: "r-003",
    author: "Ryan C",
    initials: "RC",
    propertyName: "Take Me To The River Cabin",
    quote:
      "The Cabin was BEAUTIFUL. The Host was fantastic! The cabin is clean and actually spotless. When you open the front door, you smell the fresh wood and it was just amazing.The patio overlooking the...",
    rating: 5,
    monthYear: "September 2026",
    featured: true,
  },
  {
    id: "r-004",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Take Me To The River Cabin",
    quote:
      "Our stay was amazing! The home was one of the cleanest and best maintained we’ve ever booked. Beautiful, well-equipped and gorgeous views. We booked it to be close to the park so we could hike all...",
    rating: 5,
    monthYear: "September 2026",
    featured: false,
  },
  {
    id: "r-005",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Take Me To The River Cabin",
    quote:
      "We enjoyed swimming, tubing, fishing, games and family meals on the porch. And we saw a bobcat on the rocks across the river!",
    rating: 5,
    monthYear: "September 2026",
    featured: false,
  },
  {
    id: "r-006",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Take Me To The River Cabin",
    quote:
      "The cabin is in a beautiful location. Everything was clean and the electronic fireplace was nice to have.",
    rating: 5,
    monthYear: "December 2025",
    featured: false,
  },
  {
    id: "r-007",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Take Me To The River Cabin",
    quote:
      "Wonderful place to stay definitely want to visit in the summer to enjoy the nice lake!",
    rating: 5,
    monthYear: "December 2025",
    featured: false,
  },
  {
    id: "r-008",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Take Me To The River Cabin",
    quote:
      "We had a fantastic stay at Harry’s. The home was well kept, clean and cozy. We loved the fire pit, being on the River and the hot tub! We are already discussing our return trip!",
    rating: 5,
    monthYear: "December 2025",
    featured: false,
  },
  {
    id: "r-009",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Take Me To The River Cabin",
    quote:
      "Harry was a great Host. He was very prompt and super informative.Check in and check out were a breeze. Our family of four had such a great trip. Harry’s place had too many amazing details to...",
    rating: 5,
    monthYear: "November 2025",
    featured: false,
  },
  {
    id: "r-010",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Take Me To The River Cabin",
    quote:
      "Harry's place was fantastic! Exactly as described. Highly recommended!",
    rating: 5,
    monthYear: "November 2025",
    featured: false,
  },
  {
    id: "r-011",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Chasing Sunset Cabin",
    quote:
      "We had a great stay at chasing sunset! The property lived up to the photos and in fact exceeded them. Harry was very proactive in providing all the information that we needed and was very responsive...",
    rating: 5,
    monthYear: "September 2026",
    featured: true,
  },
  {
    id: "r-012",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Chasing Sunset Cabin",
    quote:
      "It was an amazing experience! The house was beautiful, clean, and exactly as pictured. We loved all the amenities, especially the outdoor Jacuzzi at night while looking at the stars. We also loved...",
    rating: 5,
    monthYear: "September 2026",
    featured: true,
  },
  {
    id: "r-013",
    author: "Cynthia D",
    initials: "CD",
    propertyName: "Chasing Sunset Cabin",
    quote:
      "I highly recommend Chasing Sunsets. An absolutely beautiful cabin with every detail thoughtfully attended to. The interior is clean and cozy yet stylish, with all modern amenities included. The...",
    rating: 5,
    monthYear: "September 2026",
    featured: true,
  },
  {
    id: "r-014",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Chasing Sunset Cabin",
    quote:
      "View was fantastic. Deck and sitting areas offered tons of options. Plenty of space to be a family and socialize all together.",
    rating: 5,
    monthYear: "August 2026",
    featured: false,
  },
  {
    id: "r-015",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Chasing Sunset Cabin",
    quote:
      "Harry is a fantastic host, and the cabin completely blew us away. The views are breathtaking, and relaxing in the hot tub under the stars was pure bliss. It’s the perfect peaceful getaway. Preacher’s...",
    rating: 5,
    monthYear: "August 2026",
    featured: false,
  },
  {
    id: "r-016",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Chasing Sunset Cabin",
    quote:
      "Harry was a great host. When we had trouble with the water supply, Harry was extremely responsive and provided us another wonderful option to complete our stay when we could not get the water back on...",
    rating: 5,
    monthYear: "August 2026",
    featured: false,
  },
  {
    id: "r-017",
    author: "Derek H",
    initials: "DH",
    propertyName: "Chasing Sunset Cabin",
    quote:
      "Such an amazing property! I would absolutely stay here again!",
    rating: 5,
    monthYear: "August 2026",
    featured: false,
  },
  {
    id: "r-018",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Chasing Sunset Cabin",
    quote:
      "The bedrooms were very comfortable. I slept better than in my own bed. Lots of blankets were provided. I loved the bathroom nightlight mirrors. The game room (Pac-Man/basketball/foosball) was super...",
    rating: 5,
    monthYear: "August 2026",
    featured: false,
  },
  {
    id: "r-019",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Chasing Sunset Cabin",
    quote:
      "We had an anmazing experience here! Cabin was just as described- had amazing view and all of the described amenities. Host was extremely informative and very responsive with any questions we had. We...",
    rating: 5,
    monthYear: "July 2026",
    featured: false,
  },
  {
    id: "r-020",
    author: "Verified Guest",
    initials: "G",
    propertyName: "Chasing Sunset Cabin",
    quote:
      "Harry was very responsive and understand. The house was also very clean and had amazing views",
    rating: 5,
    monthYear: "July 2026",
    featured: false,
  },
  {
    id: "r-021",
    author: "Verified Guest",
    initials: "G",
    propertyName: "The WTH Cabin",
    quote:
      "Went here with several buddies and had a great time. The place was super clean and the views were amazing. The host was quick to respond with questions and was very polite. Highly recommend!",
    rating: 5,
    monthYear: "September 2026",
    featured: true,
  },
  {
    id: "r-022",
    author: "Verified Guest",
    initials: "G",
    propertyName: "The WTH Cabin",
    quote:
      "My friends and I had a blast staying here. Everything was clean and as pictured, including the awesome view!",
    rating: 5,
    monthYear: "September 2026",
    featured: true,
  },
  {
    id: "r-023",
    author: "Verified Guest",
    initials: "G",
    propertyName: "The WTH Cabin",
    quote:
      "The place was amazing. Met up with a some friends and picked this spot because it was in the middle of all of us. Fit 9 people very comfortable and we could have had room for a few more. Awesome...",
    rating: 5,
    monthYear: "September 2026",
    featured: true,
  },
  {
    id: "r-024",
    author: "Verified Guest",
    initials: "G",
    propertyName: "The WTH Cabin",
    quote:
      "Harry was an excellent host. Definitely shows attention to detail with how the instructions and house was set up and tailored for visitors. He even sent us some of the hikes in the area and checked...",
    rating: 5,
    monthYear: "August 2026",
    featured: false,
  },
  {
    id: "r-025",
    author: "Verified Guest",
    initials: "G",
    propertyName: "The WTH Cabin",
    quote:
      "We had a wonderful stay. The house has amazing views and tons of amenities. 4 adults and 7 kids slept comfortably. Host was very responsive and extremely helpful.",
    rating: 5,
    monthYear: "August 2026",
    featured: false,
  },
  {
    id: "r-026",
    author: "Verified Guest",
    initials: "G",
    propertyName: "The WTH Cabin",
    quote:
      "Wow what a great cabin! Exactly as pictured. The views were more amazing than any of the pictures could do justice. Incredibly comfortable and warm in every way. Would absolutely stay again!",
    rating: 5,
    monthYear: "December 2025",
    featured: false,
  },
  {
    id: "r-027",
    author: "Elizabeth J",
    initials: "EJ",
    propertyName: "The WTH Cabin",
    quote:
      "The cabin was clean and the kitchen well stocked. The game room was a fan favorite with all the game options for continuous entertainment. The host’s communication was exceptional. Just be aware, the...",
    rating: 5,
    monthYear: "December 2025",
    featured: false,
  },
  {
    id: "r-028",
    author: "Verified Guest",
    initials: "G",
    propertyName: "The WTH Cabin",
    quote:
      "This house has an amazing view and sunrise from the upstairs bedroom in the morning could not be beat! It was clean and well maintained. The game room and hot tub were a hit with everyone.",
    rating: 5,
    monthYear: "November 2025",
    featured: false,
  },
  {
    id: "r-029",
    author: "Verified Guest",
    initials: "G",
    propertyName: "The WTH Cabin",
    quote:
      "Clean house, comfortable, amazing views, helpful amenities, responsive host, plenty of space for our group, comfortable beds, good showers- we loved it!",
    rating: 5,
    monthYear: "November 2025",
    featured: false,
  },
  {
    id: "r-030",
    author: "Brian H",
    initials: "BH",
    propertyName: "The WTH Cabin",
    quote:
      "Great house- very clean and wonderful views!",
    rating: 5,
    monthYear: "November 2025",
    featured: false,
  },
];
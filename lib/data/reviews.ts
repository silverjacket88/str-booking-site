import { Review } from "@/lib/types";

// Real guest reviews pulled from OwnerRez via the Reviews API (OAuth).
// Only reviews where the guest's name was shared are included (OwnerRez
// doesn't return a name for every review) — up to 10 most recent per
// cabin, skewed toward 2026. Chasing Sunset Cabin only has 3 named
// reviews total in its history, so it has fewer than the other two.
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
    author: "Annie V",
    initials: "AV",
    propertyName: "Take Me To The River Cabin",
    quote:
      "Our family had a wonderful stay in this cabin. Communication from the host was excellent, check in was easy and the property is gorgeous. Spacious bedrooms all with their own sliding doors outside,...",
    rating: 5,
    monthYear: "July 2026",
    featured: false,
  },
  {
    id: "r-005",
    author: "Matthew G M",
    initials: "MG",
    propertyName: "Take Me To The River Cabin",
    quote:
      "We had a great time! This house is great - well laid out, plenty for the kids to do, and fantastic location. We took advantage of all of the amenities, including the swinging seats and fire pit, plus...",
    rating: 5,
    monthYear: "July 2026",
    featured: false,
  },
  {
    id: "r-006",
    author: "Brandi R",
    initials: "BR",
    propertyName: "Take Me To The River Cabin",
    quote:
      "This cabin was amazing! Perfect location, plenty of things to do for entertainment, and the views are gorgeous! The owner was wonderful, checked in on how we were doing and offered many suggestions...",
    rating: 5,
    monthYear: "November 2025",
    featured: false,
  },
  {
    id: "r-007",
    author: "tammy m",
    initials: "TM",
    propertyName: "Take Me To The River Cabin",
    quote:
      "We loved where the cabin was you have your very own privacy to little pigeon river we enjoyed snorkling-fishing and etc The cabin had everything you need and very comfortable We just enjoyed being at...",
    rating: 5,
    monthYear: "August 2025",
    featured: false,
  },
  {
    id: "r-008",
    author: "Rob G",
    initials: "RG",
    propertyName: "Take Me To The River Cabin",
    quote:
      "We had a great time as a family relaxing and enjoying the sights. A bald eagle flying right in front of us on the balcony was the icing on the cake on our last day!",
    rating: 5,
    monthYear: "July 2025",
    featured: false,
  },
  {
    id: "r-009",
    author: "Crystal P",
    initials: "CP",
    propertyName: "Take Me To The River Cabin",
    quote:
      "Loved the property. Back deck practically hangs directly over the river which allowed the fishermen of the family to fish from the comfort of the deck when they weren’t wading in the river. Hot tub...",
    rating: 5,
    monthYear: "July 2025",
    featured: false,
  },
  {
    id: "r-010",
    author: "Stella A",
    initials: "SA",
    propertyName: "Take Me To The River Cabin",
    quote:
      "We took our kids and their friends here for vacation and the cabin was absolutely perfect. From the game room to fishing the river. Just perfect!",
    rating: 5,
    monthYear: "June 2025",
    featured: false,
  },
  {
    id: "r-011",
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
    id: "r-012",
    author: "Derek H",
    initials: "DH",
    propertyName: "Chasing Sunset Cabin",
    quote:
      "Such an amazing property! I would absolutely stay here again!",
    rating: 5,
    monthYear: "August 2026",
    featured: true,
  },
  {
    id: "r-013",
    author: "Haneen B",
    initials: "HB",
    propertyName: "Chasing Sunset Cabin",
    quote:
      "This cabin was awesome!! The view was unreal looking over 4 different states. Kids really enjoyed all the games it had to offer! It’d say it was pretty clean (I am the biggest clean freak). Only...",
    rating: 5,
    monthYear: "April 2026",
    featured: true,
  },
  {
    id: "r-014",
    author: "Gary P",
    initials: "GP",
    propertyName: "The WTH Cabin",
    quote:
      "Everything about this home was amazing The views were breathtaking",
    rating: 5,
    monthYear: "August 2026",
    featured: true,
  },
  {
    id: "r-015",
    author: "Abigail S",
    initials: "AS",
    propertyName: "The WTH Cabin",
    quote:
      "Absolutely INCREDIBLE cabin!!! The view seriously feels like you’re in a painting. The basement is a kid’s dream — so much fun stuff to do. All the bedrooms are beautiful, but the best part of the...",
    rating: 5,
    monthYear: "July 2026",
    featured: true,
  },
  {
    id: "r-016",
    author: "Dan S",
    initials: "DS",
    propertyName: "The WTH Cabin",
    quote:
      "What an amazing weekend we had the cabin was outstanding very clean and put together all the essentials was there. The host was outstanding communicating throughout the weekend seeing if we need...",
    rating: 5,
    monthYear: "June 2026",
    featured: true,
  },
  {
    id: "r-017",
    author: "Tyler C",
    initials: "TC",
    propertyName: "The WTH Cabin",
    quote:
      "Pictures do this place zero justice. We hated to leave, cornhole on the porch in the evenings with that view and the view from the rooms were amazing! The host was easy to get in touch with to answer...",
    rating: 5,
    monthYear: "May 2026",
    featured: false,
  },
  {
    id: "r-018",
    author: "CT F",
    initials: "CF",
    propertyName: "The WTH Cabin",
    quote:
      "Excellence in communication, amazing views and fantastic home!!",
    rating: 5,
    monthYear: "March 2026",
    featured: false,
  },
  {
    id: "r-019",
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
    id: "r-020",
    author: "Brian H",
    initials: "BH",
    propertyName: "The WTH Cabin",
    quote:
      "Great house- very clean and wonderful views!",
    rating: 5,
    monthYear: "November 2025",
    featured: false,
  },
  {
    id: "r-021",
    author: "sabrina j",
    initials: "SJ",
    propertyName: "The WTH Cabin",
    quote:
      "This property is an absolute 5 stars for a stunning view , beautiful home, cleanliness and overall experience!Some items to note. It sleeps 12 but towels were limited and there were no extra towels...",
    rating: 5,
    monthYear: "October 2025",
    featured: false,
  },
  {
    id: "r-022",
    author: "Debbie D",
    initials: "DD",
    propertyName: "The WTH Cabin",
    quote:
      "This cabin was amazing. The view from the decks was spectacular . We couldn’t have asked for a better place. The cabin’s cleanliness, views and decor was top notch. We definitely want to return next...",
    rating: 5,
    monthYear: "September 2025",
    featured: false,
  },
  {
    id: "r-023",
    author: "Landon C",
    initials: "LC",
    propertyName: "The WTH Cabin",
    quote:
      "Excellent place to stay",
    rating: 5,
    monthYear: "August 2025",
    featured: false,
  },
];
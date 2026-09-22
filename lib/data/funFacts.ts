export interface FunFact {
  emoji: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  note: string;
}

/**
 * Illustrative local trivia for the Sevierville/Smokies area — widely-cited
 * approximate figures (NPS-style round numbers), meant to be fun and
 * touristy rather than precisely sourced. Swap in your own numbers, or
 * verify/cite these before treating them as fact on a real business site.
 */
export const funFacts: FunFact[] = [
  {
    emoji: "🐻",
    value: 1900,
    label: "Black bears in the Smokies",
    note: "Great Smoky Mountains National Park has one of the densest black bear populations in the East.",
  },
  {
    emoji: "🥾",
    value: 850,
    suffix: "+",
    label: "Miles of hiking trails",
    note: "Including a stretch of the Appalachian Trail along the park's ridgeline.",
  },
  {
    emoji: "🎟️",
    value: 12.1,
    decimals: 1,
    suffix: "M",
    label: "Visitors to the park each year",
    note: "It's the most-visited national park in the United States.",
  },
  {
    emoji: "🦎",
    value: 30,
    suffix: "+",
    label: "Species of salamander nearby",
    note: "The Smokies are nicknamed the “Salamander Capital of the World.”",
  },
];

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
  {
    emoji: "🌲",
    value: 187000,
    suffix: "+",
    label: "Acres of old-growth forest",
    note: "The largest expanse of old-growth forest east of the Mississippi.",
  },
  {
    emoji: "⛰️",
    value: 6643,
    label: "Feet atop Clingmans Dome",
    note: "The highest point in the Smokies, often capped in a blanket of clouds.",
  },
  {
    emoji: "🌸",
    value: 1500,
    suffix: "+",
    label: "Species of flowering plants",
    note: "More than any other North American national park.",
  },
  {
    emoji: "🦌",
    value: 65,
    suffix: "+",
    label: "Species of mammals",
    note: "From black bears to elk to the elusive bobcat.",
  },
  {
    emoji: "✨",
    value: 19,
    label: "Species of fireflies",
    note: "Including the rare synchronous fireflies that blink in unison each spring.",
  },
  {
    emoji: "💧",
    value: 2900,
    suffix: "+",
    label: "Miles of streams and rivers",
    note: "More than any similarly sized area in the temperate world.",
  },
];

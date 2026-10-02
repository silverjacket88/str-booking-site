export type WhereWeOperateSet = { heading: string; subtext: string };

// 5 paired heading/subtext sets. One set is live for a full week, then the
// next takes over, cycling continuously.
export const whereWeOperateSets: WhereWeOperateSet[] = [
  {
    heading: "The Smokies, minutes from everything you came for.",
    subtext: "Minutes from Dollywood, Gatlinburg, and the National Park entrance.",
  },
  {
    heading: "Gateway to the Great Smoky Mountains - and everything around it.",
    subtext: '"The world is a book, and those who do not travel read only one page." - Saint Augustine',
  },
  {
    heading: "Deep in the Smokies, close to it all.",
    subtext: "Ridge views, hot tubs, and small-town Smokies charm - all within minutes of each other.",
  },
  {
    heading: "The Smoky Mountains are calling. We've got the cabin.",
    subtext: '"To travel is to live." - Hans Christian Andersen',
  },
  {
    heading: "Smoky Mountain views. Small-town ease. Minutes to everywhere.",
    subtext: "Covers Sevierville, Pigeon Forge, and Gatlinburg - hot tubs and mountain air included.",
  },
];

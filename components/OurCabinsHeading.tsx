"use client";

import { useEffect, useState } from "react";

const HEADLINES = [
  "Mountain or river - pick your escape.",
  "Small portfolio, big standards.",
  "Prime locations, real hospitality, no surprises.",
];

export default function OurCabinsHeading() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const rotate = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % HEADLINES.length);
        setVisible(true);
      }, 500);
    }, 4500);
    return () => clearInterval(rotate);
  }, []);

  return (
    <h2
      className={`mt-2 font-display text-3xl tracking-tight text-ink transition-opacity duration-500 ease-in-out md:text-4xl ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {HEADLINES[index]}
    </h2>
  );
}

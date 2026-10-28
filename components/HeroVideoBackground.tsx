"use client";

import { useEffect, useRef, useState } from "react";

// `position` matches CSS object-position - only needed when a clip's
// subject isn't centered in frame. The bear clip frames the bear near
// the top of the shot (climbing down a post), so a plain center crop on
// a wide/short hero cuts its head off, leaving just legs visible -
// biasing the crop toward the top keeps the whole bear in frame.
const CLIPS: { src: string; position?: string }[] = [
  { src: "/videos/hero-chairlift.mp4" },
  { src: "/videos/hero-bear.mp4", position: "center 15%" },
  { src: "/videos/hero-river-autumn.mp4" },
  { src: "/videos/hero-town.mp4" },
];

export default function HeroVideoBackground() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const current = videoRefs.current[active];
    if (!current) return;
    current.currentTime = 0;
    const playPromise = current.play();
    if (playPromise) playPromise.catch(() => {});
  }, [active]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-ink">
      {CLIPS.map(({ src, position }, i) => (
        <video
          key={src}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          style={position ? { objectPosition: position } : undefined}
          src={src}
          muted
          playsInline
          preload="auto"
          onEnded={() => setActive((prev) => (prev + 1) % CLIPS.length)}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-cream" />
    </div>
  );
}

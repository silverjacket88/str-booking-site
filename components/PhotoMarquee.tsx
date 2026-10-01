"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const SPEED_PX_PER_SEC = 68;
const FOCUS_RADIUS_PX = 260;
const MIN_SCALE = 0.62;
const MAX_SCALE = 1.85;

export default function PhotoMarquee({ images }: { images: string[] }) {
  // Render the strip twice back-to-back so the loop can wrap seamlessly.
  const track = [...images, ...images];

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const offsetRef = useRef(0);
  const layoutRef = useRef<{ lefts: number[]; widths: number[]; totalWidth: number }>({
    lefts: [],
    widths: [],
    totalWidth: 0,
  });

  useEffect(() => {
    function measure() {
      const widths = itemRefs.current.slice(0, images.length).map((el) => el?.offsetWidth ?? 0);
      const gap = 16;
      const lefts: number[] = [];
      let cursor = 0;
      for (const w of widths) {
        lefts.push(cursor);
        cursor += w + gap;
      }
      layoutRef.current = { lefts, widths, totalWidth: cursor };
    }

    measure();
    window.addEventListener("resize", measure);

    let raf = 0;
    let last = performance.now();

    function frame(now: number) {
      const dt = (now - last) / 1000;
      last = now;
      const { lefts, widths, totalWidth } = layoutRef.current;

      if (totalWidth > 0 && trackRef.current && containerRef.current) {
        offsetRef.current -= SPEED_PX_PER_SEC * dt;
        if (offsetRef.current <= -totalWidth) offsetRef.current += totalWidth;
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;

        const containerWidth = containerRef.current.offsetWidth;
        const centerX = containerWidth / 2;

        for (let i = 0; i < track.length; i++) {
          const baseIndex = i % images.length;
          const loopIndex = Math.floor(i / images.length);
          const itemLeft = lefts[baseIndex] + loopIndex * totalWidth + offsetRef.current;
          const itemCenter = itemLeft + widths[baseIndex] / 2;
          const distance = Math.abs(itemCenter - centerX);
          const focus = Math.max(0, 1 - distance / FOCUS_RADIUS_PX);
          const scale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * focus;
          const grayscale = 1 - focus;

          const el = itemRefs.current[i];
          if (el) {
            el.style.transform = `scale(${scale})`;
            el.style.filter = `grayscale(${grayscale})`;
            el.style.zIndex = String(Math.round(focus * 100));
          }
        }
      }

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [images.length, track.length]);

  return (
    <div ref={containerRef} className="overflow-hidden py-6">
      <div ref={trackRef} className="flex w-max gap-4 will-change-transform">
        {track.map((src, i) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-lg transition-[filter] duration-150 ease-out sm:h-56 sm:w-80"
          >
            <Image src={src} alt="" fill sizes="320px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

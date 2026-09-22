"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1400,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function animateIn() {
      if (hasRun.current) return;
      hasRun.current = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setDisplay(value);
        return;
      }

      const start = performance.now();
      function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(value * eased);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) animateIn();
      },
      { threshold: 0.3 }
    );
    observer.observe(el);

    // Trigger even if the observer is slow to fire (e.g. layout not yet
    // settled on mount).
    const triggerFallback = window.setTimeout(animateIn, 1200);

    // Hard correctness guarantee independent of rAF/IntersectionObserver:
    // whatever happens with the animation mechanics, never leave this
    // showing 0 instead of the real number (e.g. a backgrounded tab can
    // pause requestAnimationFrame indefinitely).
    const hardFallback = window.setTimeout(() => setDisplay(value), duration + 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(triggerFallback);
      window.clearTimeout(hardFallback);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

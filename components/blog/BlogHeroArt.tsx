import type { ReactNode } from "react";
import { BlogHeroMotif } from "@/lib/types";

const MOTIFS: Record<BlogHeroMotif, ReactNode> = {
  leaves: (
    <g stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.5">
      <path d="M120 70 Q140 40 170 55 Q160 85 120 70Z" />
      <path d="M260 120 Q285 95 310 110 Q300 138 260 120Z" />
      <path d="M560 60 Q582 36 606 50 Q598 76 560 60Z" />
      <path d="M700 140 Q722 118 744 132 Q736 156 700 140Z" />
      <path d="M420 150 Q440 128 462 140 Q454 164 420 150Z" />
    </g>
  ),
  map: (
    <g stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.5">
      <path d="M60 170 Q220 70 380 150 T760 90" strokeDasharray="2 10" strokeLinecap="round" />
      <circle cx="380" cy="150" r="7" fill="currentColor" stroke="none" />
      <path d="M380 150 l0 -22 M380 128 l-9 9 M380 128 l9 9" />
    </g>
  ),
  trail: (
    <g stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.5">
      <path d="M40 150 Q180 60 300 130 T520 70 T800 140" strokeLinecap="round" />
      <circle cx="180" cy="90" r="4" fill="currentColor" stroke="none" />
      <circle cx="420" cy="90" r="4" fill="currentColor" stroke="none" />
      <circle cx="650" cy="95" r="4" fill="currentColor" stroke="none" />
    </g>
  ),
  hike: (
    <g stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.5">
      <path d="M40 170 L160 70 L240 130 L340 50 L430 150 L520 80 L620 150 L720 60 L800 120" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  checklist: (
    <g stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.5">
      <circle cx="140" cy="80" r="22" />
      <path d="M130 80 l7 8 15 -18" />
      <circle cx="400" cy="140" r="22" />
      <path d="M390 140 l7 8 15 -18" />
      <circle cx="660" cy="80" r="22" />
      <path d="M650 80 l7 8 15 -18" />
    </g>
  ),
};

export default function BlogHeroArt({
  motif,
  className = "",
}: {
  motif: BlogHeroMotif;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background:
          "linear-gradient(135deg, var(--forest) 0%, var(--forest-dark) 65%, var(--ink) 100%)",
      }}
    >
      <svg
        viewBox="0 0 840 220"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full text-gold"
        aria-hidden
      >
        {MOTIFS[motif]}
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(0deg, rgba(38,36,31,0.55) 0%, rgba(38,36,31,0) 55%)",
        }}
      />
    </div>
  );
}

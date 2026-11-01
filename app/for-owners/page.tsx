import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/config";
import { market } from "@/lib/data/market";

export const metadata: Metadata = {
  title: "For Property Owners",
  description: `Hands-on, boutique cabin management in ${market.name}, ${market.state}.`,
  alternates: { canonical: "/for-owners" },
};

const benefits: {
  title: string;
  body: string;
  accent: "forest" | "gold";
  icon: ReactNode;
}[] = [
  {
    title: "Dynamic pricing, done for you",
    body: "We adjust rates against local demand, events, and competitor pricing - no spreadsheets, no guesswork.",
    accent: "forest",
    icon: (
      <>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </>
    ),
  },
  {
    title: "Guest communication, handled",
    body: "24/7 messaging, screening, and support so you're never the one fielding a 2 AM text about the wifi password.",
    accent: "gold",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
  },
  {
    title: "Our team is local - maintenance is too",
    body: "We're not dispatching a national call center. Repairs are handled quickly by people who actually know the property.",
    accent: "forest",
    icon: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
  },
  {
    title: "Transparent monthly reporting",
    body: "Know exactly what you earned, what was spent, and why - with an owner portal you can check anytime.",
    accent: "gold",
    icon: (
      <>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </>
    ),
  },
  {
    title: "Multi-channel distribution",
    body: "Listed on Airbnb and Vrbo, plus our own direct-booking site where you keep more of every reservation.",
    accent: "forest",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
  },
  {
    title: "Full-service onboarding",
    body: "Professional photography, listing copywriting, and a home-readiness walkthrough before your first guest ever arrives.",
    accent: "gold",
    icon: (
      <>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </>
    ),
  },
];

export default function ForOwnersPage() {
  return (
    <div>
      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-cream/80">
            For property owners
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
            Want to earn more from your {market.name} rental?
          </h1>
          <p className="mt-4 text-lg text-cream/90">
            We only manage a handful of cabins, all in {market.name} - pricing, guests,
            maintenance, and deposits, done by people who live here. Tell us a bit about your
            property and we&apos;ll follow up with a projected revenue estimate - no obligation.
          </p>
          <a
            href={siteConfig.ownerFunnelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-cream px-7 py-3 text-sm font-medium text-forest-dark shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)] hover:bg-cream-dark"
          >
            Request my free review
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
          Small by design, full-service by default.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => {
            const isForest = b.accent === "forest";
            return (
              <div
                key={b.title}
                className="relative overflow-hidden rounded-lg border border-line bg-paper p-6"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${
                    isForest ? "bg-forest" : "bg-gold"
                  }`}
                />
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    isForest ? "bg-forest" : "bg-gold"
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isForest ? "#f8f3e8" : "#2e3629"}
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {b.icon}
                  </svg>
                </div>
                <h3 className="mt-3.5 font-display text-lg tracking-tight text-ink">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{b.body}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

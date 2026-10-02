import SwipeCarousel from "@/components/SwipeCarousel";

const steps = [
  {
    title: "Find your view",
    body: "Mountain, river, or both. We don't judge.",
  },
  {
    title: "Book straight from the source",
    body: "Direct booking means no platform markup, ever.",
  },
  {
    title: "A real Smoky Mountain cabin",
    body: "Not a stock photo, the actual porch you'll sit on.",
  },
  {
    title: "Your guide arrives",
    body: "Door code, wifi, local favorites, sent straight to your phone.",
  },
  {
    title: "Keyless into your escape",
    body: "No office to find, no key to lose.",
  },
  {
    title: "We know these hills",
    body: "Local recommendations that aren't copy-pasted.",
  },
  {
    title: "We're a text away",
    body: "Day or night, a real person answers.",
  },
  {
    title: "Early check-in or late check-out",
    body: "Just ask. Nominal fee. Big convenience.",
  },
  {
    title: "Returning guests? Leave happy, come back happier",
    body: "We'll have the porch ready. Every time.",
  },
];

export default function GuestJourneyCarousel() {
  return (
    <SwipeCarousel>
      {steps.map((step, i) => (
        <div
          key={step.title}
          className="flex h-full flex-col rounded-2xl border border-line/60 bg-paper p-6 shadow-[0_8px_24px_-16px_rgba(38,36,31,0.25)]"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-forest font-display text-sm text-cream">
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="mt-4 font-display text-lg tracking-tight text-ink">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
        </div>
      ))}
    </SwipeCarousel>
  );
}

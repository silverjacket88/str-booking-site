const steps = [
  {
    number: "01",
    title: "No surprises at check-in",
    body: "Every listing photo is current and every amenity listed is there. Our team walks each property before your arrival to confirm it's exactly what you booked.",
  },
  {
    number: "02",
    title: "A real person, always reachable",
    body: "Text or call anytime. We don't route you to a call center. If something breaks, a local tech is usually dispatched the same day.",
  },
  {
    number: "03",
    title: "Hotel-quality linens, actually",
    body: "We launder with commercial machines and stock every home with the same high-thread-count sheets and towels you'd expect at a boutique hotel.",
  },
  {
    number: "04",
    title: "Book direct and save",
    body: "No OTA markup, no platform fees. The rate you see is the rate you pay, and you're dealing with the company that owns the relationship start to finish.",
  },
  {
    number: "05",
    title: "Small enough to know every guest",
    body: "We only run three cabins, all in the same town. That's what lets us know the neighbors, the quirks of every house, and usually your name by check-in.",
  },
];

export default function JourneyTimeline() {
  return (
    <div className="grid gap-8 md:grid-cols-5 md:gap-6">
      {steps.map((step) => (
        <div key={step.number}>
          <p className="font-display text-2xl tracking-tight text-forest-light">
            {step.number}
          </p>
          <h3 className="mt-3 font-display text-lg tracking-tight text-ink">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
        </div>
      ))}
    </div>
  );
}

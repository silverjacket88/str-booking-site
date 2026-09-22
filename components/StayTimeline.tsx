const steps = [
  {
    number: "01",
    title: "Book",
    body: "Choose your home, pick your dates, pay direct. No account required — just a confirmation email with everything you need.",
  },
  {
    number: "02",
    title: "Pre-arrival",
    body: "A few days out you'll receive your digital guidebook: door code, parking, wifi, local recommendations, and a direct line to your host.",
  },
  {
    number: "03",
    title: "Check-in",
    body: "Smart lock, no key exchange. Walk straight in. The home is inspected by our team within 24 hours of your arrival.",
  },
  {
    number: "04",
    title: "During your stay",
    body: "Need anything? Text the number in your guidebook. Maintenance issues get same-day dispatch. Most things get handled before you notice.",
  },
  {
    number: "05",
    title: "Checkout",
    body: "10 AM by default, late checkout available on request. Leave the dishes, take the memories — we handle the rest.",
  },
];

export default function StayTimeline() {
  return (
    <div className="grid gap-8 md:grid-cols-5 md:gap-6">
      {steps.map((step) => (
        <div key={step.number} className="rounded-lg border border-line/60 bg-paper p-5">
          <p className="font-display text-2xl text-forest-light">{step.number}</p>
          <h3 className="mt-3 font-display text-lg text-ink">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
        </div>
      ))}
    </div>
  );
}

import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/config";
import { market } from "@/lib/data/market";

export const metadata: Metadata = {
  title: "For Property Owners",
  description: `Hands-on, boutique cabin management in ${market.name}, ${market.state}.`,
};

const benefits = [
  {
    title: "Dynamic pricing, done for you",
    body: "We adjust rates against local demand, events, and competitor pricing — no spreadsheets, no guesswork.",
  },
  {
    title: "Guest communication, handled",
    body: "24/7 messaging, screening, and support so you're never the one fielding a 2 AM text about the wifi password.",
  },
  {
    title: "We live here — maintenance is local",
    body: "We're not dispatching a national call center. If something breaks, it's fixed by someone who lives ten minutes away.",
  },
  {
    title: "Transparent monthly reporting",
    body: "Know exactly what you earned, what was spent, and why — with an owner portal you can check anytime.",
  },
  {
    title: "Multi-channel distribution",
    body: "Listed on Airbnb, Vrbo, and Booking.com, plus our own direct-booking site where you keep more of every reservation.",
  },
  {
    title: "Full-service onboarding",
    body: "Professional photography, listing copywriting, and a home-readiness walkthrough before your first guest ever arrives.",
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
            We only manage a handful of cabins, all in {market.name} — pricing, guests,
            maintenance, and deposits, done by people who live here.
          </p>
          <a
            href="#rental-review"
            className="mt-8 inline-block rounded-full bg-cream px-7 py-3 text-sm font-medium text-forest-dark shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)] hover:bg-cream-dark"
          >
            Get a free rental review
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
          Small by design, full-service by default.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="font-display text-lg tracking-tight text-ink">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="rental-review" className="border-t border-line/60 bg-cream-dark/50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
            Get a free rental income review.
          </h2>
          <p className="mt-3 text-ink-soft">
            Tell us a bit about your property in {market.name}{" "}
            and we&apos;ll follow up with a projected revenue estimate — no obligation.
          </p>
          <div className="mt-8 rounded-lg border border-line bg-paper p-8">
            <ContactForm
              endpoint="/api/owner-inquiry"
              submitLabel="Request my free review"
              messagePlaceholder="Property address, bedroom count, and anything else worth knowing."
              extraFields={
                <input
                  name="propertyAddress"
                  placeholder="Property address in Sevierville, TN"
                  className="w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-sm focus:border-forest focus:outline-none"
                />
              }
            />
          </div>
          <p className="mt-6 text-xs text-ink-soft">
            Prefer to talk it through? Call {siteConfig.supportPhoneDisplay} or email{" "}
            <a href={`mailto:${siteConfig.ownerEmail}`} className="text-forest hover:underline">
              {siteConfig.ownerEmail}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

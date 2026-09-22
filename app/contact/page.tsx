import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-wider text-forest">Contact</p>
      <h1 className="mt-2 font-display text-4xl text-ink md:text-5xl">
        We&apos;re a text or call away.
      </h1>
      <p className="mt-4 text-ink-soft">
        Questions about a stay, a home you&apos;re considering, or anything else — a real
        person on our team will get back to you, usually within {siteConfig.stats.avgResponseMinutes} minutes.
      </p>

      <div className="mt-8 grid gap-3 text-sm text-ink-soft sm:grid-cols-2">
        <p>
          <span className="font-medium text-ink">Phone: </span>
          {siteConfig.supportPhoneDisplay}
        </p>
        <p>
          <span className="font-medium text-ink">Email: </span>
          <a href={`mailto:${siteConfig.supportEmail}`} className="text-forest hover:underline">
            {siteConfig.supportEmail}
          </a>
        </p>
      </div>

      <div className="mt-10 rounded-lg border border-line/60 bg-paper p-8">
        <ContactForm messagePlaceholder="Tell us what you need — a specific home, dates, or a general question." />
      </div>
    </div>
  );
}

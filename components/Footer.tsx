import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { properties } from "@/lib/data/properties";
import { market } from "@/lib/data/market";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-4 border-b border-line pb-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl tracking-tight text-ink">
              Hear about specials &amp; local events
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Promotions, seasonal deals, and things happening around {market.name}
              {" "}— a few emails a month, nothing more.
            </p>
          </div>
          <div className="md:w-auto">
            <NewsletterSignup />
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-lg tracking-tight text-ink">{siteConfig.name}</p>
            <p className="mt-3 max-w-xs text-sm text-ink-soft">{siteConfig.description}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
              Our cabins
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {properties.map((p) => (
                <li key={p.id}>
                  <Link href={`/cabins/${p.slug}`} className="text-ink-soft hover:text-forest">
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/cabins" className="text-ink-soft hover:text-forest">
                  View all cabins
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
              Company
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-ink-soft hover:text-forest">
                  About
                </Link>
              </li>
              <li>
                <Link href="/for-owners" className="text-ink-soft hover:text-forest">
                  For property owners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ink-soft hover:text-forest">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
              Get in touch
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>{market.name}, {market.state}</li>
              <li>{siteConfig.supportPhoneDisplay}</li>
              <li>
                <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-forest">
                  {siteConfig.supportEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-soft md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Family-run cabins in {market.name}, {market.state}.</p>
        </div>
      </div>
    </footer>
  );
}

# Haven & Key — Vacation Rental Site Template

A full vacation-rental-management site (Next.js 16 / React / Tailwind v4), built as a
starting point modeled on the structure of boutique direct-booking STR sites: home,
searchable/filterable listings, a property detail page with a live availability
calendar and priced quote, per-destination pages, an owner-acquisition page, and a
contact page.

Everything currently runs on **sample data** (`lib/data/*`) and a **mock pricing/
availability engine** (`lib/pms/mock.ts`), so the site is fully demoable today. It's
built so that plugging in your real OwnerRez account is a small, contained change.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Rebranding

Everything brand-specific — name, tagline, founder story, contact info, nav — lives in
one file: [`lib/config.ts`](lib/config.ts). Start there.

Colors and fonts are theme tokens in [`app/globals.css`](app/globals.css) (`:root` +
`@theme inline`) and [`app/layout.tsx`](app/layout.tsx) (Fraunces for display type,
Inter for body). Change the hex values / font imports there to restyle everything.

## Replacing sample data

- `lib/data/destinations.ts` — the markets you operate in.
- `lib/data/properties.ts` — your actual listings, photos, amenities, bedroom
  configs, pricing.
- `lib/data/reviews.ts` — guest testimonials.

Property photos currently point at `picsum.photos` placeholder URLs — replace
`property.images` with your real photography (S3/Cloudinary/etc.) or, once you're on
OwnerRez, fetch them from the API instead of hardcoding.

## Connecting OwnerRez (live availability, pricing, bookings)

All booking-engine logic goes through one interface —
[`lib/pms/types.ts`](lib/pms/types.ts) (`PmsAdapter`) — implemented today by
[`lib/pms/mock.ts`](lib/pms/mock.ts) and selected in
[`lib/pms/index.ts`](lib/pms/index.ts). Every page (search, property detail,
calendar, checkout) calls `pms.getAvailability` / `pms.getQuote` /
`pms.createBooking` — never a specific vendor SDK. That's what makes the swap safe.

[`lib/pms/ownerrez.ts`](lib/pms/ownerrez.ts) is a real adapter, verified directly
against OwnerRez's live interactive docs at `https://api.ownerrez.com` **and**
against a real connected account (properties, live calendar, and a real priced
quote all confirmed working end to end). Auth is HTTP Basic — **your OwnerRez
account email as the username, and a Personal Access Token as the password**
(generate one at OwnerRez → Settings → Developer / API Settings → Personal
Access Tokens → Generate New Token). That's it, no separate "API key."

Also confirmed against the real account: requesting a quote for dates that
conflict with an existing booking (or otherwise fail validation) returns HTTP
400 with a structured `{ messages: [...] }` body — `getQuote` parses that into
a clean `unavailableReason` rather than showing guests a raw error.

To switch the whole site over once you have credentials:

1. Add to `.env.local`:
   ```
   PMS_PROVIDER=ownerrez
   OWNERREZ_ACCOUNT_EMAIL=you@example.com
   OWNERREZ_PERSONAL_ACCESS_TOKEN=your_token
   ```
2. Verify/adjust the request & response shapes in `lib/pms/ownerrez.ts` against the
   live API docs if OwnerRez has changed anything since.
3. Either keep `lib/data/properties.ts` as display metadata and map each entry's
   `id` to the matching OwnerRez `property_id`, or fetch the property list directly
   from OwnerRez and drop the local sample data once you're fully live.

**Payments:** don't collect card numbers on this site. `createBooking` in the
OwnerRez adapter hands off to OwnerRez's own hosted checkout
(`secure.ownerreservations.com/book/{property_id}`) rather than taking payment
details directly — that keeps this app out of PCI scope. You can also embed
OwnerRez's booking widget in an `<iframe>` on the property page as an alternative to
a redirect.

## Where things live

```
app/
  page.tsx                 Home
  vacation-rentals/         Filterable listings grid (reads initial filters
                             server-side from the URL, then client-side filtering)
  p/[slug]/                 Property detail: gallery, amenities, calendar, quote
  destinations/              Destination index + per-destination listing pages
  contact/, for-owners/, about/
  api/
    availability/            GET  -> pms.getAvailability
    quote/                   GET  -> pms.getQuote
    book/                    POST -> pms.createBooking
    contact/, owner-inquiry/ POST -> form submissions (wire up email/CRM)
components/                 UI building blocks (cards, calendar, booking panel, forms)
lib/
  config.ts                 Brand config — edit this first
  data/                     Sample destinations/properties/reviews
  pms/                      PMS-agnostic booking interface + mock/OwnerRez adapters
  types.ts                  Shared TypeScript types
```

## Notes

- Search/filter state on `/vacation-rentals` is read from the URL on the server for
  the first paint (avoids a Suspense/`useSearchParams` hydration stall on hard
  reloads), then managed client-side and synced back to the URL as you filter.
- The availability calendar and quote panel are real, working data flows against the
  mock PMS adapter — pick dates on any property page to see it price a stay.
- `npm run lint` and `npm run build` are both clean.

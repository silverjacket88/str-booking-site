import { siteConfig } from "@/lib/config";
import { market } from "@/lib/data/market";
import { properties } from "@/lib/data/properties";
import { Property } from "@/lib/types";

// All structured data here is built directly from siteConfig / lib/data -
// the same real facts (prices, ratings, review counts, amenities) already
// rendered on the page - never invented. Street address is intentionally
// omitted site-wide (city/region only): the site only reveals the exact
// address after booking, and structured data should match what the page
// actually discloses.

function avgRating() {
  return properties.reduce((sum, p) => sum + p.rating, 0) / properties.length;
}

function totalReviews() {
  return properties.reduce((sum, p) => sum + p.reviewCount, 0);
}

function priceRange() {
  const prices = properties.map((p) => p.basePrice);
  return `$${Math.min(...prices)}-$${Math.max(...prices)}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.supportPhoneDisplay,
    email: siteConfig.supportEmail,
    priceRange: priceRange(),
    address: {
      "@type": "PostalAddress",
      addressLocality: market.name,
      addressRegion: market.state,
      addressCountry: "US",
    },
    areaServed: market.towns.map((town) => ({
      "@type": "City",
      name: town,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: Number(avgRating().toFixed(2)),
      reviewCount: totalReviews(),
      bestRating: 5,
    },
    makesOffer: properties.map((p) => ({
      "@type": "Offer",
      name: p.name,
      url: `${siteConfig.url}/cabins/${p.slug}`,
      price: p.basePrice,
      priceCurrency: "USD",
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": `${siteConfig.url}/#business` },
  };
}

export function propertyJsonLd(property: Property) {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${siteConfig.url}/cabins/${property.slug}/#business`,
    name: property.name,
    description: property.description.join(" "),
    url: `${siteConfig.url}/cabins/${property.slug}`,
    image: property.images,
    telephone: siteConfig.supportPhoneDisplay,
    priceRange: `$${property.basePrice}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.city,
      addressRegion: property.state,
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: property.rating,
      reviewCount: property.reviewCount,
      bestRating: 5,
    },
    amenityFeature: property.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a,
      value: true,
    })),
    additionalProperty: [
      { "@type": "PropertyValue", name: "Bedrooms", value: property.bedrooms },
      { "@type": "PropertyValue", name: "Bathrooms", value: property.baths },
      { "@type": "PropertyValue", name: "Max Guests", value: property.maxGuests },
    ],
    checkinTime: property.checkInTime,
    checkoutTime: property.checkOutTime,
    isAccessibleForFree: false,
    petsAllowed: property.petsAllowed,
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { properties } from "@/lib/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/cabins`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteConfig.url}/for-owners`, changeFrequency: "monthly", priority: 0.4 },
  ];

  const cabinRoutes: MetadataRoute.Sitemap = properties.map((p) => ({
    url: `${siteConfig.url}/cabins/${p.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...cabinRoutes];
}

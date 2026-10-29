import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { properties } from "@/lib/data/properties";
import { blogPosts } from "@/lib/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/cabins`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteConfig.url}/for-owners`, changeFrequency: "monthly", priority: 0.4 },
  ];

  const cabinRoutes: MetadataRoute.Sitemap = properties.map((p) => ({
    url: `${siteConfig.url}/cabins/${p.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...cabinRoutes, ...blogRoutes];
}

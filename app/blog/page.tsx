import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { market } from "@/lib/data/market";
import { getSortedBlogPosts } from "@/lib/data/blog";
import BlogCard from "@/components/blog/BlogCard";

const title = `${market.name} & Smoky Mountains Travel Blog`;
const description = `Local guides to the Great Smoky Mountains - hiking, fall foliage timing, parking tags, and weekend itineraries, written by the team behind ${siteConfig.name}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title, description, url: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getSortedBlogPosts();

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wider text-forest">Blog</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight text-ink md:text-5xl">
        Local guides to <span className="italic">{market.towns.join(", ")}, {market.state}</span>.
      </h1>
      <p className="mt-4 max-w-2xl text-ink-soft">
        Hiking, fall color timing, parking tags, and weekend plans - written by the team that
        actually lives here and hosts guests every week.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

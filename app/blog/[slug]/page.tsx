import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/lib/data/blog";
import { siteConfig } from "@/lib/config";
import BlogHeroArt from "@/components/blog/BlogHeroArt";
import BlogBody from "@/components/blog/BlogBody";
import BlogCta from "@/components/blog/BlogCta";
import BlogCard from "@/components/blog/BlogCard";
import StructuredData from "@/components/StructuredData";
import { blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/seo/structuredData";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  return (
    <article className="mx-auto max-w-7xl px-6 py-10">
      <StructuredData data={blogPostingJsonLd(post)} />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
          { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
        ])}
      />
      <div className="mx-auto max-w-3xl">
        <Link href="/blog" className="text-sm text-ink-soft hover:text-forest">
          ← All posts
        </Link>

        <BlogHeroArt motif={post.heroMotif} className="mt-4 aspect-[16/8] w-full rounded-lg" />

        <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-forest">
          {post.eyebrow}
        </p>
        <h1 className="mt-2 font-display text-3xl tracking-tight text-ink md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 flex flex-wrap items-center gap-x-2 text-sm text-ink-soft">
          <span>{formatDate(post.publishedAt)}</span>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </p>
        <p className="mt-4 text-lg text-ink-soft">{post.excerpt}</p>

        <div className="mt-8 border-t border-line pt-8">
          <BlogBody blocks={post.body} />
        </div>

        <BlogCta post={post} />
      </div>

      {related.length > 0 && (
        <div className="mt-14 border-t border-line pt-10">
          <h2 className="font-display text-2xl tracking-tight text-ink">More from the blog</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

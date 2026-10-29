import Link from "next/link";
import { BlogPost } from "@/lib/types";
import BlogHeroArt from "@/components/blog/BlogHeroArt";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-lg border border-line bg-paper transition-colors hover:border-forest"
    >
      <BlogHeroArt
        src={post.heroImage}
        alt={post.heroImageAlt}
        className="aspect-[16/9] w-full"
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
      />
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-forest">
          {post.eyebrow}
        </p>
        <h3 className="mt-2 font-display text-lg leading-snug tracking-tight text-ink group-hover:text-forest-dark">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
        <p className="mt-4 text-xs text-ink-soft">{post.readTime}</p>
      </div>
    </Link>
  );
}

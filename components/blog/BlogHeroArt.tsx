import Image from "next/image";

export default function BlogHeroArt({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 768px, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-forest-dark ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

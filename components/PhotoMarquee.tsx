import Image from "next/image";

export default function PhotoMarquee({ images }: { images: string[] }) {
  // Render the strip twice back-to-back so the CSS animation can loop
  // seamlessly from -0% to -50% without a visible jump.
  const track = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div className="marquee-track flex w-max gap-4">
        {track.map((src, i) => (
          <div
            key={i}
            className="relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-lg sm:h-56 sm:w-80"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

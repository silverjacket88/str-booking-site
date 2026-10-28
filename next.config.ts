import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep serving the exact legacy URLs (alderfordhomes.com/terms.html and
  // /privacy.html) that the old placeholder site used - these are very
  // likely the exact URLs on file with GHL's A2P 10DLC SMS compliance
  // registration, so they need to keep resolving after the domain moves
  // to this site, not just redirect to a different-looking URL.
  async rewrites() {
    return [
      { source: "/terms.html", destination: "/terms" },
      { source: "/privacy.html", destination: "/privacy" },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
      {
        protocol: "https",
        hostname: "uc.orez.io",
      },
    ],
  },
};

export default nextConfig;

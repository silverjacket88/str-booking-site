import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Cabin pages embed OwnerRez's booking widget in an iframe with
        // allow="unload" (see BookingPanel.tsx). An iframe's `allow`
        // attribute can only delegate a permission the parent document
        // already has — without this header, the browser's default
        // (unload disabled) meant there was nothing to delegate, so the
        // widget's own navigation to the payment step silently failed.
        // Confirmed via a real "Permissions policy violation: unload is
        // not allowed in this document" console error during testing.
        source: "/cabins/:path*",
        headers: [
          {
            key: "Permissions-Policy",
            value: 'unload=(self "https://app.ownerrez.com")',
          },
        ],
      },
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Either allow specific domains…
    // domains: ["i.pinimg.com", "images.unsplash.com"],

    // …or (recommended) use remotePatterns for fine-grained control
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

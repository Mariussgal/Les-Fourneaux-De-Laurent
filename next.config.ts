import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "primary.jwwb.nl",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.11"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "primary.jwwb.nl",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/epicerie-fine',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

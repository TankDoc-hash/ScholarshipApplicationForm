import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cpus: 1,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aksharyoga.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.aksharyoga.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.train.aksharyogaonline.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "aksharyogaonline.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "aksharyogaonline.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;


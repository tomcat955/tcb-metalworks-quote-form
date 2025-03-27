import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['tcbmetalworks.com'],
  },
  // Enable static exports if needed
  // output: 'export',
};

export default nextConfig;

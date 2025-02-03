import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Keep strict mode enabled
  experimental: {}, // Ensure there are no unnecessary keys
  output: 'export',
};

export default nextConfig;
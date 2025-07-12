import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // 🚫 Lewati error ESLint saat build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 🚫 Lewati error TypeScript saat build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'out',
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

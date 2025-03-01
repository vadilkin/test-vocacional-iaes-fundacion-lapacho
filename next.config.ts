import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'dist',
  basePath: isProd ? '/test-vocacional-iaes-fundacion-lapacho' : '',
  assetPrefix: isProd ? '/test-vocacional-iaes-fundacion-lapacho' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

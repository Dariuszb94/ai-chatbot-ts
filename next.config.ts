import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Note: output: 'export' is disabled because API routes are needed
  // For deployment, use Vercel, Netlify, or similar platforms
  // GitHub Pages only supports static sites without API routes
};

export default nextConfig;

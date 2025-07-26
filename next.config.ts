// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ビルド時にESLintを無視
    ignoreDuringBuilds: true,
  },
  typescript: {
    // TypeScriptエラーも無視（必要に応じて）
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    devIndicators: {
        position: 'top-right'
    },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
    // enabled: true
})

module.exports = withBundleAnalyzer(nextConfig)

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict mode for better performance
  reactStrictMode: true,

  // Image optimization
  images: {
    unoptimized: false,
  },

  // Compression
  compress: true,

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Bundle analyzer (optional, for development)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      if (process.env.NODE_ENV === 'production') {
        // Add bundle analyzer
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
          })
        );
      }
      return config;
    },
  }),
};

module.exports = nextConfig;
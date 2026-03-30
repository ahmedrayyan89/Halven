/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compress output
  compress: true,

  // Strict mode catches bugs early
  reactStrictMode: true,

  // Optimize images if you add any later
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Headers for video caching
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fallbacks/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
const URL_OLD_SITE = "https://old.plett.dev";

const redirectPaths = [
  "/split-second",
  "/More",
  "/More/photography",
  "/More/media-features",
  "/More/game-of-life",
  "/More/other-stuff",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      ...redirectPaths.map((source) => ({
        source,
        destination: `${URL_OLD_SITE}${source}`,
        permanent: true,
      })),
      { source: "/home", destination: "/", permanent: true },
    ];
  },

  async rewrites() {
    return [
      { source: "/feed.xml(.*)", destination: "/feed.xml" },
      {
        source: "/images/:path*",
        destination: "/images/:path*",
      },
      {
        source: "/icons/:path*",
        destination: "/icons/:path*",
      },
      {
        source: "/cv/:path*",
        destination: "/cv/:path*",
      },
    ];
  },
};

export default nextConfig;

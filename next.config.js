/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: "/:bucket",
        destination: "/api/",
      },
      {
        source: "/",
        destination: "/api/home-redirect",
      },
    ];
  },
};

module.exports = nextConfig;

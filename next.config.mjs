/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // El brand book es un HTML estático en public/; se sirve en /brandbook
  async rewrites() {
    return [{ source: "/brandbook", destination: "/brandbook.html" }];
  },
};

export default nextConfig;

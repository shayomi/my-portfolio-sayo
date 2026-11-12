/** @type {import('next').NextConfig} */
const nextConfig = {
  // Old case-study and post URLs now open their overlays in place.
  async redirects() {
    return [
      { source: "/work/:slug", destination: "/?p=:slug", permanent: true },
      { source: "/work", destination: "/#work", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/blog/:slug", destination: "/blog?post=:slug", permanent: true },
    ];
  },
};

export default nextConfig;

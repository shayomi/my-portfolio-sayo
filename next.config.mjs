/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is now a single page; old case-study URLs open the project overlay.
  async redirects() {
    return [
      { source: "/work/:slug", destination: "/?p=:slug", permanent: true },
      { source: "/work", destination: "/#work", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
    ];
  },
};

export default nextConfig;

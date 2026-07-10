/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    localPatterns: [
      {
        pathname: '/**',
        search: '',
      },
      {
        pathname: '/**',
        search: '?height=**&width=**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
    unoptimized: true,
  },
  async redirects() {
    // Legacy /services/* URLs (and retired service pages) permanently redirect
    // to the current live pages so old external links never hit a 404.
    return [
      {
        source: '/services/kitchen-renovations',
        destination: '/kitchen-renovations',
        permanent: true,
      },
      {
        source: '/services/built-in-cupboards',
        destination: '/built-in-cupboards',
        permanent: true,
      },
      {
        source: '/services/decking-flooring',
        destination: '/decking-flooring',
        permanent: true,
      },
      {
        source: '/services/drywall-ceilings',
        destination: '/drywall-ceilings',
        permanent: true,
      },
      {
        source: '/services/door-installation',
        destination: '/door-installation',
        permanent: true,
      },
      {
        source: '/services/bathroom-renovations',
        destination: '/bathroom-renovations',
        permanent: true,
      },
      // Retired services map to the closest live page
      {
        source: '/services/quartz-granite',
        destination: '/kitchen-renovations',
        permanent: true,
      },
      {
        source: '/quartz-granite',
        destination: '/kitchen-renovations',
        permanent: true,
      },
      {
        source: '/services/plumbing',
        destination: '/bathroom-renovations',
        permanent: true,
      },
      {
        source: '/plumbing',
        destination: '/bathroom-renovations',
        permanent: true,
      },
      {
        source: '/services/carpentry-training',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/carpentry-training',
        destination: '/about',
        permanent: true,
      },
    ]
  },
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
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig

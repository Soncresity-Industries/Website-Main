/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/downloads/snh-server',
        destination: 'https://github.com/Soncresity-Industries/snh/releases/latest/download/server.zip',
        permanent: true,
      },
      {
        source: '/downloads/snh-client',
        destination: 'https://github.com/Soncresity-Industries/snh/releases/latest/download/mods.zip',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

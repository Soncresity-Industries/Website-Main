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
      {
        source: '/patreon',
        destination: 'https://www.patreon.com/c/SoncresityIndustries',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/uqbQvAHHve',
        permanent: true,
      },
      {
        source: '/curseforge',
        destination: 'https://www.curseforge.com/members/soncresityindustries/projects',
        permanent: true,
      },
      {
        source: '/modrinth',
        destination: 'https://modrinth.com/user/SoncresityIndustries',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/@SoncresityIndustries',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

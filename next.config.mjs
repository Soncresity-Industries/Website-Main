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
        source: '/downloads/snh/server/latest',
        destination: 'https://github.com/Soncresity-Industries/snh/releases/latest/download/server.zip',
        permanent: true,
      },
      {
        source: '/downloads/snh/client/latest',
        destination: 'https://github.com/Soncresity-Industries/snh/releases/latest/download/client.zip',
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
      {
        source: '/kinetic-hosting',
        destination: 'https://billing.kinetichosting.com/aff.php?aff=1101',
        permanent: true,
      },
      {
        source: '/vercel',
        destination: 'https://vercel.com/',
        permanent: true,
      },
      {
        source: '/cloudflare',
        destination: 'https://www.cloudflare.com/',
        permanent: true,
      },
      {
        source: '/discord-terms-of-service',
        destination: 'https://discord.com/terms',
        permanent: true,
      },
      {
        source: '/discord-guidelines',
        destination: 'https://discord.com/guidelines',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

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
        source: '/dc',
        destination: 'https://discord.gg/uqbQvAHHve',
        permanent: true,
      },
      {
        source: '/curseforge',
        destination: 'https://www.curseforge.com/members/soncresityindustries/projects',
        permanent: true,
      },
      {
        source: '/cf',
        destination: 'https://www.curseforge.com/members/soncresityindustries/projects',
        permanent: true,
      },
      {
        source: '/modrinth',
        destination: 'https://modrinth.com/user/SoncresityIndustries',
        permanent: true,
      },
      {
        source: '/mr',
        destination: 'https://modrinth.com/user/SoncresityIndustries',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/@SoncresityIndustries',
        permanent: true,
      },
      {
        source: '/yt',
        destination: 'https://www.youtube.com/@SoncresityIndustries',
        permanent: true,
      },
      {
        source: '/kinetichosting',
        destination: 'https://billing.kinetichosting.com/aff.php?aff=1101',
        permanent: true,
      },
      {
        source: '/kh',
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
    ]
  },
}

export default nextConfig

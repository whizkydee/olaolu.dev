import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/whizkydee',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/mrolaolu',
        permanent: true,
      },
      {
        source: '/music',
        destination: 'https://soundcloud.com/kitanmusic',
        permanent: true,
      },
      {
        source: '/palenight',
        destination:
          'https://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme',
        permanent: true,
      },
      {
        source: '/palenight-repo',
        destination: 'https://github.com/whizkydee/vscode-palenight-theme',
        permanent: true,
      },
      {source: '/shelf/work', destination: '/work', permanent: true},
      {source: '/shelf/resume', destination: '/resume', permanent: true},
      {
        source: '/shelf/work-images/:path*',
        destination: '/work-images/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

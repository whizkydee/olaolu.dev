export const COLORS = {
  purple: '#3d155f',
  lime: '#ccf381',
  limeAlt: '#badd76',
  electricBlue: '#4831d4',
} as const

export const SOCIAL_PROFILES = {
  twitter: 'https://twitter.com/mrolaolu',
  github: 'https://github.com/whizkydee',
  linkedIn: 'https://linkedin.com/in/mrolaolu',
  youtube: 'https://youtube.com/channel/UC5UiydmTsiN17NmsYmmWqEA',
} as const

export const SITE_URL = 'https://olaolu.dev'

export function getNavigation(pathname: string) {
  if (pathname === '/') {
    return [
      {href: '/work', label: 'My Work'},
      {href: '/shelf', label: 'My Shelf'},
      {href: '/resume', label: 'My Résumé', external: true},
    ]
  }

  const isShelf = pathname.startsWith('/shelf') || pathname.startsWith('/tag')
  return [
    {href: '/', label: 'Home'},
    isShelf
      ? {href: '/work', label: 'My Work'}
      : {href: '/shelf', label: 'My Shelf'},
    {href: '/resume', label: 'My Résumé', external: true},
  ]
}

import Link from 'next/link'
import { getNavigation } from '@/lib/site'

export function NavLinks({ pathname }: { pathname: string }) {
  return (
    <ul className="cross-site-nav" itemScope itemType="https://schema.org/SiteNavigationElement">
      {getNavigation(pathname).map(({ href, label, external }) => (
        <li key={href}>
          <Link
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer noopener' : undefined}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

import Link from 'next/link'

import {getNavigation} from '@/lib/site'

import styles from './NavLinks.module.css'

export function NavLinks({
  pathname,
  className,
}: {
  pathname: string
  className?: string
}) {
  return (
    <ul
      className={`${styles.nav}${className ? ` ${className}` : ''}`}
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      {getNavigation(pathname).map(({href, label, external}) => (
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

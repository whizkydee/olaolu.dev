'use client'

import {usePathname} from 'next/navigation'
import {useEffect, type ReactNode} from 'react'

import {SiteFooter} from './SiteFooter'
import {SiteHeader} from './SiteHeader'
import styles from './SiteFrame.module.css'

export function SiteFrame({children}: {children: ReactNode}) {
  const pathname = usePathname()
  const routeKind = getRouteKind(pathname)
  const isResume = routeKind === 'resume'
  const routeClassName = routeClassNames[routeKind]
  const mainClassName = `${styles.main}${routeClassName ? ` ${styles[routeClassName]}` : ''}`

  useEffect(() => {
    const root = document.documentElement
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') root.classList.add('is-tabbing')
    }
    const handlePointer = () => root.classList.remove('is-tabbing')
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handlePointer)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handlePointer)
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.route = routeKind
    window.scrollTo(0, 0)
    const main = document.getElementById('main')
    if (pathname !== '/') main?.focus({preventScroll: true})
  }, [pathname, routeKind])

  return (
    <>
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>
      {!isResume && <SiteHeader key={pathname} pathname={pathname} />}
      <main
        id="main"
        tabIndex={-1}
        className={mainClassName}
        data-route-kind={routeKind}
      >
        {children}
        <span className="visually-hidden" role="status" aria-live="polite">
          You just navigated to: {pathname}
        </span>
      </main>
      {!isResume && <SiteFooter pathname={pathname} />}
    </>
  )
}

const routeClassNames = {
  default: null,
  home: 'home',
  post: null,
  resume: 'resume',
  'work-detail': 'workDetail',
  'work-index': 'workIndex',
} as const

function getRouteKind(pathname: string) {
  if (pathname === '/') return 'home'
  if (pathname === '/resume') return 'resume'
  if (pathname === '/work') return 'work-index'
  if (pathname.startsWith('/work/')) return 'work-detail'
  if (pathname.startsWith('/shelf/')) return 'post'

  return 'default'
}

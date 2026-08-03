'use client'

import clsx from 'clsx'
import Link from 'next/link'
import {useEffect, useRef, useState} from 'react'

import {Logo} from '../Logo'
import {NavLinks} from '../NavLinks'
import {BasicContact, SocialContact} from '../ContactLinks'

import styles from './SiteHeader.module.css'

export function SiteHeader({pathname}: {pathname: string}) {
  const [open, setOpen] = useState(false)
  const [shadow, setShadow] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuClassName = clsx(
    styles.menu,
    open && styles.menuOpen,
    shadow && styles.menuShadow
  )

  useEffect(() => {
    if (!open || !pathname.startsWith('/work')) return

    const timeout = window.setTimeout(() => setShadow(true), 150)
    return () => window.clearTimeout(timeout)
  }, [open, pathname])

  useEffect(() => {
    document.body.classList.toggle(
      'no-scroll',
      open && window.matchMedia('(max-width: 700px)').matches
    )

    function closeOnInteraction(event: KeyboardEvent | MouseEvent) {
      if (event instanceof KeyboardEvent && event.key === 'Escape') {
        setShadow(false)
        setOpen(false)
        buttonRef.current?.focus()
        return
      }

      const target = event.target as Node | null
      if (
        event instanceof MouseEvent &&
        target &&
        !headerRef.current?.contains(target)
      ) {
        setShadow(false)
        setOpen(false)
      }
    }

    document.addEventListener('keydown', closeOnInteraction)
    document.addEventListener('mousedown', closeOnInteraction)
    return () => {
      document.body.classList.remove('no-scroll')
      document.removeEventListener('keydown', closeOnInteraction)
      document.removeEventListener('mousedown', closeOnInteraction)
    }
  }, [open])

  return (
    <header className={styles.header} ref={headerRef}>
      <Link
        className={styles.logo}
        href="/"
        aria-label={`Logo, go to ${pathname === '/' ? 'homepage' : 'shelf'}.`}
      >
        <Logo />
      </Link>

      <button
        type="button"
        ref={buttonRef}
        aria-label={`${open ? 'Close' : 'Open'} contact menu`}
        aria-controls="contact-menu"
        aria-expanded={open}
        className={clsx(styles.toggle, open && styles.toggleOpen)}
        onClick={() => {
          if (open) setShadow(false)
          setOpen(!open)
        }}
      />

      <nav
        id="contact-menu"
        aria-label="Contact menu"
        aria-hidden={!open}
        className={menuClassName}
      >
        <NavLinks className={styles.navigation} pathname={pathname} />
        <BasicContact className={styles.basic} />
        <SocialContact className={styles.social} />
      </nav>
    </header>
  )
}

'use client'

import Link from 'next/link'
import {useEffect, useRef, useState} from 'react'
import {BasicContact, SocialContact} from './ContactLinks'
import {Logo} from './Logo'
import {NavLinks} from './NavLinks'

export function SiteHeader({pathname}: {pathname: string}) {
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)

    function closeOnInteraction(event: KeyboardEvent | MouseEvent) {
      if (event instanceof KeyboardEvent && event.key === 'Escape') {
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
    <header id="site-header" ref={headerRef}>
      <Link
        id="logo"
        href="/"
        aria-label={`Logo, go to ${pathname === '/' ? 'homepage' : 'homepage'}.`}
      >
        <Logo />
      </Link>

      <button
        type="button"
        ref={buttonRef}
        aria-label={`${open ? 'Close' : 'Open'} contact menu`}
        aria-controls="contact-menu"
        aria-expanded={open}
        className={`menu-toggle${open ? ' x' : ''}`}
        onClick={() => setOpen(value => !value)}
      />

      <nav
        id="contact-menu"
        aria-label="Contact menu"
        aria-hidden={!open}
        className={open ? 'open' : ''}
      >
        <NavLinks pathname={pathname} />
        <BasicContact />
        <SocialContact />
      </nav>
    </header>
  )
}

import type {ReactNode} from 'react'
import type {Metadata, Viewport} from 'next'
import {GoogleAnalytics} from '@next/third-parties/google'

import {SITE_URL} from '@/lib/site'
import {SiteFrame} from '@/components/SiteFrame'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Olaolu Olawuyi: Expert Web Engineer',
    template: '%s — Olaolu Olawuyi',
  },
  description:
    'Olaolu Olawuyi is an Expert Web Engineer with over 15 years of experience in tooling, UI engineering and high-performance web architecture.',
  icons: {icon: '/favicon.png'},
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: "Olaolu's shelf",
    images: [
      {
        url: '/og.png',
        width: 1730,
        height: 909,
        alt: "Hey, I'm Olaolu — Staff Software Engineer",
      },
    ],
  },
  twitter: {
    card: 'summary',
    creator: '@mrolaolu',
    site: '@mrolaolu',
    images: ['/og.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{children: ReactNode}>) {
  return (
    <html lang="en">
      <body>
        <SiteFrame>{children}</SiteFrame>
      </body>
      <GoogleAnalytics gaId="G-4FDC290KKM" />
    </html>
  )
}

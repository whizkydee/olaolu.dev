import type {ReactNode} from 'react'
import type {Metadata, Viewport} from 'next'
import {GoogleAnalytics} from '@next/third-parties/google'

import {SITE_URL} from '@/lib/site'
import {SiteFrame} from '@/components/SiteFrame'
import {
  AUTHOR_NAME,
  SITE_NAME,
  SITE_TITLE,
  SOCIAL_IMAGE,
  SITE_DESCRIPTION,
} from '@/lib/seo'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s — Olaolu Olawuyi',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{name: AUTHOR_NAME, url: SITE_URL}],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {icon: '/favicon.png'},
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@mrolaolu',
    site: '@mrolaolu',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE],
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

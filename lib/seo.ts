import type {Metadata} from 'next'

import {SITE_URL, SOCIAL_PROFILES} from './site'

export const AUTHOR_NAME = 'Olaolu Olawuyi'
export const SITE_NAME = AUTHOR_NAME
export const SITE_TITLE = `${AUTHOR_NAME}: Staff Software Engineer`
export const SITE_DESCRIPTION =
  'Olaolu Olawuyi is a Staff Software Engineer with over 15 years of experience building fast, resilient web platforms, tooling, and scalable systems.'
export const PERSON_ID = `${SITE_URL}/#person`
export const WEBSITE_ID = `${SITE_URL}/#website`
export const SOCIAL_IMAGE_URL = `${SITE_URL}/og.png`
export const SOCIAL_IMAGE = {
  url: SOCIAL_IMAGE_URL,
  width: 1730,
  height: 909,
  alt: `${AUTHOR_NAME} — Staff Software Engineer`,
} as const
export const PERSON_PROFILES = [
  SOCIAL_PROFILES.github,
  SOCIAL_PROFILES.linkedIn,
  SOCIAL_PROFILES.twitter,
  SOCIAL_PROFILES.youtube,
  'https://facebook.com/mrolaolu',
  'https://medium.com/@mrolaolu',
] as const

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  index = true,
}: PageMetadataOptions) {
  const socialTitle = absoluteTitle ? title : `${title} — ${AUTHOR_NAME}`

  return {
    title: absoluteTitle ? {absolute: title} : title,
    description,
    alternates: {canonical: path},
    robots: index ? undefined : {index: false, follow: true},
    openGraph: {
      title: socialTitle,
      description,
      url: getAbsoluteUrl(path),
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      creator: '@mrolaolu',
      site: '@mrolaolu',
      images: [SOCIAL_IMAGE],
    },
  } satisfies Metadata
}

export function createArticleMetadata({
  title,
  description,
  path,
  publishedTime,
  tags,
}: ArticleMetadataOptions) {
  const metadata = createPageMetadata({title, description, path})

  return {
    ...metadata,
    openGraph: {
      title: `${title} — ${AUTHOR_NAME}`,
      description,
      url: getAbsoluteUrl(path),
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'article',
      publishedTime: getPublishedDateTime(publishedTime),
      authors: [SITE_URL],
      tags,
      images: [SOCIAL_IMAGE],
    },
  } satisfies Metadata
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  }
}

export function getAbsoluteUrl(path: string) {
  if (path === '/') return SITE_URL
  return new URL(path, SITE_URL).toString()
}

export function getPublishedDateTime(date: string) {
  return `${date}T00:00:00+00:00`
}

export function serializeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  absoluteTitle?: boolean
  index?: boolean
}

type ArticleMetadataOptions = {
  title: string
  description: string
  path: string
  publishedTime: string
  tags: string[]
}

type BreadcrumbItem = {
  name: string
  path: string
}

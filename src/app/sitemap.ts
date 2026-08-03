import type {MetadataRoute} from 'next'

import {SITE_URL} from '@/lib/site'
import {projects} from '@/lib/work'
import {getPublishedPosts, tagPath} from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts()
  const tags = Array.from(
    new Set(posts.flatMap(post => post.tags.map(tagPath)))
  )
  const paths = [
    '',
    '/contact',
    '/resume',
    '/shelf',
    '/work',
    ...posts.map(post => `/shelf/${post.slug}`),
    ...tags,
    ...projects
      .filter(project => project.internalPage)
      .map(project => `/work/${project.slug}`),
  ]

  return paths.map(path => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === '' ? 'monthly' : 'yearly',
  }))
}

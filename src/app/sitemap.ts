import type {MetadataRoute} from 'next'
import {getPublishedPosts, slugifyTag} from '@/lib/posts'
import {projects} from '@/lib/work'
import {SITE_URL} from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts()
  const tags = Array.from(
    new Set(posts.flatMap(post => post.tags.map(slugifyTag)))
  )
  const paths = [
    '',
    '/contact',
    '/resume',
    '/shelf',
    '/work',
    ...posts.map(post => `/shelf/${post.slug}`),
    ...tags.map(tag => `/tag/${tag}`),
    ...projects
      .filter(project => project.internalPage)
      .map(project => `/work/${project.slug}`),
  ]

  return paths.map(path => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === '' ? 'monthly' : 'yearly',
  }))
}

import {JsonLd} from '@/components/JsonLd'
import {getPublishedPosts} from '@/lib/posts'
import {PostCard} from '@/components/PostCard'
import {PageHeader} from '@/components/PageHeader'
import {
  PERSON_ID,
  AUTHOR_NAME,
  getAbsoluteUrl,
  getPublishedDateTime,
  createPageMetadata,
} from '@/lib/seo'

import styles from './posts.module.css'

export const metadata = createPageMetadata({
  title: 'Shelf',
  description:
    'Articles by Olaolu Olawuyi about web performance, frontend engineering, user experience, tooling, and building resilient web systems.',
  path: '/shelf',
})

export default function ShelfPage() {
  const posts = getPublishedPosts()
  return (
    <>
      <JsonLd data={createShelfSchema(posts)} />
      <PageHeader title="shelf" noDot />
      <ol className={styles.posts} aria-label="Posts">
        {posts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </ol>
    </>
  )
}

function createShelfSchema(posts: ReturnType<typeof getPublishedPosts>) {
  const url = getAbsoluteUrl('/shelf')

  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${url}#blog`,
    url,
    name: 'Olaolu Olawuyi’s Shelf',
    description: metadata.description,
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: AUTHOR_NAME,
      url: getAbsoluteUrl('/'),
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      '@id': `${getAbsoluteUrl(`/shelf/${post.slug}`)}#article`,
      url: getAbsoluteUrl(`/shelf/${post.slug}`),
      headline: post.title,
      description: post.description,
      datePublished: getPublishedDateTime(post.date),
      author: {'@id': PERSON_ID},
    })),
  }
}

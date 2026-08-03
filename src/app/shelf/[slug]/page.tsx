import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

import {JsonLd} from '@/components/JsonLd'
import {Newsletter} from '@/components/Newsletter'
import {PostFooter} from '@/components/PostFooter'
import postContentStyles from '@/components/PostContent/PostContent.module.css'
import {
  formatPostDate,
  getPost,
  type Post,
  getPublishedPosts,
} from '@/lib/posts'
import {
  PERSON_ID,
  AUTHOR_NAME,
  SOCIAL_IMAGE_URL,
  createArticleMetadata,
  createBreadcrumbSchema,
  getAbsoluteUrl,
  getPublishedDateTime,
} from '@/lib/seo'

import styles from './page.module.css'

type Props = {params: Promise<{slug: string}>}

export function generateStaticParams() {
  return getPublishedPosts().map(post => ({slug: post.slug}))
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params
  const post = getPost(slug)
  if (!post) return {}
  return createArticleMetadata({
    title: post.title,
    description: post.description,
    path: `/shelf/${post.slug}`,
    publishedTime: post.date,
    tags: post.tags,
  })
}

export default async function PostPage({params}: Props) {
  const {slug} = await params
  const posts = getPublishedPosts()
  const post = posts.find(entry => entry.slug === slug)
  if (!post) notFound()
  const index = posts.findIndex(entry => entry.slug === slug)

  return (
    <article className={styles.post}>
      <JsonLd data={createPostSchema(post)} />
      <JsonLd data={createPostBreadcrumbs(post)} />
      <header className={styles.header}>
        <div className={styles.meta}>
          <time
            dateTime={post.date}
            aria-label={`Published on: ${formatPostDate(post.date)}`}
          >
            {formatPostDate(post.date)}
          </time>
          <span>{post.timeToRead} min read</span>
        </div>
        <h1>{post.title}</h1>
      </header>
      <div
        className={postContentStyles.content}
        dangerouslySetInnerHTML={{__html: post.html}}
      />
      <PostFooter
        post={post}
        previous={posts[index + 1]}
        next={posts[index - 1]}
      />
      <Newsletter />
    </article>
  )
}

function createPostSchema(post: Post) {
  const path = `/shelf/${post.slug}`
  const url = getAbsoluteUrl(path)
  const publishedDateTime = getPublishedDateTime(post.date)

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    url,
    headline: post.title,
    description: post.description,
    image: SOCIAL_IMAGE_URL,
    datePublished: publishedDateTime,
    dateModified: publishedDateTime,
    inLanguage: 'en',
    keywords: post.tags,
    wordCount: post.wordCount,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: AUTHOR_NAME,
      url: getAbsoluteUrl('/'),
    },
    publisher: {'@id': PERSON_ID},
    isPartOf: {
      '@type': 'Blog',
      '@id': `${getAbsoluteUrl('/shelf')}#blog`,
      name: 'Olaolu Olawuyi’s Shelf',
      url: getAbsoluteUrl('/shelf'),
    },
  }
}

function createPostBreadcrumbs(post: Post) {
  return createBreadcrumbSchema([
    {name: 'Home', path: '/'},
    {name: 'Shelf', path: '/shelf'},
    {name: post.title, path: `/shelf/${post.slug}`},
  ])
}

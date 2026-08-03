import type {Metadata} from 'next'
import {notFound, permanentRedirect} from 'next/navigation'

import {JsonLd} from '@/components/JsonLd'
import {PostCard} from '@/components/PostCard'
import {PageHeader} from '@/components/PageHeader'
import {getPublishedPosts, slugifyTag, tagPath} from '@/lib/posts'
import {createPageMetadata, createBreadcrumbSchema} from '@/lib/seo'

import styles from '../../shelf/posts.module.css'

type Props = {params: Promise<{tag: string}>}

export function generateStaticParams() {
  const tags = new Set(
    getPublishedPosts().flatMap(post => post.tags.map(slugifyTag))
  )
  return Array.from(tags).map(tag => ({tag}))
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {tag: encodedTag} = await params
  const tag = normalizeTagParam(encodedTag)
  const title = getPublishedPosts()
    .flatMap(post => post.tags)
    .find(candidate => slugifyTag(candidate) === slugifyTag(tag))
  if (!title) return {}
  return createPageMetadata({
    title: `Posts tagged "${title}"`,
    description: `Articles by Olaolu Olawuyi about ${title}, web engineering, performance, and user experience.`,
    path: tagPath(title),
  })
}

export default async function TagPage({params}: Props) {
  const {tag: encodedTag} = await params
  const tag = normalizeTagParam(encodedTag)
  const canonicalTag = slugifyTag(tag)
  if (tag !== canonicalTag) permanentRedirect(`/tag/${canonicalTag}`)

  const posts = getPublishedPosts().filter(post =>
    post.tags.some(candidate => slugifyTag(candidate) === slugifyTag(tag))
  )
  if (!posts.length) notFound()
  const title =
    posts
      .flatMap(post => post.tags)
      .find(candidate => slugifyTag(candidate) === slugifyTag(tag)) ?? tag
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          {name: 'Home', path: '/'},
          {name: 'Shelf', path: '/shelf'},
          {name: title, path: tagPath(title)},
        ])}
      />
      <PageHeader title={` ${title}`} preTitleSymbol="#" noDot />
      <ol className={styles.posts} aria-label={`Posts tagged ${title}`}>
        {posts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </ol>
    </>
  )
}

function normalizeTagParam(tag: string) {
  return decodeURIComponent(tag)
}

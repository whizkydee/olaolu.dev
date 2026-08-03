import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

import {PostCard} from '@/components/PostCard'
import {PageHeader} from '@/components/PageHeader'
import {getPublishedPosts, slugifyTag, tagPath} from '@/lib/posts'

type Props = {params: Promise<{tag: string}>}

export function generateStaticParams() {
  const tags = new Set(
    getPublishedPosts().flatMap(post => post.tags.map(tag => tag.toLowerCase()))
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
  return {
    title: `Posts tagged "${title}"`,
    description: `All posts tagged "${title}"`,
    alternates: {canonical: tagPath(title)},
  }
}

export default async function TagPage({params}: Props) {
  const {tag: encodedTag} = await params
  const tag = normalizeTagParam(encodedTag)
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
      <PageHeader title={` ${title}`} preTitleSymbol="#" noDot />
      <ol className="posts" aria-label={`Posts tagged ${title}`}>
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

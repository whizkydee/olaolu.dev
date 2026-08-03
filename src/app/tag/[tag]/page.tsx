import type {Metadata} from 'next'
import {notFound} from 'next/navigation'
import {PageHeader} from '@/components/PageHeader'
import {PostCard} from '@/components/PostCard'
import {getPublishedPosts, slugifyTag} from '@/lib/posts'

type Props = {params: Promise<{tag: string}>}

export function generateStaticParams() {
  const tags = new Set(
    getPublishedPosts().flatMap(post => post.tags.map(slugifyTag))
  )
  return Array.from(tags).map(tag => ({tag}))
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {tag} = await params
  const title = getPublishedPosts()
    .flatMap(post => post.tags)
    .find(candidate => slugifyTag(candidate) === tag)
  if (!title) return {}
  return {
    title: `Posts tagged "${title}"`,
    description: `All posts tagged "${title}"`,
  }
}

export default async function TagPage({params}: Props) {
  const {tag} = await params
  const posts = getPublishedPosts().filter(post =>
    post.tags.some(candidate => slugifyTag(candidate) === tag)
  )
  if (!posts.length) notFound()
  const title =
    posts
      .flatMap(post => post.tags)
      .find(candidate => slugifyTag(candidate) === tag) ?? tag
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

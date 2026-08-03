import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

import {Newsletter} from '@/components/Newsletter'
import {PostFooter} from '@/components/PostFooter'
import {formatPostDate, getPost, getPublishedPosts} from '@/lib/posts'

type Props = {params: Promise<{slug: string}>}

export function generateStaticParams() {
  return getPublishedPosts().map(post => ({slug: post.slug}))
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: {canonical: `/shelf/${post.slug}`},
    openGraph: {
      type: 'article',
      publishedTime: post.date,
      authors: ['Olaolu Olawuyi'],
    },
  }
}

export default async function PostPage({params}: Props) {
  const {slug} = await params
  const posts = getPublishedPosts()
  const post = posts.find(entry => entry.slug === slug)
  if (!post) notFound()
  const index = posts.findIndex(entry => entry.slug === slug)

  return (
    <article id="post">
      <header className="post-header">
        <div className="post-meta post-meta--full">
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
        className="post-content"
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

import Link from 'next/link'
import type { Post } from '@/lib/posts'
import { formatPostDate } from '@/lib/posts'

export function PostCard({ post }: { post: Post }) {
  return (
    <li className="post-card">
      <article className="post-card__content" aria-label="Post">
        <Link className="post-card__link" href={`/shelf/${post.slug}`}>{post.title}</Link>
        <div className="post-meta">
          <time dateTime={post.date} aria-label={`Published on: ${formatPostDate(post.date)}`}>{formatPostDate(post.date)}</time>
        </div>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </article>
    </li>
  )
}

import Link from 'next/link'

import {formatPostDate, type Post} from '@/lib/posts'

import styles from './PostCard.module.css'

export function PostCard({post}: {post: Post}) {
  return (
    <li className={styles.card}>
      <article className={styles.content} aria-label="Post">
        <Link className={styles.link} href={`/shelf/${post.slug}`}>
          {post.title}
        </Link>
        <div className={styles.meta}>
          <time
            dateTime={post.date}
            aria-label={`Published on: ${formatPostDate(post.date)}`}
          >
            {formatPostDate(post.date)}
          </time>
        </div>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </article>
    </li>
  )
}

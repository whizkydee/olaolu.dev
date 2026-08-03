import type {Metadata} from 'next'

import {getPublishedPosts} from '@/lib/posts'
import {PostCard} from '@/components/PostCard'
import {PageHeader} from '@/components/PageHeader'

import styles from './posts.module.css'

export const metadata: Metadata = {
  title: 'Posts',
  description:
    'Articles on web development and design by Olaolu, expert frontend developer and UX Engineer',
  alternates: {canonical: '/shelf'},
}

export default function ShelfPage() {
  const posts = getPublishedPosts()
  return (
    <>
      <PageHeader title="shelf" noDot />
      <ol className={styles.posts} aria-label="Posts">
        {posts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </ol>
    </>
  )
}

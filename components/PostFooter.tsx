import Link from 'next/link'
import {Fragment} from 'react'

import {SITE_URL} from '@/lib/site'
import {tagPath, type Post} from '@/lib/posts'

import {BowArrow} from './BowArrow'

export function PostFooter({
  post,
  previous,
  next,
}: {
  post: Post
  previous?: Post
  next?: Post
}) {
  const shareableURL = `${SITE_URL}/shelf/${post.slug}`
  const facebook = `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${shareableURL}&quote=${post.title}`)}`
  const twitter = `https://twitter.com/intent/tweet?${encodeURIComponent(`url=${shareableURL}&via=mrolaolu&text=${post.title}`)}`

  return (
    <footer className="post-footer">
      <div className="post-footer__meta">
        <div className="post-tags">
          <span>Tags:</span>{' '}
          {post.tags.map((tag, index) => (
            <Fragment key={tag}>
              <Link href={tagPath(tag)}>{tag}</Link>
              {index < post.tags.length - 1 && ' '}
            </Fragment>
          ))}
        </div>
        <div className="post-share">
          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share this post on Facebook."
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.998 11.999C23.998 5.372 18.626 0 11.999 0 5.372 0 0 5.372 0 11.999c0 5.989 4.388 10.953 10.124 11.853v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953h-1.513c-1.49 0-1.955.925-1.955 1.874v2.251h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853Z" />
            </svg>
          </a>
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share this post on Twitter."
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.936 4.936 0 0 0 2.163-2.723 9.84 9.84 0 0 1-3.127 1.184 4.915 4.915 0 0 0-8.511 3.358c0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161a4.89 4.89 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.92 4.92 0 0 0 3.946 4.827 4.933 4.933 0 0 1-2.212.085 4.924 4.924 0 0 0 4.604 3.417A9.868 9.868 0 0 1 1.17 19.61c-.39 0-.779-.023-1.17-.067a13.94 13.94 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02Z" />
            </svg>
          </a>
        </div>
      </div>
      <nav className="post-nav" aria-label="Post navigation">
        <Link
          rel="prev"
          href={previous ? `/shelf/${previous.slug}` : '#'}
          className="post-nav__previous"
          aria-hidden={!previous}
          tabIndex={previous ? undefined : -1}
        >
          <BowArrow direction="left" />
          <span>Previous</span>
        </Link>
        <Link
          href="/shelf"
          aria-label="Go to all posts"
          className="post-nav__squares"
        >
          <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
            <path d="M.5 15.194V.7h14.494v14.494zM21.006 15.194V.7H35.5v14.494zM.5 35.7V21.207h14.494V35.7zM21.006 35.7V21.207H35.5V35.7z" />
          </svg>
        </Link>
        <Link
          rel="next"
          href={next ? `/shelf/${next.slug}` : '#'}
          className="post-nav__next"
          aria-hidden={!next}
          tabIndex={next ? undefined : -1}
        >
          <span>Next</span>
          <BowArrow />
        </Link>
      </nav>
    </footer>
  )
}

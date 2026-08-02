import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '@/lib/posts'
import { SITE_URL } from '@/lib/site'
import { slugifyTag } from '@/lib/posts'
import { BowArrow } from './BowArrow'

export function PostFooter({ post, previous, next }: { post: Post; previous?: Post; next?: Post }) {
  const shareableURL = `${SITE_URL}/shelf/${post.slug}`
  const facebook = `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${shareableURL}&quote=${post.title}`)}`
  const twitter = `https://twitter.com/intent/tweet?${encodeURIComponent(`url=${shareableURL}&via=mrolaolu&text=${post.title}`)}`

  return (
    <footer className="post-footer">
      <div className="post-footer__meta">
        <div className="post-tags">
          <span>Tags:</span>
          {post.tags.map((tag) => <Link key={tag} href={`/tag/${slugifyTag(tag)}`}>{tag}</Link>)}
        </div>
        <div className="post-share">
          <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Share this post on Facebook.">
            <Image src="/icons/facebook-icon.svg" width={20} height={20} alt="" />
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="Share this post on Twitter.">
            <Image src="/icons/twiiter-icon.svg" width={20} height={20} alt="" />
          </a>
        </div>
      </div>
      <nav className="post-nav" aria-label="Post navigation">
        {previous ? (
          <Link rel="prev" href={`/shelf/${previous.slug}`} className="post-nav__previous">
            <BowArrow direction="left" /><span>Previous</span>
          </Link>
        ) : <span className="post-nav__empty" />}
        <Link href="/shelf" aria-label="Go to all posts" className="post-nav__squares">
          <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
            <path d="M.5 15.194V.7h14.494v14.494zM21.006 15.194V.7H35.5v14.494zM.5 35.7V21.207h14.494V35.7zM21.006 35.7V21.207H35.5V35.7z" />
          </svg>
        </Link>
        {next ? (
          <Link rel="next" href={`/shelf/${next.slug}`} className="post-nav__next">
            <span>Next</span><BowArrow />
          </Link>
        ) : <span className="post-nav__empty" />}
      </nav>
    </footer>
  )
}

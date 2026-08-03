import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import {marked} from 'marked'

export type Post = {
  slug: string
  title: string
  date: string
  published: boolean
  tags: string[]
  description: string
  content: string
  html: string
  timeToRead: number
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

function renderMarkdown(content: string) {
  const rendered = marked.parse(content, {gfm: true, breaks: false}) as string
  return rendered.replace(
    /<a href="(https?:\/\/[^\"]+)"/g,
    '<a href="$1" target="_blank" rel="nofollow noopener noreferrer"'
  )
}

function readPost(filename: string): Post {
  const slug = filename.replace(/\.md$/, '')
  const raw = fs.readFileSync(path.join(postsDirectory, filename), 'utf8')
  const {data, content} = matter(raw)
  const normalizedDate =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : String(data.date)
  const wordCount = content.trim().split(/\s+/).length

  return {
    slug,
    title: String(data.title),
    date: normalizedDate,
    published: data.published === true,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    description: String(data.description ?? ''),
    content,
    html: renderMarkdown(content),
    timeToRead: Math.max(1, Math.ceil(wordCount / 250)),
  }
}

export function getPublishedPosts() {
  return fs
    .readdirSync(postsDirectory)
    .filter(filename => filename.endsWith('.md'))
    .map(readPost)
    .filter(post => post.published)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPost(slug: string) {
  return getPublishedPosts().find(post => post.slug === slug)
}

export function slugifyTag(tag: string) {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function tagPath(tag: string) {
  return `/tag/${encodeURIComponent(tag.toLowerCase().trim())}`
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

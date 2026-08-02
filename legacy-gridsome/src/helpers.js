function createSEOProps(name, content, exclude) {
  const payload = [
    { name, content },
    { name: `og:${name}`, content },
    { name: `twitter:${name}`, content },
  ]

  return payload.splice(exclude, payload.length)
}

export const createMeta = {
  titles: (...args) => createSEOProps('title', ...args),
  urls: (...args) => createSEOProps('url', ...args),
  images: (...args) => createSEOProps('image', ...args),
  descriptions: (...args) => createSEOProps('description', ...args),
}

export function hyphenateName(name) {
  return name
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[!$%^&*()_+|~=`{}[\]:";'<>?,./]/gi, '')
}

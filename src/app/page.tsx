import Link from 'next/link'
import type {Metadata} from 'next'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: {absolute: 'Olaolu Olawuyi: Expert Web Engineer'},
  description:
    'Olaolu Olawuyi is an Expert Web Engineer with over 15 years of experience in tooling, UI engineering and high-performance web architecture.',
  alternates: {canonical: '/'},
}

export default function HomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': '#website',
    name: 'Olaolu Olawuyi',
    alternateName: 'Olaolu',
    url: 'https://olaolu.dev',
    sameAs: [
      'https://facebook.com/mrolaolu',
      'https://twitter.com/mrolaolu',
      'https://medium.com/@mrolaolu',
      'https://github.com/whizkydee',
    ],
  }
  const navigationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Olaolu Olawuyi',
    alternateName: 'Olaolu',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        url: 'https://olaolu.dev/work',
        name: 'My Work',
        description:
          'Selected work including open source projects, experimentals and front-end apps.',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        url: 'https://olaolu.dev/shelf',
        name: 'My Shelf',
        description:
          'Articles related to design, frontend dev, learning and life.',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        url: 'https://olaolu.dev/resume',
        name: 'My Résumé',
        description:
          "Document outlining my skills, expertise and companies I've worked with in the past.",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(websiteSchema)}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(navigationSchema)}}
      />
      <div className={styles.content}>
        <h1 className={styles.eyebrow}>Hey, I&apos;m Olaolu</h1>
        <p className={styles.lead}>
          A Staff Software Engineer{' '}
          <span>building fast, resilient web products at scale.</span>
        </p>
        <div className={styles.body}>
          <p>
            I have over 15 years of experience building web platforms, developer
            tooling, and the foundations that help engineering teams move
            quickly without compromising performance or reliability.
          </p>
          <p>
            At Shopify, I work on the web foundations behind our
            highest-converting surfaces, leading technical initiatives that
            uncover how performance and reliability influence conversion and
            business metrics. This work has contributed millions in incremental
            revenue and informed broader engineering investments.
          </p>
          <p>
            Before my current role, I spent a lot of time as a consultant...
            working with companies across different countries and industries,
            helping them build, improve, and scale their digital products.
          </p>
          <p className={styles.contactCopy}>
            Outside of software, I&apos;m deeply interested in cars. I enjoy
            driving them, understanding how they work, and making them go
            faster. It&apos;s another space where I get to explore the
            relationship between complex systems, reliability, and performance.
          </p>
          <Link className={styles.contact} href="/contact">
            Contact me
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3.5 12.5 12.5 3.5M6 3.5h6.5V10" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}

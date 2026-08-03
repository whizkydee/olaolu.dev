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
          A Staff Software Engineer with over 15 years of experience{' '}
          <span>building scalable, high-performance web platforms.</span>
        </p>
        <div className={styles.body}>
          <p>
            My work spans UI engineering, tooling, and large-scale architecture,
            which has shaped how I think about building fast and resilient
            systems.
          </p>
          <p>
            Currently, I work at Shopify, where I focus on web foundations —
            tooling, performance, and scalable systems. I also help drive
            high-impact initiatives that improve conversion, deliver millions in
            incremental revenue, and influence engineering teams on technical
            investments that create meaningful business impact.
          </p>
          <p>
            Before now, I was a Lead Frontend Engineer at hellotax, where I
            worked on VAT compliance automation software tailored towards
            multi-channel merchants in Europe.
          </p>
          <p>
            Earlier in my career, I worked independently as a software
            consultant, building custom software solutions for companies and
            organizations across a wide range of industries.
          </p>
          <p className={styles.contactCopy}>
            If you have a question or proposal, or just want to say hello, feel
            free to contact me.
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

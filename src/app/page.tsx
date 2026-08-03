import Link from 'next/link'

import {JsonLd} from '@/components/JsonLd'
import {
  PERSON_ID,
  SITE_NAME,
  SITE_TITLE,
  WEBSITE_ID,
  PERSON_PROFILES,
  SITE_DESCRIPTION,
  getAbsoluteUrl,
  createPageMetadata,
} from '@/lib/seo'

import styles from './page.module.css'

export const metadata = createPageMetadata({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  path: '/',
  absoluteTitle: true,
})

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>Hey, I&apos;m Olaolu</p>
        <h1 className={styles.lead}>
          A Software Engineer{' '}
          <span>building fast, resilient web products at scale.</span>
        </h1>
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

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: getAbsoluteUrl('/'),
      name: SITE_NAME,
      alternateName: 'Olaolu',
      inLanguage: 'en',
      publisher: {'@id': PERSON_ID},
    },
    {
      '@type': 'ProfilePage',
      '@id': `${getAbsoluteUrl('/')}#profile`,
      url: getAbsoluteUrl('/'),
      name: SITE_TITLE,
      mainEntity: {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: SITE_NAME,
        alternateName: 'Olaolu',
        url: getAbsoluteUrl('/'),
        jobTitle: 'Software Engineer',
        description: SITE_DESCRIPTION,
        sameAs: PERSON_PROFILES,
        knowsAbout: [
          'Web performance',
          'Frontend architecture',
          'Developer tooling',
          'Design systems',
          'Accessibility',
          'Scalable web platforms',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Shopify',
          url: 'https://www.shopify.com',
        },
      },
    },
  ],
}

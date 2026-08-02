import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Olaolu Olawuyi: Expert Web Engineer' },
  description: 'Olaolu Olawuyi is an Expert Web Engineer with over 15 years of experience in tooling, UI engineering and high-performance web architecture.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <div className="home-content">
      <h1 className="home-eyebrow">Hey, I&apos;m Olaolu</h1>
      <p className="home-lead">
        A Staff Software Engineer with over 15 years of experience{' '}
        <span>building scalable, high-performance web platforms.</span>
      </p>
      <div className="home-body">
        <p>My work spans UI engineering, tooling, and large-scale architecture, which has shaped how I think about building fast and resilient systems.</p>
        <p>Currently, I work at Shopify, where I focus on web foundations — tooling, performance, and scalable systems. I also help drive high-impact initiatives that improve conversion, deliver millions in incremental revenue, and influence engineering teams on technical investments that create meaningful business impact.</p>
        <p>Before now, I was a Lead Frontend Engineer at hellotax, where I worked on VAT compliance automation software tailored towards multi-channel merchants in Europe.</p>
        <p>Earlier in my career, I worked independently as a software consultant, building custom software solutions for companies and organizations across a wide range of industries.</p>
        <p className="home-contact-copy">If you have a question or proposal, or just want to say hello, feel free to contact me.</p>
        <Link className="home-contact" href="/contact">
          Contact me
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3.5 12.5 12.5 3.5M6 3.5h6.5V10" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

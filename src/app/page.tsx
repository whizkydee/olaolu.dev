import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Olaolu Olawuyi: Expert Web Engineer' },
  description: 'Olaolu Olawuyi is an Expert Web Engineer with 15 years of experience in tooling, UI engineering and high-performance web architecture.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <div className="home-content">
      <h1>Hey, I&apos;m Olaolu</h1>
      <p>A Staff Software Engineer with nearly 15 years of experience building scalable, high-performance web platforms. My work spans UI engineering, tooling, and large-scale architecture, which has shaped how I think about building fast and resilient systems.</p>
      <p>Currently, I work at Shopify, where I focus on web foundations — tooling, performance, and scalable systems. I also help drive high-impact initiatives that improve conversion, deliver millions in incremental revenue, and influence engineering teams on technical investments that create meaningful business impact.</p>
      <p>Before now, I was a Lead Frontend Engineer at hellotax, where I worked on VAT compliance automation software tailored towards multi-channel merchants in Europe.</p>
      <p>Earlier in my career, I worked independently as a software consultant, building custom software solutions for companies and organizations across a wide range of industries.</p>
      <p>If you have a question or proposal, or just want to say hello, feel free to <Link href="/contact">contact me</Link>.</p>
    </div>
  )
}

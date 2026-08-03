import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {Logo} from '@/components/Logo'
import {resumeData} from '@/lib/resume'
import {SOCIAL_PROFILES} from '@/lib/site'

export const metadata: Metadata = {
  title: 'My Résumé',
  description: `Work experience of Olaolu, expert web engineer with ${new Date().getFullYear() - 2011} years of experience`,
  alternates: {canonical: '/resume'},
}

type Props = {searchParams: Promise<{pdf?: string}>}

export default async function ResumePage({searchParams}: Props) {
  const {pdf} = await searchParams
  const isPDF = pdf === 'true'
  const yearsOfExperience = new Date().getFullYear() - 2011

  return (
    <div className="resume-page">
      <aside className="resume-meta">
        <a
          target="_blank"
          className="resume-icon linkedin"
          href={SOCIAL_PROFILES.linkedIn}
          rel="noopener noreferrer"
          aria-label="Connect with Olaolu on LinkedIn, opens a new tab."
        >
          <Image src="/icons/linkedin-icon.svg" width={16} height={16} alt="" />
        </a>
        <a
          className="resume-icon resume-mail"
          href="mailto:hello@olaolu.dev"
          aria-label="Send Olaolu a mail"
        >
          <Image src="/icons/mail-icon.svg" width={16} height={16} alt="" />
        </a>
        {!isPDF && (
          <a
            href="/Resume-Olaolu-Olawuyi.pdf"
            target="_blank"
            className="resume-icon"
            aria-label="Download a PDF copy of this resume, opens a new tab."
          >
            <Image
              src="/icons/download-icon.svg"
              width={16}
              height={16}
              alt=""
            />{' '}
            Download
          </a>
        )}
      </aside>

      <div id="resume-outlines">
        <section>
          <a href="https://olaolu.dev" aria-label="olaolu dot dev">
            olaolu.dev
          </a>
          <span>London, England</span>
          <a href="mailto:hello@olaolu.dev">hello@olaolu.dev</a>
        </section>
        <section>
          <h3>Core Technologies:</h3>
          <ul>
            {resumeData.technologies.map(technology => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Others:</h3>
          <ul>
            {resumeData.otherProficiencies.map(proficiency => (
              <li key={proficiency}>{proficiency}</li>
            ))}
          </ul>
        </section>
      </div>

      <article className="resume-article">
        <header id="profile-summary">
          <h1 id="resume-name">
            Olaolu <br />
            Olawuyi
          </h1>
          <h2>Expert Software Engineer.</h2>
          <p>
            Focused on building high-performance, accessible software and
            scalable systems that drive real business impact.
          </p>
        </header>

        <section id="experience">
          <h3 className="marked-heading">Experience</h3>
          <p>
            I’ve worked on a handful of web projects over the past{' '}
            {yearsOfExperience} years, some of which were for the following
            organizations:
          </p>
          <ul id="companies">
            {resumeData.companies.map(company => (
              <li className="company" key={company.name}>
                <header>
                  <h4>
                    {company.name} <span>{company.role}</span>
                  </h4>
                  <span className="period">{company.period}</span>
                </header>
                <p>{company.intro}</p>
                <ul className="points">
                  {company.points.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {'outro' in company && company.outro && (
                  <p
                    className="outro"
                    dangerouslySetInnerHTML={{__html: company.outro}}
                  />
                )}
              </li>
            ))}
          </ul>
        </section>

        <section id="resume-projects">
          <h3 className="marked-heading">Projects</h3>
          <p>
            Links to some of my work can be found on{' '}
            <Link href="/work">olaolu.dev/work</Link> and details can be
            provided upon request via a scheduled demo call.
          </p>
        </section>
        <Logo className="resume-logo" />
      </article>
    </div>
  )
}

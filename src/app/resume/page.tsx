import type {Metadata} from 'next'
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

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 59.882 479.058 359.294">
      <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 015.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="8 8.003 48 47.997">
      <path d="M29.283 12.19a19.624 19.624 0 015.434 0 2 2 0 00.567-3.959 23.75 23.75 0 00-6.566 0 2 2 0 00.565 3.959z" />
      <path d="M42.91 10.619a2 2 0 00-1.82 3.561C47.819 17.621 52 24.449 52 32c0 11.028-8.972 20-20 20s-20-8.972-20-20c0-7.551 4.181-14.379 10.911-17.819a2 2 0 00-1.821-3.561C13.016 14.747 8 22.939 8 32c0 13.233 10.766 24 24 24 13.233 0 24-10.767 24-24 0-9.061-5.016-17.253-13.09-21.381z" />
      <path d="M22.586 36.586a2 2 0 000 2.828l8 8c.39.391.902.586 1.414.586s1.023-.195 1.414-.586l8-8a2 2 0 10-2.828-2.828L34 41.172V18a2 2 0 00-4 0v23.172l-4.586-4.586a2 2 0 00-2.828 0z" />
    </svg>
  )
}

export default async function ResumePage({searchParams}: Props) {
  const {pdf} = await searchParams
  const isPDF = pdf === 'true'
  const yearsOfExperience = new Date().getFullYear() - 2011

  return (
    <div className={`resume-page${isPDF ? ' resume-page--pdf' : ''}`}>
      <aside className="resume-meta">
        <a
          target="_blank"
          className="resume-icon linkedin"
          href={SOCIAL_PROFILES.linkedIn}
          rel="noopener noreferrer"
          aria-label="Connect with Olaolu on LinkedIn, opens a new tab."
        >
          <LinkedInIcon />
        </a>
        <a
          className="resume-icon resume-mail"
          href="mailto:hello@olaolu.dev"
          aria-label="Send Olaolu a mail"
        >
          <MailIcon />
        </a>
        <a
          hidden={isPDF}
          href="/Resume-Olaolu-Olawuyi.pdf"
          target="_blank"
          className="resume-icon resume-download"
          aria-label="Download a PDF copy of this resume, opens a new tab."
        >
          <DownloadIcon /> Download
        </a>
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

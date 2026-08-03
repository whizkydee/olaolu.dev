import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {PageHeader} from '@/components/PageHeader'
import {projects} from '@/lib/work'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected work including open source projects, experimentals and front-end apps by Olaolu',
  alternates: {canonical: '/work'},
}

export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="work"
        description="Selected work I've taken on in the past."
      />
      <section className="work-container">
        <ul id="projects" aria-label="Projects.">
          {projects.map(project => {
            const href = project.internalPage
              ? `/work/${project.slug}`
              : `https://${project.siteName}`
            return (
              <li className="project" key={project.slug}>
                <Link
                  className="project__link"
                  href={href}
                  aria-label={
                    project.internalPage
                      ? `${project.name} project summary.`
                      : `${project.name} live demo.`
                  }
                  target={project.internalPage ? undefined : '_blank'}
                  rel={project.internalPage ? undefined : 'noopener noreferrer'}
                >
                  {project.name} project summary.
                </Link>
                <figure className="project__logo">
                  <Image
                    src={project.logo}
                    alt=""
                    aria-hidden
                    width={230}
                    height={100}
                    loading="eager"
                  />
                  <figcaption className="visually-hidden">
                    {project.name} logo.
                  </figcaption>
                </figure>
                <div className="project__info">
                  <h5>{project.name}</h5>
                  {project.siteName && (
                    <a
                      href={`https://${project.siteName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} live demo.`}
                    >
                      {project.siteName}
                    </a>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

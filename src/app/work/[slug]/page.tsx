import clsx from 'clsx'
import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

import {JsonLd} from '@/components/JsonLd'
import {Cavalier} from '@/components/Cavalier'
import {PageHeader} from '@/components/PageHeader'
import {ContactForm} from '@/components/ContactForm'
import {WorkCarousel} from '@/components/WorkCarousel'
import {getProject, projects, type WorkProject} from '@/lib/work'
import postContentStyles from '@/components/PostContent/PostContent.module.css'
import {
  PERSON_ID,
  AUTHOR_NAME,
  getAbsoluteUrl,
  createPageMetadata,
  createBreadcrumbSchema,
} from '@/lib/seo'

import styles from './page.module.css'

type Props = {params: Promise<{slug: string}>}

export function generateStaticParams() {
  return projects
    .filter(project => project.internalPage)
    .map(project => ({slug: project.slug}))
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params
  const project = getProject(slug)
  if (!project || !project.internalPage) return {}
  return createPageMetadata({
    title: project.name,
    description:
      project.indexable === false
        ? `Project summary for ${project.name}.`
        : project.content[0],
    path: `/work/${project.slug}`,
    index: project.indexable !== false,
  })
}

export default async function WorkDetailPage({params}: Props) {
  const {slug} = await params
  const project = getProject(slug)
  if (!project || !project.internalPage) notFound()

  const extension = project.imageFormat ?? 'jpg'
  const images = Array.from(
    {length: project.slideCount},
    (_value, index) =>
      `/work-images/${project.slug}/screen${index + 1}.${extension}`
  )
  const copyClassName = clsx(
    styles.copy,
    postContentStyles.content,
    images.length === 0 && styles.copyAfterEmpty
  )

  return (
    <>
      <JsonLd data={createProjectSchema(project)} />
      <JsonLd
        data={createBreadcrumbSchema([
          {name: 'Home', path: '/'},
          {name: 'Work', path: '/work'},
          {name: project.name, path: `/work/${project.slug}`},
        ])}
      />
      <PageHeader title={project.name} hideDecor alwaysVisible />
      <WorkCarousel name={project.name} images={images} />
      <article className={copyClassName}>
        {project.content.map(paragraph => (
          <p key={paragraph} dangerouslySetInnerHTML={{__html: paragraph}} />
        ))}
      </article>
      <section className={styles.contact}>
        <Cavalier
          heading="Let's work together!"
          headingLevel={2}
          variant="work"
        >
          Like my work and want something similar for your company? Sure,
          let&apos;s get to business!
        </Cavalier>
        <ContactForm id={`${project.slug}-contact-form`} variant="work" />
      </section>
    </>
  )
}

function createProjectSchema(project: WorkProject) {
  const url = getAbsoluteUrl(`/work/${project.slug}`)

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}#project`,
    url,
    name: project.name,
    description: project.content[0],
    inLanguage: 'en',
    creator: {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: AUTHOR_NAME,
      url: getAbsoluteUrl('/'),
    },
  }
}

import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

import {Cavalier} from '@/components/Cavalier'
import {getProject, projects} from '@/lib/work'
import {PageHeader} from '@/components/PageHeader'
import {ContactForm} from '@/components/ContactForm'
import {WorkCarousel} from '@/components/WorkCarousel'

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
  return {
    title: project.name,
    description: `Highlights of the work process on ${project.name}.`,
    alternates: {canonical: `/work/${project.slug}`},
  }
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

  return (
    <>
      <PageHeader title={project.name} hideDecor />
      <WorkCarousel name={project.name} images={images} />
      <article className="work-copy post-content">
        {project.content.map(paragraph => (
          <p key={paragraph} dangerouslySetInnerHTML={{__html: paragraph}} />
        ))}
      </article>
      <section className="work-contact">
        <Cavalier heading="Let's work together!">
          Like my work and want something similar for your company? Sure,
          let&apos;s get to business!
        </Cavalier>
        <ContactForm id={`${project.slug}-contact-form`} />
      </section>
    </>
  )
}

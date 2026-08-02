<template>
  <Layout
    id="home"
    title="Olaolu Olawuyi: Expert Web Engineer"
    description="Olaolu Olawuyi is an Expert Web Engineer with 15 years of experience in tooling, UI engineering and high-performance web architecture."
  >
    <div class="home-content">
      <h1>Hey, I'm Olaolu</h1>

      <p>
        A Staff Software Engineer with nearly 15 years of experience building
        scalable, high-performance web platforms. My work spans UI engineering,
        tooling, and large-scale architecture, which has shaped how I think
        about building fast and resilient systems.
      </p>

      <p>
        Currently, I work at Shopify, where I focus on web foundations —
        tooling, performance, and scalable systems. I also help drive
        high-impact initiatives that improve conversion, deliver millions in
        incremental revenue, and influence engineering teams on technical
        investments that create meaningful business impact.
      </p>

      <p>
        Before now, I was a Lead Frontend Engineer at hellotax, where I worked
        on VAT compliance automation software tailored towards multi-channel
        merchants in Europe.
      </p>

      <p>
        Earlier in my career, I worked independently as a software consultant,
        building custom software solutions for companies and organizations
        across a wide range of industries.
      </p>

      <p>
        If you have a question or proposal, or just want to say hello, feel free
        to
        <g-link to="/contact">contact me</g-link>.
      </p>

      <p v-if="hireable">
        I'm now available for contracts and remote full-time roles. Want us to
        work together? You should
        <a
          :href="`mailto:hello@olaolu.dev?subject=${encodeURIComponent(
            `💡Let's Work Together on Project X`
          )}`"
        >
          contact me
        </a>
        .
      </p>
    </div>
  </Layout>
</template>

<script>
import { hireable } from '../../config'

console.log(hireable)

export default {
  data: () => ({
    hireable,
  }),
  metaInfo: {
    title: 'Olaolu Olawuyi: Expert Web Engineer',
    titleTemplate: '%s',
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          name: 'Olaolu Olawuyi',
          alternateName: 'Olaolu',
          url: 'https://olaolu.dev',
          '@type': 'WebSite',
          '@id': '#website',
          sameAs: [
            'https://facebook.com/mrolaolu',
            'https://twitter.com/mrolaolu',
            'https://medium.com/@mrolaolu',
            'https://github.com/whizkydee',
          ],
        },
      },
      {
        type: 'application/ld+json',
        json: {
          '@context': 'http://schema.org',
          name: 'Olaolu Olawuyi',
          alternateName: 'Olaolu',
          '@type': 'ItemList',
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
        },
      },
    ],
  },
}
</script>

<style scoped>
.home-content {
  text-align: left;
  /* margin: 4rem 0; */
}
</style>

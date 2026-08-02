<template>
  <Layout
    id="home"
    title="Olaolu Olawuyi: Expert Web Engineer"
    description="Olaolu Olawuyi is an Expert Web Engineer with over 15 years of experience in tooling, UI engineering and high-performance web architecture."
  >
    <div class="home-content">
      <p class="home-content__eyebrow">Hey, I'm Olaolu</p>

      <h1>
        A Staff Software Engineer building
        <em>fast, resilient web systems.</em>
      </h1>

      <p>
        I have over 15 years of experience building scalable, high-performance
        web platforms. My work spans UI engineering, tooling, and large-scale
        architecture.
      </p>

      <p>
        At Shopify, I focus on web foundations—tooling, performance, and
        scalable systems. I also help drive initiatives that improve conversion,
        deliver incremental revenue, and guide technical investments toward
        meaningful business impact.
      </p>

      <g-link class="home-content__contact" to="/contact">
        Contact me <span aria-hidden="true">↗</span>
      </g-link>

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
  width: 100%;
  max-width: 58rem;
  margin: 5rem auto 7rem;
  text-align: left;
}

.home-content__eyebrow {
  margin-bottom: 1.5rem;
  color: #625f70;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  max-width: 54rem;
  margin: 0;
  color: #3f3f45;
  font-size: clamp(2.7rem, 5.6vw, 5.25rem);
  line-height: 1.04;
  letter-spacing: -0.045em;
}

h1 em {
  color: var(--electric-blue);
  font-style: normal;
}

.home-content > p:not(.home-content__eyebrow) {
  max-width: 43rem;
  margin: 1.4rem 0 0;
  color: #48484f;
  font-size: 1.08rem;
  line-height: 1.75;
}

.home-content__contact {
  display: inline-block;
  margin-top: 2rem;
  padding-bottom: 0.2rem;
  color: var(--electric-blue);
  border-bottom: 1px solid currentColor;
  text-decoration: none;
}

@media (max-width: 650px) {
  .home-content {
    margin-top: 3rem;
    margin-bottom: 5rem;
  }

  h1 {
    font-size: clamp(2.5rem, 12vw, 4rem);
  }

  .home-content > p:not(.home-content__eyebrow) {
    font-size: 1rem;
  }
}
</style>

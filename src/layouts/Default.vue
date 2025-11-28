<template>
  <ThemeProvider id="app" :style="!ready && 'display: none'" :theme="theme">
    <SkipLink to="#main">Skip to content</SkipLink>
    <Header :noMenuShadow="!isWorkLayout" v-if="!noBanners" />

    <ContentView :id="id" :announcement="composedAnnouncement">
      <slot />
    </ContentView>

    <Footer id="site-footer" v-if="!noBanners" />
  </ThemeProvider>
</template>

<script>
import { createMeta } from '../helpers'
import theme from '@saucedrip/core/theme'
import { unslashEnd } from '@mrolaolu/helpers'
import { ThemeProvider } from 'vue-styled-components'

export default {
  data: () => ({
    theme,
    ready: process.env.NODE_ENV === 'development',
  }),

  computed: {
    isWorkLayout() {
      return this.id.startsWith('work-')
    },

    composedAnnouncement() {
      return 'You just navigated to: ' + this.title
    },

    computedSeoURL() {
      const seoURL = this.isWorkLayout
        ? 'https://olaolu.dev' + this.$route.fullPath
        : this.seoURLs[this.id]

      return unslashEnd(seoURL || '')
    },
  },

  created() {
    // hack to hide display until sauce drip
    // components are rendered and painted
    // onto the page.
    if (typeof window !== 'undefined') {
      window.setTimeout(() => (this.ready = true), 0)
    }

    if (this.DEV && typeof this.seoURLs[this.id] !== 'string') {
      console.warn(`[Layout]: Expected to find an entry for page with id "${this.id}" in "seoURLs".`)
    }
  },

  metaInfo() {
    return {
      meta: [
        ...createMeta.urls(this.computedSeoURL, 1),
        ...createMeta.titles(this.title, 1),
        ...createMeta.descriptions(this.description),
        { name: 'og:locale', content: 'en_US' },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@mrolaolu' },
        { name: 'twitter:creator', content: '@mrolaolu' },
      ],
    }
  },

  props: {
    id: String,
    title: { type: String, required: true },
    noBanners: { type: Boolean, default: false },
    description: { type: String, required: true },
  },
  components: { ThemeProvider },
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

#site-header {
  position: unset;

  @media (max-width: 650px) {
    padding-left: 8.5vw;
    padding-right: 8.5vw;
  }

  @media (max-width: 700px) {
    padding-top: 3rem;

    #contact-menu {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 651px) and (max-width: 1129px) {
    padding-left: var(--space);
    padding-right: var(--space);
  }

  #logo {
    color: var(--electric-blue);
  }
}

main {
  margin: 0 auto;
  padding: 0 var(--space);
  max-width: var(--content-width);

  @media (max-width: 650px) {
    margin-top: 0;
    padding-left: 8.9vw;
    padding-right: 8.9vw;
  }

  @media (min-width: 651px) {
    font-size: 0.9rem;
  }

  @media (min-width: 1024px) {
    margin-top: calc(var(--space) * 1.2);
  }

  &:focus {
    outline: none;
  }
}

.post__content {
  position: relative;

  img {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    display: block;
    max-width: none;
    border-radius: var(--radius);
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  ul,
  ol {
    margin-left: 1.25em;
    margin-bottom: 1.25em;

    li {
      margin-bottom: 0.6em;
      list-style-type: inherit;
    }
  }

  a {
    --fading-electric: rgba(72, 49, 212, 0.05);

    transition: 0.15s ease;
    color: var(--electric-blue);
    outline: 0.5em solid rgba(72, 49, 212, 0);
    border-bottom: 3px solid var(--fading-electric);

    &:hover {
      border-color: transparent;
      background: var(--fading-electric);
      outline: 3px solid var(--fading-electric);
    }
  }
}

#site-footer {
  height: unset;
  margin-top: 7rem;
  font-size: 0.84rem;

  .inner-content {
    padding-top: 5rem;
    padding-bottom: 3rem;

    @media (max-width: 650px) {
      padding-top: 3rem;
      padding-left: 8.9vw;
      padding-right: 8.9vw;
    }

    @media (min-width: 651px) and (max-width: 1129px) {
      padding-left: var(--space);
      padding-right: var(--space);
    }
  }
}

#post,
.posts {
  p,
  li,
  time,
  span:not(.token) {
    letter-spacing: 0.011rem;
  }
}

@media (max-width: 650px) {
  .posts {
    font-size: 0.9em;
    margin-top: var(--space);
  }
}
</style>

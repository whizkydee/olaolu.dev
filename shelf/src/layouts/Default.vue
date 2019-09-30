<template>
  <ThemeProvider id="app" :style="!ready && 'display: none'" :theme="theme">
    <Header id="site-header" noMenuShadow />

    <ContentView :id="id">
      <slot />
    </ContentView>

    <Footer id="site-footer" />
  </ThemeProvider>
</template>

<script>
import theme from '@saucedrip/core/theme'
import { ThemeProvider } from 'vue-styled-components'

export default {
  data: () => ({ theme, ready: process.env.NODE_ENV === 'development' }),
  created() {
    // hack to hide display until sauce drip
    // components are rendered and painted
    // onto the page.
    if (typeof window !== 'undefined') {
      window.setTimeout(() => (this.ready = true), 0)
    }
  },
  props: {
    id: String,
  },
  components: { ThemeProvider },
}
</script>

<style lang="scss">
#site-header {
  font-size: 0.72rem;
  height: unset;

  &:not([data-blue='true']) {
    position: unset;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  @media (max-width: 650px) {
    padding-left: 8.8vw;
    padding-right: 8.8vw;
  }

  @media (max-width: 700px) {
    padding-top: 3rem;

    #contact__menu {
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

.page-heading {
  user-select: none;
  text-align: center;
  font-size: 1.802em;
  margin-bottom: var(--space);

  @media (max-width: 650px) {
    display: none;
  }

  span {
    opacity: 0.7;
  }
}

#site-footer {
  height: unset;
  margin-top: 7rem;
  font-size: 0.84rem;

  .footer__content {
    padding-top: 5rem;
    padding-bottom: 3rem;

    @media (max-width: 650px) {
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
    margin-top: var(--space);
  }
}
</style>

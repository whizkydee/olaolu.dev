<template>
  <div id="app" :style="!ready && 'display: none'">
    <Header currentSection="" id="site-header" />

    <ContentView :id="id">
      <slot />
    </ContentView>

    <Footer id="site-footer" />
  </div>
</template>

<script>
import ToggleTheme from '~/components/ToggleTheme'

export default {
  data: () => ({ ready: process.env.NODE_ENV === 'development' }),
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
    showLogo: { default: true },
  },
  components: {
    ToggleTheme,
  },
}
</script>

<style lang="scss">
#site-header {
  position: unset;
  font-size: 0.72rem;

  #logo {
    color: var(--electric-blue);
  }
}

#main {
  margin: 0 auto;
  padding: 0 var(--space);
  max-width: var(--content-width);
  margin-top: calc(var(--space) * 1.2);

  @media (min-width: 651px) {
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
  }
}

#site-footer {
  height: unset;
  font-size: 0.864rem;

  .footer__content {
    padding-top: 5rem;
    padding-bottom: 3rem;
  }
}
</style>

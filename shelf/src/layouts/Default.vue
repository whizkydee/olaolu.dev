<template>
  <div id="app">
    <Header currentSection="" id="site-header" v-if="ready" />

    <ContentView :id="id">
      <slot />
    </ContentView>

    <Footer id="site-footer" v-if="ready" />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'
import Footer from '../../../literal-sauce-drip/Footer'
import Header from '../../../literal-sauce-drip/Header'
import ContentView from '../../../literal-sauce-drip/ContentView'

export default {
  data: () => ({ ready: false }),
  mounted() {
    // hack to delay rendering for 0 milliseconds -
    // supposed time needed to render the sauce drip
    // components and paint them onto the page.
    window.setTimeout(() => (this.ready = true), 0)
  },
  props: {
    id: String,
    showLogo: { default: true },
  },
  components: {
    Header,
    Logo,
    Footer,
    ContentView,
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
  font-size: 0.9rem;
  padding: 0 var(--space);
  max-width: var(--content-width);
  margin-top: calc(var(--space) * 1.2);

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

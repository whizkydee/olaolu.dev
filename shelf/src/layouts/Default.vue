<template>
  <div id="app">
    <Header currentSection="" id="site-header" />

    <ContentView :id="id">
      <slot v-if="ready" />
    </ContentView>

    <Footer id="site-footer" />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'
import Footer from '../../../literal-sauce-drip/Footer'
import Header from '../../../literal-sauce-drip/Header'
import ContentView from '../../../literal-sauce-drip/ContentView'

export default {
  data: () => ({
    ready: Footer._compiled && Header._compiled && ContentView._compiled,
  }),
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
    color: #4831d4;
  }
}

#main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;

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

import Vue from 'vue'
import { ThemeProvider } from 'vue-styled-components'

// global styles
import '@saucedrip/core/normalize-css'
import '@/base/global-styles'

import { mapState } from 'vuex'
import { theme } from '@/base/theme'
import { CURRENT_SECTION, HEADER_COMPACT } from './constants'

import Home from '@/home'

// prettier-ignore
export default Vue.component('App', {
  computed: mapState([
    CURRENT_SECTION,
    HEADER_COMPACT,
  ]),

  render() {
    return (
      <ThemeProvider id="app" theme={theme}>
        <SkipLink to="#section-nav" />
        <Header
          compact={this.isPortrait ? false : this.isHeaderCompact}
          currentSection={this.currentSection}
          store={this.$store}
        />
        <Home />
        <Footer currentSection={this.currentSection} />
      </ThemeProvider>
    )
  },
})

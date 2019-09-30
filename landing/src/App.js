import Vue from 'vue'
import { ThemeProvider } from 'vue-styled-components'

// global styles
import '@saucedrip/core/normalize-css'
import '@/base/global-styles'

import { mapState } from 'vuex'
import { theme } from '@/base/theme'
import { CURRENT_SECTION, HEADER_COMPACT } from './constants'

const App = Vue.component('App', {
  computed: mapState([CURRENT_SECTION, HEADER_COMPACT]),

  render() {
    return (
      <ThemeProvider id="app" theme={theme}>
        <a href="#main" id="skip__link">
          Skip to navigation
        </a>
        <Header
          store={this.$store}
          currentSection={this.currentSection}
          compact={this.isPortrait ? false : this.isHeaderCompact}
        />
        <router-view />
        <Footer currentSection={this.currentSection} />
      </ThemeProvider>
    )
  },
})

export default App

import Vue from 'vue'
import { Header } from '@/components'
import { ThemeProvider } from 'vue-styled-components'

// global styles
import '@/base/normalize-css'
import '@/base/global-styles'
import theme from '@/base/theme'

const App = Vue.component('App', {
  render() {
    return (
      <ThemeProvider id="app" theme={theme}>
        <a href="#main" id="skip-link">
          Skip to content
        </a>

        <Header />

        <main role="main" id="main" tabindex="-1">
          <router-view />
        </main>
      </ThemeProvider>
    )
  },
})

export default App

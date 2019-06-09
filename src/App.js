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
          Skip to main content
        </a>

        <Header />

        <router-view />
      </ThemeProvider>
    )
  },
})

export default App

import Vue from 'vue'
import { Header, Footer } from '@/components'
import { ThemeProvider } from 'vue-styled-components'

// global styles
import '@/base/normalize-css'
import '@/base/global-styles'
import theme from '@/base/theme'

const App = Vue.component('App', {
  render() {
    return (
      <ThemeProvider id="app" theme={theme}>
        <a href="#main" id="skip__link">
          Skip to navigation
        </a>

        <Header />

        <router-view />

        <Footer />
      </ThemeProvider>
    )
  },
})

export default App

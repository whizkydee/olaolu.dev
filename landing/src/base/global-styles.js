import { colors } from './theme'
import '@saucedrip/core/global-styles'
import { injectGlobal } from 'vue-styled-components'

const GlobalStyle = injectGlobal`
  html {
    font-size: 0.9rem;
  }

  body {
    color: ${colors.default};
    background-color: #F9F9F9;
  }

  a:not([role='button']) {
    color: ${colors.default};
  }

  #skip-link {
    position: fixed;
  }

  .sauce-button {
    min-width: 23.222em;

    &__content {
      min-height: 4.5em;
    }
  }
`

export default GlobalStyle

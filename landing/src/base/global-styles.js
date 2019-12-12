import { colors } from './theme'
import '@saucedrip/core/global-styles'
import { injectGlobal } from 'vue-styled-components'

const GlobalStyle = injectGlobal`
  html {
    font-size: 14.4px;
  }

  body {
    color: ${colors.default};
    background-color: #F9F9F9;
  }

  a:not([role='button']) {
    color: ${colors.default};
  }

  .sauce__button {
    min-width: 23.222em;

    &--content {
      min-height: 4.5em;
    }
  }
`

export default GlobalStyle

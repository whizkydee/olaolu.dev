import { colors } from './theme'
import '@saucedrip/global-styles'
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

  [data-current-section='trois'] .menu__toggle:not(.x):focus,
  [data-current-section='footer'] .menu__toggle:not(.x):focus {
    outline-color: ${colors.lime};
  }
`

export default GlobalStyle

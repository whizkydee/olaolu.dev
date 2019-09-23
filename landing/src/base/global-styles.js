import { colors } from './theme'
import { media } from '@/helpers'
import '@saucedrip/core/global-styles'
import { injectGlobal } from 'vue-styled-components'

const GlobalStyle = injectGlobal`
  html {
    font-size: 14.4px;
  }

  body {
    color: ${colors.default};
    background-color: #F9F9F9;

    ${media.maxWidth('medium')`
      /* prevent address bar on Chrome for mobile
      from hiding because it triggers 'resize' event
      which distorts the layout for a split-second. */
      height: 100%;
      position: fixed;
      overflow-y: scroll;
    `}
  }

  a:not([role='button']) {
    color: ${colors.default};
  }

  .sauce__button {
    min-width: 23.222em;

    .content {
      min-height: 4.5em;
    }
  }

  [data-current-section='trois'] .menu__toggle:not(.x):focus,
  [data-current-section='footer'] .menu__toggle:not(.x):focus {
    outline-color: ${colors.lime};
  }
`

export default GlobalStyle

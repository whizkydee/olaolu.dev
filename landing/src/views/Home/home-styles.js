import { colors } from '@/base/theme'
import { media, createMenuShadow } from '@/helpers'
import { injectGlobal } from 'vue-styled-components'
import { NAVIGATION_ID, TABBING_CLASSNAME } from '@/constants'

const StyledHomepage = injectGlobal`
  html {
    ${media.minWidth('>medium')`
      overflow: hidden;

      &,
      body {
        touch-action: none;
        -webkit-tap-highlight-color: transparent;
      }
    `}

    ${media.between('>medium', 1600)`
      font-size: 1vw;
    `}

    ${media.minWidth(1601)`
      /* max font-size more or less */
      font-size: 16px;
    `}

    ${media.maxWidth('medium')`
      font-size: 9px;
    `}

    &${`.${TABBING_CLASSNAME}`} {
      [data-current-section='cinq'] #logo:focus {
        outline-color: ${colors['electric-blue']};
      }

      #${NAVIGATION_ID} a:focus:after {
        box-shadow: 0 0 0 0.3rem rgba(24, 156, 230, 0.4);
      }
    }
  }

  #app {
    &[data-current-section='une'] {
      #contact__menu {
        box-shadow: ${createMenuShadow('rgba(163, 204, 170, 0.3)')};
      }
    }

    &[data-current-section='deux'],
    &[data-current-section='cinq'],
    &[data-current-section='quatre'] {
      #logo {
        color: ${colors['electric-blue']};
      }
    }

    &[data-current-section='trois'],
    &[data-current-section='footer'] {
      #${NAVIGATION_ID},
      .menu__toggle:not(.x) {
        color: ${colors.lime};
      }
    }

    &[data-current-section='footer'] #${NAVIGATION_ID} {
      display: none;
    }
  }

  main {
    outline: none;
    -webkit-overflow-scrolling: touch;

    ${media.minWidth('>medium')`
      touch-action: none;
      scroll-snap-type: y mandatory;
    `}
  }

  [data-section='footer'] {
    font-size: 1.2em;
  }
`

export default StyledHomepage

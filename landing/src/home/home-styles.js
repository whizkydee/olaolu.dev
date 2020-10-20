import {
  NAVIGATION_ID,
  SECTION_SELECTOR,
  TABBING_CLASSNAME,
  NAVIGATION_BULLET,
} from '@/constants'
import { colors } from '@/base/theme'
import { media, createMenuShadow } from '@/helpers'
import { injectGlobal } from 'vue-styled-components'

const StyledHomepage = injectGlobal`
  html {
    ${media.minWidth('>medium')`
      overflow: hidden;

      &,
      body {
        touch-action: none;
      }
    `}

    ${media.maxWidth('medium')`
      &,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
        overscroll-behavior: none;
      }
    `}

    ${media.between('>medium', '1600px')`
      font-size: 1vw;
    `}

    ${media.minWidth('1601px')`
      /* max font-size more or less */
      font-size: 1.013rem;
    `}

    ${media.maxWidth('medium')`
      font-size: 0.562rem;
    `}

    &${`.${TABBING_CLASSNAME}`} {
      ${media.maxWidth('portrait')`
        .menu-toggle:focus {
          outline-color: ${colors.lime};
        }
      `}

      [data-current-section='cinq'] #logo:focus {
        outline-color: ${colors.electricBlue};
      }

      [data-current-section='trois'] .menu-toggle:not(.x):focus,
      [data-current-section='footer'] .menu-toggle:not(.x):focus {
        outline-color: ${colors.lime};
      }

      #${NAVIGATION_ID} button:focus:after {
        box-shadow: 0 0 0 0.3rem rgba(24, 156, 230, 0.4);
      }
    }
  }

  #app {
    &[data-current-section='footer'] #${NAVIGATION_ID} {
      display: none;
    }

    ${media.minWidth('>medium')`
      &[data-current-section='une'] {
        #contact-menu.shadow {
          box-shadow: ${createMenuShadow('rgba(163, 204, 170, 0.3)')};
        }
      }

      &[data-current-section='deux'],
      &[data-current-section='cinq'],
      &[data-current-section='quatre'] {
        #logo {
          color: ${colors.electricBlue};
        }
      }

      &[data-current-section='trois'],
      &[data-current-section='footer'] {
        #${NAVIGATION_ID},
        .menu-toggle:not(.x) {
          color: ${colors.lime};
        }
      }
    `}
  }


  ${media.maxWidth('portrait')`
    #site-header {
      font-size: 1.2rem;

      .menu-toggle {
        color: ${colors.lime};
      }
    }

    footer[data-section='footer'] {
      font-size: 1.5rem;
    }
  `}

  main {
    outline: none;
    -webkit-overflow-scrolling: touch;

    ${media.minWidth('>medium')`
      touch-action: none;
      scroll-snap-type: y mandatory;
    `}
  }

  .square-of-dots {
    z-index: -1;
    width: 8em;
    height: 9em;
    position: absolute;
  }

  ${media.minWidth('>medium')`
    .cavalier p { width: 32vw; }

    ${SECTION_SELECTOR}[aria-hidden='true'] {
      @media (hover: hover) and (any-pointer: fine) {
        &:not(.scrolled) {
          .cavalier {
            p,
            h1,
            .square-of-dots {
              opacity: 0;
            }

            p {
              transform: translate3d(0, 20px, 0);

              &:nth-of-type(3) {
                transform: translate3d(0, 15px, 0);
              }
            }

            h1 {
              transform: translate3d(0, 50px, 0);
            }
          }
        }

        /* Prevent focusable elements in hidden sections from
          receiving focus via tabbing from an active section. */
        a[href],
        [tabindex],
        input:not([disabled]),
        select:not([disabled]),
        textarea:not([disabled]),
        ${`button:not([disabled]):not(.${NAVIGATION_BULLET})`} {
          &:not([tabindex='-1']) {
            visibility: hidden;
            transition: visibility 400ms;
          }
        }
      }
    }
  `}

  [data-section='footer'] {
    font-size: 1.2em;
  }
`

export default StyledHomepage

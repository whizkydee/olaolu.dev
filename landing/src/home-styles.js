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

    ${media.between('>medium', 1600)`
      font-size: 1vw;
    `}

    ${media.minWidth(1601)`
      /* max font-size more or less */
      font-size: 16.2px;
    `}

    ${media.maxWidth('medium')`
      font-size: 9px;
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

      #${NAVIGATION_ID} a:focus:after {
        box-shadow: 0 0 0 0.3rem rgba(24, 156, 230, 0.4);
      }
    }
  }

  #app {
    ${media.maxWidth('medium')`
      /* hack to prevent address bar on Chrome for
      mobile from hiding because it causes a resize
      which distorts the layout for a split-second. */
      top: 0;
      left: 0;
      right: 0;
      bottom: 1px;
      overflow-y: auto;
      overflow-x: hidden;
      position: absolute;
      overflow-behavior: contain;
      -webkit-overflow-scrolling: touch;
   `}

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
    header[role='banner'] {
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

        /* Prevent focusable elements in hidden sections
        from receiving focus via tabbing from an active section. */
        [tabindex],
        input:not([disabled]),
        select:not([disabled]),
        button:not([disabled]),
        textarea:not([disabled]),
        ${`a[href]:not(.${NAVIGATION_BULLET})`} {
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

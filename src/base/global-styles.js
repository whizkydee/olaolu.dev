import theme from './theme'
import { createMenuShadow } from '@/helpers'
import { injectGlobal } from 'vue-styled-components'
import { TABBING_CLASSNAME, NAVIGATION_ID } from '@/constants'

const { colors, fontFamily } = theme

const GlobalStyle = injectGlobal`
  * {
    box-sizing: border-box;
  }

  :focus {
    outline-width: 0.2em;
    outline-style: dashed;
    outline-color: ${colors.lime};
  }

  ::placeholder {
    opacity: 1;
    color: rgba(61, 21, 95, .75);
  }

  html {
    width: 100%;
    height: 100%;
    font-size: 1vw;
    touch-action: none;
    position: relative;
    font-family: ${fontFamily};
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &#homepage {
      overflow: hidden;
    }

    &${`.${TABBING_CLASSNAME}`} {
      #logo:focus,
      #contact__menu a:focus,
      [data-section='trois'] .menu__toggle:not(.x):focus {
        outline-color: ${colors.lime};
      }

      [data-section='cinq'] #logo:focus {
        outline-color: ${colors['electric-blue']};
      }

      .menu__toggle:focus {
        outline-color: ${colors['electric-blue']};
      }

      #${NAVIGATION_ID} a:focus:after {
        box-shadow: 0 0 0 0.3rem rgba(24, 156, 230, 0.4);
      }
    }
  }

  body {
    margin: 0;
    height: 100%;
    font: inherit;
    touch-action: none;
    font-weight: normal;
    line-height: inherit;
    color: ${colors.default};
    background-color: #F9F9F9;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
  }

  ul, ol, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    transition: opacity, color, background, transform, border .3s;

    &:not([role='button']) {
      color: ${colors.default};
    }
  }

  button,
  [role='button']
  input[type='submit'] {
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    border-radius: 0;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  textarea {
    resize: none;
  }

  textarea,
  [type='tel'],
  [type='text'],
  [type='email'],
  [type='search'],
  [type='password'] {
    &:focus {
      outline-color: transparent;
    }
  }

  textarea,
  [type='tel'],
  [type='text'],
  [type='email'],
  [type='search'],
  [type='password'] {
    /* disable ugly styles for invalid inputs */
    &:required,
    &:invalid {
      box-shadow: none;
    }

    /* disable ugly webkit autofill styles */
    &:-webkit-autofill {
      color: transparent !important;
      background-image: none !important;
      background-color: #fff !important;
      -webkit-box-shadow: 0 0 0 1000px none inset !important;
      -webkit-text-fill-color: rgba(61, 21, 95, .7) !important;
    }
  }

  img {
    width: auto;
    height: auto;
    display: block;
    max-width: 100%;
    user-select: none;
  }

  .no-scroll {
    overflow: hidden !important;
  }

  #skip-link {
    top: -4em;
    z-index: 1001;
    color: #eeffff;
    position: fixed;
    user-select: none;
    padding: 8px 15px;
    border-radius: 3px;
    transition: top .2s;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background: ${colors.default};

    &:focus {
      top: 0;
      left: 0;
      outline: none;
    }
  }

  .pente {
    background: ${colors['electric-blue']};
    background: ${`linear-gradient(90deg, ${colors['electric-blue']} 67%, ${
      colors.lime
    } 33%)`};
  }

  [class$='__content'] {
    width: 100%;
    display: flex;
    @media (min-width: 1501px) {
      padding: 0 8em;
    }

    @media (max-width: 1500px) {
      padding: 0 10em;
      max-width: 1500px;
    }
  }

  #app {
    position: relative;

    &[data-section='une'],
    &[data-section='cinq'] {
      #contact__menu {
        box-shadow: ${createMenuShadow('rgba(163, 204, 170, 0.3)')};
      }
    }

    &[data-section='deux'],
    &[data-section='cinq'],
    &[data-section='quatre'] {
      #logo path {
        fill: ${colors['electric-blue']};
      }
    }

    &[data-section='trois'] {
      #${NAVIGATION_ID},
      .menu__toggle:not(.x) {
        color: ${colors.lime};
      }
    }
  }
`

export default GlobalStyle

import { theme, colors } from './theme'
import { TABBING_CLASSNAME } from './constants'
import { injectGlobal } from 'vue-styled-components'

const { fontFamily } = theme

const GlobalStyle = injectGlobal`
  * {
    box-sizing: border-box;
  }

  :focus {
    outline-width: 0.2em;
    outline-style: dashed;
    outline-color: ${colors.lime};
  }

  ::selection {
    background-color: rgba(111, 132, 230, .3);
  }

  ::placeholder {
    opacity: 1;
    color: rgba(61, 21, 95, .75);
  }

  html {
    width: 100%;
    position: relative;
    font-family: ${fontFamily};
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &${`:not(.${TABBING_CLASSNAME})`} {
      a:focus {
        outline-color: transparent;
      }
    }

    &${`.${TABBING_CLASSNAME}`} {
      a:focus,
      .sauce__button:focus {
        outline-color: ${colors['electric-blue']};
      }

      .menu__toggle:focus {
        outline-color: ${colors['electric-blue']};
      }

      #logo:focus,
      #contact__menu a:focus,
      [data-theme='lime']:focus {
        outline-color: ${colors.lime};
      }
    }
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font: inherit;
    font-weight: normal;
    line-height: inherit;
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
    transition: opacity, color, background-color, transform, border .3s;
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

  input,
  button,
  textarea {
    border-radius: 0;
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
  }

  /* disable ugly webkit autofill styles */
  input:-webkit-autofill {
    color: transparent !important;
    background-image: none !important;
    background-color: #fff !important;
    -webkit-box-shadow: 0 0 0 1000px none inset !important;
    -webkit-text-fill-color: rgba(61, 21, 95, .7) !important;
  }

  img {
    width: auto;
    height: auto;
    display: block;
    max-width: 100%;
    user-select: none;
  }

  #app {
    position: relative;
  }

  .no-scroll {
    overflow: hidden !important;
  }

  #skip__link {
    top: -4em;
    z-index: 1001;
    color: #eeffff;
    position: fixed;
    user-select: none;
    padding: 8px 15px;
    font-size: 14.5px;
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

  .say__hello {
    color: #cbc9e2;
    letter-spacing: 0.25em;
    text-transform: uppercase;
  }
`

export default GlobalStyle

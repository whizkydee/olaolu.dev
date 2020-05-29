import { theme, colors } from './theme'
import { TABBING_CLASSNAME } from './constants'
import { injectGlobal } from 'vue-styled-components'

const { fontFamily } = theme

const GlobalStyle = injectGlobal`
  *,
  *::before,
  *::after {
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

    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &${`:not(.${TABBING_CLASSNAME})`} {
      a:focus,
      .sauce-button:focus,
      .menu-toggle:focus {
        outline-color: transparent;
      }
    }

    &${`.${TABBING_CLASSNAME}`} {
      a:focus {
        outline-color: currentColor;
      }

      button:focus {
        outline-width: 0.2em;
      }

      .sauce-button:focus {
        outline-style: dashed;
        outline-color: ${colors.electricBlue};
      }

      .menu-toggle:focus {
        outline-offset: 4px;
        outline-style: dashed;
        outline-color: ${colors.electricBlue};
      }

      #logo:focus,
      [data-theme='lime']:focus {
        outline-color: currentColor;
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

  main:focus {
    outline: none;
  }

  ul, ol, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    transition-duration: 300ms;
    transition-property: opacity, color, background-color, transform, border;
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
  }

  input,
  button,
  textarea {
    border-radius: 0;
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

  .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }

  #skip-link {
    top: -4em;
    z-index: 1001;
    color: #eeffff;
    user-select: none;
    padding: 8px 15px;
    font-size: 14.5px;
    position: absolute;
    transition: top .2s;
    background: ${colors.default};
    border-bottom-right-radius: 3px;

    &:focus {
      top: 0;
      left: 0;
      outline: none;
    }
  }

  .say-hello {
    color: #cbc9e2;
    letter-spacing: 0.25em;
    text-transform: uppercase;
  }
`

export default GlobalStyle

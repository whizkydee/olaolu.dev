import theme from './theme'
import { injectGlobal, css } from 'vue-styled-components'

const { colors, fontFamily } = theme

const placeholderSelectors = [
  '::placeholder',
  ':-moz-placeholder',
  '::-moz-placeholder',
  ':-ms-input-placeholder',
  '::-webkit-input-placeholder',
]

const createPlaceholderStyles = color => {
  let styles = ''

  for (let selector of placeholderSelectors)
    styles += `
      ${selector} {
        opacity: 1;
        color: ${color};
      }
    `

  return css`
    ${styles}
  `
}

const GlobalStyle = injectGlobal`
  * {
    box-sizing: border-box;
  }

  :focus {
    outline-width: 2px;
    outline-style: dashed;
    outline-color: ${colors.lime};
  }

  html {
    width: 100%;
    height: 100%;
    position: relative;
    font-size: 14.25px;
    scroll-behavior: smooth;
    font-family: ${fontFamily};
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &#homepage {
      overflow: hidden;
    }
  }

  body {
    margin: 0;
    height: 100%;
    font: inherit;
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

      &:hover {
        color: ${colors['dark-blue']};
      }
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
  }

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
      background-color: ${colors['catskill-white']} !important;
      -webkit-text-fill-color: ${colors['default']} !important;
      -webkit-box-shadow: 0 0 0 1000px ${colors['catskill-white']}
        inset !important;
    }
  }

  ${createPlaceholderStyles(colors['regent-gray'])}

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
    margin: 3px;
    top: -50px;
    padding: 15px;
    z-index: 1001;
    transition: .2s;
    user-select: none;
    position: absolute;
    border-radius: 3px;

    &:focus {
      top: 0;
    }
  }

  .pente {
    background: ${colors['electric-blue']};
    background: ${`linear-gradient(90deg, ${colors['electric-blue']} 67%, ${
      colors.lime
    } 33%)`};
  }

  [class$='__content'] {
    padding: 0 10em;
    max-width: 1500px;
  }
`

export default GlobalStyle

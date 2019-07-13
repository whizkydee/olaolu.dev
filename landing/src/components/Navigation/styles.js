import { media } from '@/helpers'
import styled from 'vue-styled-components'

const StyledNavigation = styled.nav`
  z-index: 999;
  display: none;
  position: fixed;
  margin-top: -20px;
  color: ${props => props.theme.colors['electric-blue']};
  right: ${props => `calc(${props.theme.header.padding} + 1em)`};

  ${media.minWidth('medium', 1)`
    display: flex;
  `}

  ul {
    width: 0.4em;
    display: flex;
    flex-direction: column;
  }

  li {
    width: 100%;
  }

  a {
    display: flex;
    outline: none;
    width: inherit;
    min-height: 2em;
    position: relative;
    color: currentColor;
    transition-delay: 100ms;
    outline-color: transparent;
    -webkit-tap-highlight-color: transparent;

    &:after {
      content: '';
      width: 100%;
      height: 0.4em;
      position: absolute;
      transform: rotate(45deg);
      background-color: currentColor;
      border: 1px solid currentColor;
      transition: transform 0.2s 100ms;
    }

    &[aria-current='page']:after {
      width: 0.76em;
      height: 0.76em;
      margin: 0 -3px;
      transform: rotate(0);
      background: transparent;
    }
  }
`

export default {
  ...StyledNavigation,
  name: 'StyledNavigation',
}

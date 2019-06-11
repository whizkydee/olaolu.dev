import styled from 'vue-styled-components'

const StyledNavigation = styled.nav`
  z-index: 999;
  position: fixed;
  margin-top: -20px;
  right: ${props => props.theme.header.padding};
  color: ${props => props.theme.colors['electric-blue']};

  ul {
    width: 17px;
    display: flex;
    flex-direction: column;
  }

  li {
    width: 100%;
  }

  a {
    display: flex;
    width: inherit;
    min-height: 27px;
    position: relative;
    color: currentColor;
    transition-delay: 100ms;
    outline-color: transparent;
    -webkit-tap-highlight-color: transparent;

    &:not([aria-current='page']) {
      margin: 0 0.5px;
    }

    &:after {
      content: '';
      width: 8px;
      height: 8px;
      position: absolute;
      border-radius: 100%;
      transition: 0.2s 100ms;
      clip-path: circle(100%);
      background-color: currentColor;
    }

    &[aria-current='page'] {
      height: 30px;

      &:after {
        transform: scale(1.9);
        background: transparent;
        border: 0.07em solid currentColor;
      }
    }
  }
`

export default {
  ...StyledNavigation,
  name: 'StyledNavigation',
}

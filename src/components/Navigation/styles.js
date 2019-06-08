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
    margin-bottom: 31px;
  }

  a {
    display: flex;
    width: inherit;
    position: relative;
    color: currentColor;
    transition-delay: 100ms;
    outline-color: transparent;

    &:after {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      border-radius: 100%;
      transition: 0.2s 100ms;
      background-color: currentColor;
    }

    &[aria-current='page']:after {
      transform: scale(1.4);
      background: transparent;
      border: 0.07em solid currentColor;
    }
  }
`

StyledNavigation.name = 'StyledNavigation'
export default StyledNavigation

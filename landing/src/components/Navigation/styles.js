import styled from 'vue-styled-components'

const StyledNavigation = styled.nav`
  z-index: 999;
  display: flex;
  position: fixed;
  margin-top: -35px;
  color: ${({ theme }) => theme.colors.electricBlue};
  right: ${({ theme }) => `calc(${theme.header.padding} + 1em)`};

  ul {
    width: 0.5em;
    display: flex;
    flex-direction: column;
  }

  li {
    width: 0.523em;
  }

  button {
    width: 100%;
    display: flex;
    width: inherit;
    cursor: pointer;
    min-height: 2em;
    position: relative;
    color: currentColor;
    transition-delay: 100ms;
    outline-color: transparent;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;

    &:focus {
      outline: none;
    }

    &:after {
      content: '';
      width: 100%;
      height: 0.523em;
      position: absolute;
      background-color: currentColor;
      border: 1px solid currentColor;
      transition: transform 0.2s 100ms;
      transform: rotate(45deg);
    }

    &.current {
      &:after {
        transform: rotate(0) scale(2);
        background: transparent;
      }
    }
  }
`

export default {
  ...StyledNavigation,
  name: 'StyledNavigation',
}

import styled from 'vue-styled-components'

const StyledNavigator = styled.nav`
  position: relative;
  margin-top: -50px;

  ul {
    width: 17px;
    display: flex;
    flex-direction: column;
  }

  li {
    width: 100%;

    &:not(:last-of-type) {
      margin-bottom: 15px;
    }

    &:not(.current) a {
      margin: 0 0.05em;
    }
  }

  a {
    display: flex;
    width: inherit;
    position: relative;
    text-indent: -9999px;
    outline-color: currentColor;
    color: ${props => props.theme.colors['electric-blue']};

    &:hover {
      /* text-indent: -20px; */
    }

    &:after {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      border-radius: 100%;
      background-color: currentColor;
    }
  }

  .current a:after {
    transform: scale(1.4);
    background: transparent;
    border: 0.07em solid currentColor;
  }
`

StyledNavigator.name = 'StyledNavigator'
export default StyledNavigator

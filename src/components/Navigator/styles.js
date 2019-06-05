import styled from 'vue-styled-components'

const StyledNavigator = styled.nav`
  position: relative;
  margin-top: -50px;

  li:not(:last-of-type) {
    margin-bottom: 15px;
  }

  a {
    display: flex;
    position: relative;
    align-items: center;
    text-indent: -9999px;
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
`

StyledNavigator.name = 'StyledNavigator'
export default StyledNavigator

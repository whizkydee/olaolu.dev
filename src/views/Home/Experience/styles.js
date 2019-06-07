import styled from 'vue-styled-components'

const StyledExperience = styled.section`
  height: 100vh;
  background-color: ${props => props.theme.colors['electric-blue']};

  .experience__content {
    margin-top: 80px;
    flex-direction: column;
  }

  .cavalier {
    h1 {
      max-width: 27vw;
    }

    p {
      width: 27vw;
    }
  }
`

StyledExperience.name = 'StyledExperience'
export default StyledExperience

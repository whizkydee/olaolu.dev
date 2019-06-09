import styled from 'vue-styled-components'

const StyledExperience = styled.section`
  background-color: ${props => props.theme.colors['electric-blue']};

  .experience__content {
    margin-top: 80px;
    align-items: center;
    justify-content: space-between;
  }

  .cavalier {
    h1 {
      max-width: 27.6vw;
    }

    p {
      width: 27vw;
    }
  }

  .work__illo {
    margin: 0;
    position: relative;

    svg {
      width: 46vw;
    }
  }
`

StyledExperience.name = 'StyledExperience'
export default StyledExperience

import styled from 'vue-styled-components'

const StyledExperience = styled.section`
  background-color: ${props => props.theme.colors['electric-blue']};

  .experience__content {
    margin-top: 5.5vh;
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
    transition: transform 0.5s, opacity 0.2s;
    transition-delay: 400ms;

    svg {
      width: 46em;
      height: 50.14em;
    }
  }

  &[aria-hidden='true']:not(.scrolled) {
    .work__illo {
      opacity: 0;
      transform: translate3d(0, 40px, 0);
    }
  }

  &[aria-hidden='false'] {
    .work__illo {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`

export default {
  ...StyledExperience,
  name: 'StyledExperience',
}

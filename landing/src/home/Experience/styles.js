import { media } from '@/helpers'
import { Section } from '@/components'
import styled from 'vue-styled-components'

const StyledExperience = styled(Section)`
  background-color: ${({ theme }) => theme.colors.electricBlue};

  @media (hover: hover) and (any-pointer: fine) {
    ${media.minWidth('>medium')`
      &[aria-hidden='true']:not(.scrolled) {
        .work-illo {
          opacity: 0;
          transform: translate3d(0, 40px, 0);
        }
      }
    `}
  }

  .inner-content {
    justify-content: space-between;

    ${media.minWidth('>medium')`
      margin-top: 5.5vh;
      align-items: center;

      .cavalier {
        h1 {
          max-width: 27.6vw;
        }

        p {
          width: 27vw;
        }
      }
    `}

    ${media.maxWidth('medium')`
      flex-direction: column;
      margin-top: ${({ theme }) => theme.header.height};
    `}

    ${media.maxWidth('portrait')`
      margin-top: 7.12em;
    `}
  }

  a  {
    color: aqua;
    border-bottom: 2px dotted;
  }

  .work-illo {
    display: flex;
    margin-right: 0;
    position: relative;

    ${media.minWidth('>medium')`
      transition: transform 0.5s, opacity 0.2s;
      transition-delay: 400ms;
    `}

    svg {
      flex-shrink: 0;
      max-width: inherit;
    }

    ${media.maxWidth('portrait')`
      max-width: 110%;
      margin-top: 4vh;
      margin-left: -10%;
      margin-bottom: 4vh;

      svg {
        height: 40vh;
        min-height: 300px;
      }
    `}

    ${media.minWidth('>portrait')`
      margin: 0;

      svg {
        height: 50.14em;
      }
    `}

    ${media.between('>portrait', 'medium')`
      max-width: 95%;
      justify-content: center;
    `}

    ${media.minWidth('>medium')`
      width: 46em;
      max-width: 100%;
    `}
  }

  &[aria-hidden='false'] {
    .work-illo,
    .square-of-dots {
      opacity: 1;
    }

    .work-illo {
      transform: translate3d(0, 0, 0);
    }
  }
`

export default {
  ...StyledExperience,
  name: 'StyledExperience',
}

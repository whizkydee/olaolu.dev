import { media } from '@/helpers'
import { Section } from '@/components'
import styled from 'vue-styled-components'

const StyledCarriageway = styled(Section)`
  .inner-content {
    position: relative;
    justify-content: center;

    @media (min-aspect-ratio: 1440/900) {
      margin-top: 4.2rem;
    }

    @media (min-width: 1024px) and (min-height: 665px) and (max-height: 1500px) {
      .lanes {
        min-height: 40em;
      }
    }

    ${media.maxWidth('xLarge')`
      max-width: unset;
      padding: 0 ${({ theme }) => `calc(${theme.header.padding} - 2em)`};
    `}

    ${media.minWidth('>xLarge')`
      padding-left: 5em;
      padding-right: 5em;
    `}

    ${media.maxWidth('portrait')`
      padding: 0 6vw;
    `}
  }

  .lanes {
    width: 100%;
    display: flex;
    background-color: #fff;

    ${media.maxWidth('portrait')`
      flex-direction: column;
    `}
  }

  .lane {
    padding: 6.95em;
    padding-left: ${({ theme }) => theme.header.padding};

    &:not(:last-of-type) {
      border-style: solid;
      border-width: 0 0 0.15rem 0;
      border-color: rgba(72, 49, 212, 0.3);

      ${media.minWidth('>portrait')`
        border-bottom-width: 0;
        border-right-width: 0.15rem;
      `}
    }

    ${media.minWidth('>portrait')`
      width: 50%;
    `}

    ${media.between('>portrait', 'medium')`
      padding-left: 4.5em;
      padding-right: 4.5em;
    `}
  }

  .cavalier {
    margin-bottom: 4.5em;

    h1 {
      font-size: 3.2em;
    }

    p {
      width: unset;
      line-height: 1.2;
      font-size: 1.6em;
      letter-spacing: 0.02em;
    }
  }
`

export default {
  ...StyledCarriageway,
  name: 'StyledCarriageway',
}

import { media } from '@/helpers'
import { colors } from '@/base/theme'
import { Section } from '@/components'
import styled from 'vue-styled-components'

const gradient = `90deg, ${colors['electric-blue']} 67%, ${colors.lime} 33%`
const StyledPitchSlate = styled(Section)`
  flex-direction: column;
  padding-bottom: 4.17rem;
  background: ${colors.electricBlue};

  ${media.minWidth('>portrait')`
    background: ${`linear-gradient(${gradient})`};
  `}

  ${media.maxWidth('medium')`
    font-size: 0.95em;
  `}

  .primary__content,
  .bottom__content {
    align-items: center;
    justify-content: space-between;
  }

  .primary__content {
    ${media.maxWidth('portrait')`
      margin-top: ${props => `calc(${props.theme.header.height} + 6em)`};
    `}

    ${media.minWidth('>portrait')`
      margin-top: ${props => `calc(${props.theme.header.height} + 2em)`};
    `}
  }

  .cavalier {
    ${media.minWidth('>medium')`
      margin-top: -3.5em;
    `}

    h1 {
      ${media.maxWidth('portrait')`
        font-size: 5em;
      `}

      ${media.minWidth('>portrait')`
        font-size: 4.4em;
      `}

      span {
        color: #eeffff;
      }
    }

    p {
      ${media.maxWidth('portrait')`
        font-size: 2em;
      `}

      ${media.minWidth('>portrait')`
        font-size: 1.3em;
      `}

      ${media.maxWidth('medium')`
        max-width: 20em;
      `}
    }
  }

  #sauce__drip__outline {
    left: 0;
    height: 738px;
    position: absolute;
    margin-left: -6.2em;
    top: ${props => props.theme.header.height};

    @media (min-width: 1024px) and (min-height: 800px) {
      height: 90vh;
    }
  }

  .bottom__content {
    ${media.minWidth('>medium')`
      margin-top: auto;
      padding-right: ${props => props.theme.header.padding};
    `}

    ${media.between('>portrait', 'medium')`
      margin-top: 3.7em;
    `}

    ${media.maxWidth('portrait')`
      margin-top: 7em;
    `}

    .deux__points {
      display: flex;
    }
  }

  .deux__points {
    line-height: 1.5;
    justify-content: space-between;
    color: ${props => props.theme.colors.lime};

    ${media.minWidth('>medium')`
      width: 41%;
      font-size: 0.965em;
    `}

    ${media.maxWidth('medium')`
      font-size: 1.2em;
    `}

    ${media.between('>portrait', 'medium')`
      width: 65%;
    `}

    li {
      width: calc(50% - 1.731em);
    }
  }
`

export default {
  ...StyledPitchSlate,
  name: 'StyledPitchSlate',
}

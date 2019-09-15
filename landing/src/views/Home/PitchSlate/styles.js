import { media } from '@/helpers'
import { colors } from '@/base/theme'
import { Section } from '@/components'
import styled from 'vue-styled-components'

const StyledPitchSlate = styled(Section)`
  flex-direction: column;
  padding-bottom: 4.17rem;
  background: ${colors['electric-blue']};
  background: ${`linear-gradient(90deg, ${colors['electric-blue']} 67%, ${
    colors.lime
  } 33%)`};

  ${media.maxWidth('medium')`
    font-size: 0.95em;
  `}

  .primary__content,
  .bottom__content {
    align-items: center;
    justify-content: space-between;
  }

  .primary__content {
    margin-top: ${props => `calc(${props.theme.header.height} + 2em)`};
  }

  .cavalier {
    ${media.minWidth('>medium')`
      margin-top: -3.5em;
    `}

    h1 {
      font-size: 4.4em;

      span {
        color: #eeffff;
      }
    }

    p {
      font-size: 1.3em;

      ${media.maxWidth('medium')`
        max-width: 20em;
      `}
    }
  }

  .visage {
    z-index: 1;
    margin-top: 0;
    margin-left: 0;
    width: 23.334em;
    height: 24.67em;
    margin-bottom: 0;
    position: relative;
    border: 0.115rem solid #fff;

    ${media.minWidth('>medium')`
      margin-right: ${props => `calc(${props.theme.header.padding} + 4em)`};
    `}

    ${media.maxWidth('medium')`
      margin-right: ${props => `calc(${props.theme.header.padding} - 3em)`};
    `}

    .face {
      width: inherit;
      height: inherit;
      margin-left: -2.2em;
      margin-top: -2.435em;
      background-color: #fff;
      background-size: cover;
      /* background-image: url(/img/olaolu.jpg); */
    }
  }

  #avatar__shapes {
    top: -25%;
    width: 40em;
    z-index: -1;
    height: 126%;
    right: -5.4em;
    position: absolute;
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

    @media (max-width: 767px) {
      display: none;
    }
  }

  .bottom__content {
    ${media.minWidth('>medium')`
      margin-top: auto;
      padding-right: ${props => props.theme.header.padding};
    `}

    ${media.maxWidth('medium')`
      margin-top: 3.7em;
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
      width: 65%;
      font-size: 1.2em;
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

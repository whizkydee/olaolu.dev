import { media } from '@/helpers'
import { colors } from '@/base/theme'
import { Section } from '@/components'
import styled from 'vue-styled-components'
import { flattenStr } from '@mrolaolu/helpers'
import { FACE_MARGIN_LEFT } from '@/constants'

const gradient = flattenStr(`
  90deg, ${colors.electricBlue} 67%,
  ${colors.lime} 33%
`)
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

  ${media.minWidth('>medium')`
    &[aria-hidden='true'] { overflow: unset; }
  `}

  ${media.maxWidth('portrait')`
    padding-bottom: 0;
  `}

  .inner-content {
    align-items: center;
    justify-content: space-between;

    &.primary {
      ${media.maxWidth('portrait')`
        margin-top: ${({ theme }) => `calc(${theme.header.height} + 6em)`};
      `}

      ${media.minWidth('>portrait')`
        margin-top: ${({ theme }) => `calc(${theme.header.height} + 2em)`};
      `}

      .visage {
        ${media.maxWidth('medium')`
          margin-right: 0;
        `}

        ${media.minWidth('>medium')`
          margin-right: ${({ theme }) => `calc(${theme.header.padding} + 4em)`};
        `}
      }
    }

    &.bottom {
      ${media.minWidth('>medium')`
        margin-top: auto;
        padding-right: ${({ theme }) => theme.header.padding};
      `}

      ${media.between('>portrait', 'medium')`
        margin-top: 3.7em;
      `}

      ${media.maxWidth('portrait')`
        margin-top: 7em;
        margin-bottom: 4em;
      `}

      .highlights {
        display: flex;
      }
    }
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

      > span > span {
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

  #sauce-drip-outline {
    left: 0;
    display: none;
    height: 738px;
    position: absolute;
    margin-left: -6.2em;
    top: ${({ theme }) => theme.header.height};

    @media (min-aspect-ratio: 1440/900) and (min-height: 738px)  {
      display: block;
    }

    @media (min-width: 1024px) and (min-height: 800px) {
      height: 90vh;
    }
  }

  .highlights {
    line-height: 1.5;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.lime};

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

  .mobile-avatar {
    width: 100%;
    display: flex;
    padding: 7rem 0;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.lime};

    .visage {
      margin-left: ${FACE_MARGIN_LEFT};
    }

    path[fill='#ccf381'] {
      fill: ${({ theme }) => theme.colors.electricBlue};
    }
  }
`

export default {
  ...StyledPitchSlate,
  name: 'StyledPitchSlate',
}

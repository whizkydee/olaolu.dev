import { media } from '@/helpers'
import { Section } from '@/components'
import styled from 'vue-styled-components'

const StyledContact = styled(Section)`
  position: relative;

  ${media.minWidth('>medium')`
    @media (max-height: 1199px) {
      &:after {
        bottom: 0;
        content: '';
        width: 100%;
        height: 1em;
        position: absolute;
        background: ${({ theme }) => theme.colors.default};
      }
    }
  `}

  .inner-content {
    margin-top: 2.78em;
    align-items: center;
    flex-direction: column;
  }

  .cavalier {
    margin-bottom: 5.2em;

    ${media.minWidth('>portrait')`
      text-align: center;
    `}

    h1 {
      font-size: 3.2em;
      font-weight: bold;
      line-height: 1.3;
      max-width: unset;
    }

    p {
      margin: 0 auto;
      font-size: 1.6em;
      line-height: 1.2;
      margin-top: 15px;
      letter-spacing: 0.02em;

      ${media.maxWidth('portrait')`
        br { display: none; }
      `}
    }
  }

  #home-contact {
    align-items: center;
    justify-content: center;

    ${media.minWidth('>medium')`
      width: 60%;
      min-width: 500px;
    `}

    ${media.between('>portrait', 'medium')`
      width: 90%;
    `}

    ${media.maxWidth('portrait')`
      width: 100%;
    `}

    label,
    textarea,
    [type='text'],
    [type='email'] {
      font-weight: 200;
    }
  }
`

export default {
  ...StyledContact,
  name: 'StyledContact',
}

import theme from '../theme'
import Section from '../Section'
import { media } from '../helpers'
import styled from 'vue-styled-components'

const StyledFooter = styled(Section)`
  color: ${theme.colors['lime-alt']};
  background: ${theme.colors.default};

  li a {
    color: currentColor;
  }

  .inner__content {
    padding-top: 8rem;
    padding-bottom: 5rem;
    flex-direction: column;
  }

  .footer__main,
  .footer__bottom {
    width: 100%;
    display: flex;
  }

  .basic__contact {
    ${media.maxWidth(460)`
      margin-right: 12vw;
    `}

    ${media.minWidth(461)`
      margin-right: 18vw;
    `}
  }

  .footer__main {
    margin-bottom: 7.4em;

    ${media.maxWidth(370)`
      flex-direction: column;
    `}

    > ul {
      line-height: 2.5;
      font-size: 1.15em;
      margin-top: 2.05em;
    }
  }

  .footer__bottom {
    padding-top: 3em;
    font-size: 1.15em;
    justify-content: space-between;
    border-top: 1px solid rgba(186, 221, 118, 0.7);

    ${media.maxWidth(460)`
      justify-content: center;
    `}
  }

  .social__contact {
    ${media.maxWidth('portrait')`
      li:not(:last-of-type) {
        margin-right: 1em;
      }
    `}

    ${media.maxWidth(460)`
      display: none;
    `}
  }
`

export default {
  ...StyledFooter,
  name: 'StyledFooter',
}

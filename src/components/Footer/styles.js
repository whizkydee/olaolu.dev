import { media } from '@/helpers'
import styled from 'vue-styled-components'

const StyledFooter = styled.footer`
  z-index: 1000;
  user-select: none;
  position: relative;
  scroll-snap-align: start;
  color: ${props => props.theme.colors['lime-alt']};
  background: ${props => props.theme.colors.default};

  ${media.minWidth('medium', +1)`
    &[aria-hidden='true'] a {
      visibility: hidden;
      transition: visibility 400ms;
    }
  `}

  a {
    color: currentColor;
  }

  .footer__content {
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
    margin-right: 15em;
  }

  .footer__main {
    margin-bottom: 7.4em;

    > ul {
      line-height: 2.5;
      font-size: 1.15em;
      margin-top: 2.05em;
    }
  }

  .footer__bottom {
    font-size: 1.15em;
    justify-content: space-between;
  }
`

export default {
  ...StyledFooter,
  name: 'StyledFooter',
}

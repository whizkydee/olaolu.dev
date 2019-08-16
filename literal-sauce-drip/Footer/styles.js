import theme from '../theme'
import Section from '../Section'
import styled from 'vue-styled-components'

const StyledFooter = styled(Section)`
  color: ${theme.colors['lime-alt']};
  background: ${theme.colors.default};

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
    padding-top: 3em;
    font-size: 1.15em;
    justify-content: space-between;
    border-top: 1px solid rgba(186, 221, 118, 0.7);
  }
`

export default {
  ...StyledFooter,
  name: 'StyledFooter',
}

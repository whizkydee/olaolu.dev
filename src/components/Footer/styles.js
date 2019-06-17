import styled from 'vue-styled-components'

const StyledFooter = styled.footer`
  color: #df678c;
  z-index: 1000;
  user-select: none;
  position: relative;
  background: ${props => props.theme.colors.default};

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

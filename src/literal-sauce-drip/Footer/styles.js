import theme from '../theme'
import Section from '../Section'
import { media } from '../helpers'
import { default as styled, css } from 'vue-styled-components'

const StyledFooter = css`
  color: ${theme.colors.limeAlt};
  background: ${theme.colors.default};

  ${({ shelfEnv }) =>
    !shelfEnv &&
    css`
      ${media.minWidth('>medium')`
        &[aria-hidden='true']:not(.scrolled) {
          .footer-main,
          .footer-bottom {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
        }
      `}
    `}

  li a {
    color: currentColor;
  }

  .inner-content {
    padding-top: 8rem;
    padding-bottom: 5rem;
    flex-direction: column;
  }

  .footer-main,
  .footer-bottom {
    width: 100%;
    display: flex;

    ${({ shelfEnv }) =>
      !shelfEnv &&
      css`
        ${media.minWidth('medium')`
          transition: transform 0.5s, opacity 0.2s;
        `}
      `}
  }

  .basic-contact {
    ${media.maxWidth('460px')`
      margin-right: 12vw;
    `}

    ${media.minWidth('461px')`
      margin-right: 18vw;
    `}
  }

  .footer-main {
    margin-bottom: 7.4em;

    ${media.minWidth('medium')`
      transition-delay: 300ms;
    `}

    ${media.maxWidth('420px')`
      flex-direction: column;
    `}

  > ul {
      line-height: 2.5;
      font-size: 1.15em;
      margin-top: 2.05em;
    }
  }

  .footer-bottom {
    padding-top: 3em;
    font-size: 1.15em;
    justify-content: space-between;
    border-top: 1px solid rgba(186, 221, 118, 0.7);

    ${media.minWidth('medium')`
      transition-delay: 500ms;
    `}

    ${media.maxWidth('460px')`
      justify-content: left;
    `}
  }

  .social-contact {
    ${media.maxWidth('portrait')`
      li:not(:last-of-type) {
        margin-right: 1em;
      }
    `}

    ${media.maxWidth('460px')`
      display: none;
    `}
  }

  ${({ shelfEnv }) =>
    !shelfEnv &&
    css`
      &[aria-hidden='false'] {
        .footer-main,
        .footer-bottom {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    `}
`

export default Object.assign(
  { name: 'StyledFooter' },
  styled(Section, {
    shelfEnv: Boolean,
  })([StyledFooter])
)

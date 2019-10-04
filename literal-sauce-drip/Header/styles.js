import theme from '../theme'
import { media } from '../media-helpers'
import { createMenuShadow } from '../helpers'
import styled, { css } from 'vue-styled-components'

const StyledHeader = css`
  width: 100%;
  display: flex;
  z-index: 1000;
  max-height: 12rem;
  align-items: center;
  background: transparent;
  justify-content: space-between;
  font-size: ${({ env }) => (env == 'shelf' ? '0.72rem' : '1rem')};
  height: ${({ env }) => (env == 'home' ? theme.header.height : 'unset')};
  ${({ env }) =>
    env == 'shelf' &&
    css`
      padding-top: 3rem;
      padding-bottom: 3rem;
    `}

  ${media.minWidth('>medium')`
    position: fixed;
    padding-left: ${theme.header.padding};
    padding-right: ${theme.header.padding};

    .cross-site-nav {
      line-height: 2.5;
      font-size: 1.15em;
    }
  `}

  ${media.maxWidth('medium')`
    padding-left: 3em;
    padding-right: 3em;

    ${props =>
      !props.blue &&
      css`
        position: absolute;
      `}

    ${props =>
      props.blue &&
      css`
        top: 0;
        bottom: auto;
        position: fixed;

        #logo,
        .menu-toggle {
          color: ${theme.colors.electricBlue} !important;
        }
      `}
  `}

  &[data-compact='true'] {
    #logo {
      width: unset;

      svg {
        transform: translateX(-3.5rem);
      }

      .logo_svg__lu,
      .logo_svg__ola {
        opacity: 0;
        pointer-events: none;
      }

      .logo_svg__ola {
        transform: translateX(50%);
        transform-origin: left;
      }

      .logo_svg__lu {
        transform: translateX(-50%);
      }
    }
  }

  &[data-compact='false'] {
    .logo_svg__lu,
    .logo_svg__ola {
      transition: opacity 0.3s, transform 0.5s 100ms;
    }
  }

  #logo {
    display: flex;
    width: 8.34em;
    height: 3.195em;
    position: relative;
    flex-direction: column;
    transition: color 700ms;
    outline-color: transparent;
    color: ${theme.colors.lime};

    ${media.maxWidth('medium')`
      z-index: 999;
    `}

    svg {
      width: inherit;
      height: inherit;

      path {
        fill: currentColor;
      }
    }

    .logo_svg__lu,
    .logo_svg__ola {
      opacity: 1;
      transform: translate(0);
    }
  }

  .menu-toggle {
    z-index: 999;
    width: 2.78em;
    height: 2.09em;
    background: none;
    position: relative;
    display: inline-flex;
    margin-top: 0.699em;
    color: ${theme.colors.electricBlue};

    &.x {
      transform: scale(0.9);

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        top: 0;
        width: 100%;
        transform: rotate(-45deg);
      }
    }

    &:before,
    &:after {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      transition: 0.2s ease;
      transform: rotate(0deg);
      background-color: currentColor;
    }

    &:before {
      top: 0;
    }

    &:after {
      right: 0;
      width: 72%;
      top: 1.13em;
    }
  }

  #contact-menu {
    z-index: 998;
    display: flex;
    box-shadow: none;
    padding: 3.473em;
    user-select: none;
    flex-direction: column;

    a {
      color: ${theme.colors.electricBlue};
    }

    ${media.maxWidth('medium')`
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      background: #fff;
      font-size: 2.2rem;
      transition: opacity .3s, visibility .3s;
      justify-content: space-around;

      &:not(.open) {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }

      &.open {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }

      ul {
        font-size: 1em;
        line-height: 2.5;
      }

      .social-contact li:not(:last-of-type) {
        margin-right: 7.5vw;
      }
    `}

    ${media.maxWidth('350px')`
      padding: 2.473em;
    `}

    ${media.minWidth('>medium')`
      top: 1.39em;
      right: 3.41em;
      width: 22.223em;
      font-size: 1.1em;
      position: absolute;
      transition: opacity 0.4s, box-shadow 0.4s;

      &:before {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: 0.3s;
        width: 100%;
        height: 100%;
        content: '';
        position: absolute;
        background-color: #fff;
        transform-origin: top right;
      }

      &:not(.open) {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;

        &:before {
          transform: scaleX(.3826) scaleY(.27);
        }

        .cross-site-nav,
        .basic-contact ul,
        .social-contact,
        .basic-contact .say-hello {
          opacity: 0;
        }

        .cross-site-nav {
          transform: translateY(50px);
        }

        .basic-contact ul {
          transform: translateY(40px);
        }

        .social-contact {
          transform: translateY(30px);
        }
      }

      &.open {
        ${props =>
          !props.noMenuShadow &&
          css`
            &.shadow {
              box-shadow: ${createMenuShadow()};
            }
          `};

        &:before {
          transform: scale(1);
        }

        .cross-site-nav,
        .basic-contact ul,
        .social-contact,
        .basic-contact .say-hello {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .basic-contact {
        margin-top: 0.8em;

        .say-hello {
          transition: opacity 0.2s 400ms;
        }
      }

      .social-contact {
        font-size: 0.9em;
      }

      .cross-site-nav,
      .basic-contact ul,
      .social-contact {
        transition: opacity, transform 0.3s;
      }

      .cross-site-nav {
        margin: 1.2em 0;
        transition-delay: 200ms;
      }

      .basic-contact ul {
        margin: 0 0 2.78em;
        transition-delay: 400ms;
      }

      .social-contact {
        transition-delay: 600ms;
      }
    `}
  }
`

export default Object.assign(
  { name: 'StyledHeader' },
  styled('header', {
    env: String,
    noMenuShadow: Boolean,
    blue: Boolean,
  })([StyledHeader])
)

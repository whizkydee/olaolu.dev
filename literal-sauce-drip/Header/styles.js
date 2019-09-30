import theme from '../theme'
import { media } from '../media-helpers'
import { createMenuShadow } from '../helpers'
import styled, { css } from 'vue-styled-components'

const StyledHeader = css`
  width: 100%;
  display: flex;
  z-index: 1000;
  font-size: 1rem;
  max-height: 12rem;
  align-items: center;
  background: transparent;
  justify-content: space-between;
  height: ${theme.header.height};

  ${media.minWidth('>medium')`
    position: fixed;
    padding-left: ${theme.header.padding};
    padding-right: ${theme.header.padding};

    .cross__site__nav { display: none; }
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
        .menu__toggle {
          color: ${theme.colors.electricBlue} !important;
        }
      `}

      .cross__site__nav { display: block; }
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

  .menu__toggle {
    z-index: 999;
    width: 2.78em;
    height: 2.09em;
    background: none;
    position: relative;
    display: inline-flex;
    margin-top: 0.699em;
    color: ${theme.colors['electric-blue']};

    &:focus {
      outline-offset: 4px;
      outline-color: transparent;
    }

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

  #contact__menu {
    z-index: 998;
    display: flex;
    box-shadow: none;
    padding: 3.473em;
    user-select: none;
    flex-direction: column;

    a {
      color: ${theme.colors['electric-blue']};
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
      transition: opacity .3s;
      justify-content: space-around;

      &[aria-expanded='false'] {
        opacity: 0;
        pointer-events: none;
      }

      &[aria-expanded='true'] {
        opacity: 1;
        pointer-events: auto;
      }

      ul {
        font-size: 1em;
        line-height: 2.5;
      }

      .social__contact li:not(:last-of-type) {
        margin-right: 7.5vw;
      }
    `}

    ${media.maxWidth(350)`
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
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 100%;
        transition: 0.3s;
        position: absolute;
        background-color: #ffffff;
      }

      &[aria-expanded='false'] {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;

        &:before {
          clip-path: polygon(62% 0, 100% 0%, 100% 40%, 63% 40%);
        }
      }

      &[aria-expanded='true'] {
        ${props =>
          !props.noMenuShadow &&
          css`
            &.shadow {
              box-shadow: ${createMenuShadow()};
            }
          `};

        &:before {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }

        .basic__contact ul,
        .social__contact ul,
        .basic__contact .say__hello {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .basic__contact {
        margin-top: 0.8em;

        .say__hello {
          opacity: 0;
          transition: opacity 0.2s 200ms;
        }
      }

      .social__contact {
        font-size: 0.9em;
      }

      .basic__contact ul,
      .social__contact ul {
        opacity: 0;
        transition: opacity, transform 0.3s;
      }

      .basic__contact ul {
        margin: 1.2em 0 2.78em;
        transition-delay: 200ms;
        transform: translateY(30px);
      }

      .social__contact ul {
        transition-delay: 400ms;
        transform: translateY(20px);
      }
    `}
  }
`

export default {
  ...styled('header', { noMenuShadow: Boolean, blue: Boolean })`
    ${StyledHeader}
  `,
  name: 'StyledHeader',
}

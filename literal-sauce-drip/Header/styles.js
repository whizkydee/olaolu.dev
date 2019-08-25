import theme from '../theme'
import styled from 'vue-styled-components'
import { createMenuShadow } from '../helpers'
import { minWidth, maxWidth } from '../media-helpers'

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  z-index: 1000;
  position: fixed;
  font-size: 1rem;
  max-height: 12rem;
  align-items: center;
  background: transparent;
  justify-content: space-between;
  height: ${theme.header.height};

  ${minWidth('medium', 1)`
    padding: 0 ${theme.header.padding};
  `}

  ${maxWidth('medium')`
    padding: 0 3em;
  `}

  &[data-compact='true'] {
    #logo {
      width: unset;

      svg {
        transform: translateX(-56px);
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

  #contact__menu {
    top: 1.39em;
    z-index: 998;
    display: flex;
    right: 3.41em;
    width: 22.223em;
    box-shadow: none;
    font-size: 1.1em;
    user-select: none;
    padding: 3.473em;
    position: absolute;
    flex-direction: column;
    transition: opacity 0.4s, box-shadow 0.1s 1000ms;

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

    &:not([aria-expanded='true']) {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;

      &:before {
        clip-path: polygon(62% 0, 100% 0%, 100% 40%, 63% 40%);
      }
    }

    &[aria-expanded='true'] {
      box-shadow: ${createMenuShadow()};

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

    a {
      color: ${theme.colors['electric-blue']};
    }
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
      height: 0.14em;
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
`

export default {
  ...StyledHeader,
  name: 'StyledHeader',
}

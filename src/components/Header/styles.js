import styled from 'vue-styled-components'
import { createMenuShadow } from '@/helpers'

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  z-index: 1001;
  position: fixed;
  align-items: center;
  background: transparent;
  justify-content: space-between;
  height: ${props => props.theme.header.height};
  padding: 0 ${props => props.theme.header.padding};

  &[data-compact='true'] {
    #logo {
      svg {
        width: inherit;
      }

      .logo_svg__lu,
      .logo_svg__ola {
        opacity: 0;
        pointer-events: none;
      }

      .logo_svg__ola {
        transform: translateX(-40%);
      }

      .logo_svg__sauce__drip {
      }

      .logo_svg__lu {
        transform: translateX(40%);
      }
    }
  }

  #logo {
    display: flex;
    position: relative;
    flex-direction: column;

    svg {
      height: 46px;
      width: 120px;
    }

    #sauce__drip {
      top: 0;
      position: absolute;
    }

    .logo_svg__lu,
    .logo_svg__ola {
      opacity: 1;
      transform: translate(0);
      transition: opacity 0.2s, transform 0.5s;
    }
  }

  #contact__menu {
    top: 20px;
    right: 49px;
    z-index: 999;
    width: 320px;
    height: 300px;
    display: flex;
    padding: 50px;
    box-shadow: none;
    user-select: none;
    font-size: 1.06em;
    position: absolute;
    flex-direction: column;
    background-color: #ffffff;
    transition: opacity 0.2s, box-shadow 0.6s 200ms;

    &:not([aria-expanded='true']) {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    &[aria-expanded='true'] {
      box-shadow: ${createMenuShadow()};

      .title,
      .basic__contact,
      .social__contact {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .title {
      opacity: 0;
      color: #cbc9e2;
      transition: 0.2s;
      font-weight: 300;
      letter-spacing: 4.2px;
      transition-delay: 100ms;
      text-transform: uppercase;
    }

    a {
      color: ${props => props.theme.colors['electric-blue']};
    }
  }

  .basic__contact,
  .social__contact {
    opacity: 0;
    transition: opacity, transform 0.2s;
  }

  .basic__contact {
    line-height: 2.5;
    font-size: 1.2em;
    margin-top: 30px;
    transition-delay: 100ms;
    transform: translateY(30px);
  }

  .social__contact {
    display: flex;
    margin-top: auto;
    transition-delay: 300ms;
    transform: translateY(20px);
    justify-content: space-between;

    li {
      display: inline-block;
    }
  }

  .menu__toggle {
    width: 40px;
    height: 30px;
    z-index: 1000;
    background: none;
    position: relative;
    display: inline-flex;
    color: ${props => props.theme.colors['electric-blue']};

    &:focus {
      outline: none;
    }

    &.x {
      width: 30px;

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
      height: 0.15em;
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
      top: 16px;
      width: 72%;
    }
  }
`
StyledHeader.name = 'StyledHeader'

export default StyledHeader
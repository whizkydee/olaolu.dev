import Vue from 'vue'
import { BowArrow } from '@/assets'
import styled, { css } from 'vue-styled-components'

const Button = Vue.component('Button', {
  render() {
    const { ariaLabel, type, url, lime, btnAttrs } = this

    const buttonTemplate = (
      <div class="content">
        {this.$slots.default}
        {!this.noArrow && <BowArrow class="bow__arrow" />}
      </div>
    )

    if (typeof url === 'string') {
      return (
        <StyledButtonLink
          href={url}
          role="button"
          class="sauce__button"
          aria-label={ariaLabel}
          data-theme={lime && 'lime'}
          {...{ attrs: btnAttrs }}
        >
          {buttonTemplate}
        </StyledButtonLink>
      )
    }

    return (
      <StyledButton
        type={type}
        class="sauce__button"
        aria-label={ariaLabel}
        data-theme={lime && 'lime'}
        {...{ attrs: btnAttrs }}
      >
        {buttonTemplate}
      </StyledButton>
    )
  },

  props: {
    url: String,
    title: String,
    btnAttrs: Object,
    ariaLabel: String,
    lime: { type: Boolean, default: false },
    type: { type: String, default: 'button' },
    noArrow: { type: Boolean, default: false },
  },
})

function createStyledButton(tagName, props) {
  const styles = css`
    overflow: hidden;
    font-size: 0.9em;
    font-weight: bold;
    position: relative;
    user-select: none;
    white-space: nowrap;
    min-width: 23.222em;
    display: inline-flex;
    letter-spacing: 0.1em;
    background: transparent;
    text-transform: uppercase;

    &[data-theme='lime'] {
      .content {
        color: ${props => props.theme.colors.lime};
      }

      &:hover .content,
      &:focus .content {
        border-color: ${props => props.theme.colors.lime};

        &:before {
          background: ${props => props.theme.colors.lime};
        }
      }
    }

    &:hover,
    &:focus {
      .content {
        color: #fff;
        border-color: ${props => props.theme.colors['electric-blue']};

        &:before {
          width: 101%;
          background: ${props => props.theme.colors['electric-blue']};
        }
      }
    }

    &:focus {
      outline-color: transparent;
    }

    .content {
      z-index: 1;
      width: 100%;
      display: flex;
      min-height: 4.5em;
      position: relative;
      padding: 1.25em 3em;
      align-items: center;
      justify-content: center;
      border: 0.1rem solid currentColor;
      color: ${props => props.theme.colors['electric-blue']};

      &:before {
        right: 0;
        bottom: 0;
        width: 0%;
        top: -0.1em;
        content: '';
        z-index: -1;
        left: -0.15em;
        height: 108%;
        position: absolute;
        background: currentColor;
        transition: width 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      }
    }

    .bow__arrow {
      width: 3.1em;
      height: 1.7em;
      margin-left: 1.55em;

      path {
        stroke: currentColor;
      }
    }
  `

  return {
    name: 'StyledButton',
    ...styled(tagName, props)`
      ${styles}
    `,
  }
}

const StyledButtonLink = createStyledButton('a', {})
const StyledButton = createStyledButton('button', {})

export default Button

<template>
  <StyledButtonLink
    :href="url"
    role="button"
    class="sauce__button"
    :data-theme="lime && 'lime'"
    v-if="typeof url === 'string'"
  >
    <div class="sauce__button--content">
      <slot />
      <BowArrow class="bow__arrow" v-if="!noArrow" />
    </div>
  </StyledButtonLink>

  <StyledButton
    v-else
    :type="type"
    class="sauce__button"
    :data-theme="lime && 'lime'"
  >
    <div class="sauce__button--content">
      <slot />
      <BowArrow class="bow__arrow" v-if="!noArrow" />
    </div>
  </StyledButton>
</template>

<script>
import theme from '../theme'
import BowArrow from '../bow-arrow'
import styled, { css } from 'vue-styled-components'

function createStyledButton(tagName, props) {
  const styles = css`
    overflow: hidden;
    font-size: 0.9em;
    font-weight: bold;
    position: relative;
    user-select: none;
    white-space: nowrap;
    display: inline-flex;
    letter-spacing: 0.1em;
    background: transparent;
    text-transform: uppercase;
    -webkit-tap-highlight-color: transparent;

    &[data-theme='lime'] {
      .sauce__button--content {
        color: ${theme.colors.lime};
      }

      &:hover .sauce__button--content,
      &:focus .sauce__button--content {
        border-color: ${theme.colors.lime};

        &:before {
          background: ${theme.colors.lime};
        }
      }
    }

    &:hover,
    &:focus {
      .sauce__button--content {
        color: #fff;
        border-color: ${theme.colors['electric-blue']};

        &:before {
          transform: translateX(0);
          background: ${theme.colors['electric-blue']};
        }
      }
    }

    &:focus {
      outline-color: transparent;
    }

    .sauce__button--content {
      z-index: 1;
      width: 100%;
      display: flex;
      position: relative;
      padding: 1.25em 3em;
      align-items: center;
      justify-content: center;
      border: 1px solid currentColor;
      color: ${theme.colors['electric-blue']};

      &:before {
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        top: -0.1em;
        content: '';
        z-index: -1;
        height: 108%;
        position: absolute;
        pointer-events: none;
        background: currentColor;
        transform: translateX(-101%);
        transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
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

export default {
  components: {
    BowArrow,
    StyledButton,
    StyledButtonLink,
  },
  props: {
    url: String,
    lime: { type: Boolean, default: false },
    type: { type: String, default: 'button' },
    noArrow: { type: Boolean, default: false },
  },
}
</script>

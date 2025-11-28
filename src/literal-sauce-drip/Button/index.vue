<template>
  <StyledButtonLink
    :href="url"
    class="sauce-button"
    :data-theme="lime && 'lime'"
    v-if="typeof url === 'string'"
  >
    <div class="sauce-button__content">
      <slot />
      <BowArrow class="bow-arrow" v-if="!noArrow" />
    </div>
  </StyledButtonLink>

  <StyledButton
    v-else
    :type="type"
    class="sauce-button"
    :data-theme="lime && 'lime'"
  >
    <div class="sauce-button__content">
      <slot />
      <BowArrow class="bow-arrow" v-if="!noArrow" />
    </div>
  </StyledButton>
</template>

<script>
import theme from '../theme'
import BowArrow from '../bow-arrow'
import styled, { css } from 'vue-styled-components'

function createStyledButton(tagName, props) {
  const styles = css`
    position: relative;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.9em;
    user-select: none;
    display: inline-flex;
    overflow: hidden;
    background: transparent;
    white-space: nowrap;
    -webkit-tap-highlight-color: transparent;

    &[data-theme='lime'] {
      .sauce-button__content {
        color: ${theme.colors.lime};
      }

      &:hover .sauce-button__content,
      &:focus .sauce-button__content {
        border-color: ${theme.colors.lime};

        &:before {
          background: ${theme.colors.lime};
        }
      }
    }

    &:hover,
    &:focus {
      .sauce-button__content {
        color: #fff;
        border-color: ${theme.colors.electricBlue};

        &:before {
          transform: translateX(0);
          background: ${theme.colors.electricBlue};
        }
      }
    }

    .sauce-button__content {
      z-index: 1;
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      padding: 1.25em 3em;
      width: 100%;
      color: ${theme.colors.electricBlue};
      border: 1px solid currentColor;

      &:before {
        content: '';
        width: 101%;
        height: 108%;
        pointer-events: none;
        z-index: -1;
        position: absolute;
        top: -0.1em;
        bottom: 0;
        left: 0;
        right: 0;
        background: currentColor;
        transform: translateX(-100%);
        transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      }
    }

    .bow-arrow {
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
    lime: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
    },
    noArrow: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

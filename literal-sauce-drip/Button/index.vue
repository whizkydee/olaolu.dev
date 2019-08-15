<template>
  <StyledButtonLink
    :href="url"
    role="button"
    class="sauce__button"
    :data-theme="lime && 'lime'"
    v-if="typeof url === 'string'"
  >
    <div class="content">
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
    <div class="content">
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
    min-width: 23.222em;
    display: inline-flex;
    letter-spacing: 0.1em;
    background: transparent;
    text-transform: uppercase;

    &[data-theme='lime'] {
      .content {
        color: ${theme.colors.lime};
      }

      &:hover .content,
      &:focus .content {
        border-color: ${theme.colors.lime};

        &:before {
          background: ${theme.colors.lime};
        }
      }
    }

    &:hover,
    &:focus {
      .content {
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
      color: ${theme.colors['electric-blue']};

      &:before {
        right: 0;
        bottom: 0;
        width: 101%;
        top: -0.1em;
        content: '';
        z-index: -1;
        left: -0.15em;
        height: 108%;
        position: absolute;
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
  name: 'Button',
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

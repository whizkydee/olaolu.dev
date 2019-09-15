<template>
  <StyledFooter :data-section="name" tabindex="-1" v-if="isFooter">
    <slot />
  </StyledFooter>

  <StyledSection :data-section="name" tabindex="-1" v-else>
    <slot />
  </StyledSection>
</template>

<script>
import { media, breakpoints } from '../helpers'
import { NAVIGATION_BULLET } from '../constants'
import styled, { css } from 'vue-styled-components'

function createStyledSection(tagName = 'section', props = {}) {
  const styles = css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    &:focus {
      outline: none;
    }

    ${media.maxWidth('medium')`
      &:not([data-section='une']):not([data-section='footer']) {
        min-height: 100vh;
        margin-bottom: 10rem;
      }
    `}

    ${media.minWidth('medium', 1)`
      &:not([data-section='une']) {
        height: 100vh;
      }

      &[aria-hidden='true'] {
        /* prevents hidden sections from being highlighted */
        user-select: none;

        &:not(.scrolled) {
          .cavalier {
            p, h1 { opacity: 0; }

            p {
              transform: translate3d(0, 20px, 0);

              &:nth-of-type(3) {
                transform: translate3d(0, 15px, 0);
              }
            }

            h1 {
              transform: translate3d(0, 50px, 0);
            }
          }
        }

        /*
          Prevent focusable elements in hidden sections
          from receiving focus via tabbing from an active section.
        */
        [tabindex],
        input:not([disabled]),
        select:not([disabled]),
        button:not([disabled]),
        textarea:not([disabled]),
        ${`a[href]:not(.${NAVIGATION_BULLET})`} {
          &:not([tabindex='-1']) {
            visibility: hidden;
            transition: visibility 400ms;
          }
        }
      }
    `}

    @media (min-width: ${breakpoints.medium}px) and (max-width: 768px) {
      &:not([data-section='une']) {
        height: 70vh;
      }
    }

    &[aria-hidden='false'] {
      z-index: 3;
      user-select: auto;
      scroll-snap-align: start;

      .cavalier {
        p, h1 { opacity: 1; transform: translate3d(0, 0, 0); }
      }
    }

    [class$='__content'] {
      width: 100%;
      display: flex;

      ${media.minWidth('xLarge', 1)`
        padding: 0 8em;
      `}

      ${media.maxWidth('medium')`
        padding: 0 5em;
      `}

      ${media.between(['medium', 1], ['xLarge'])`
        padding: 0 10em;
        max-width: 1500px;
      `}
    }
  `

  return {
    name: 'StyledSection',
    ...styled(tagName, props)`
      ${styles}
    `,
  }
}

const StyledSection = createStyledSection()
const StyledFooter = createStyledSection('footer')

export default {
  name: 'Section',
  components: {
    StyledSection,
    StyledFooter,
  },

  props: {
    name: { type: String, required: true },
    isFooter: { default: false, type: Boolean },
  },
}
</script>

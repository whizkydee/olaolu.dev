<template>
  <StyledFooter :data-section="name" tabindex="-1" v-if="isFooter">
    <slot />
  </StyledFooter>

  <StyledSection :data-section="name" tabindex="-1" v-else>
    <slot />
  </StyledSection>
</template>

<script>
import { media } from '../helpers'
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

    &:not([data-section='une']):not([data-section='footer']) {
      ${media.maxWidth('portrait')`
        margin-bottom: 10rem;
      `}

      ${media.maxWidth('medium')`
        min-height: 60vh;
      `}

      ${media.minWidth('>medium')`
        min-height: 100vh;
      `}
    }

    ${media.minWidth('>medium')`
      &:not([data-section='une']) {
        height: 100vh;
      }

      &[aria-hidden='true'] {
        /* prevent hidden sections from being highlighted */
        overflow: hidden;
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

    &[aria-hidden='false'] {
      z-index: 3;
      user-select: auto;

      ${media.minWidth('>mediium')`
        scroll-snap-align: start;
      `}

      .cavalier {
        p, h1 { opacity: 1; transform: translate3d(0, 0, 0); }
      }
    }

    [class$='__content'] {
      width: 100%;
      display: flex;

      ${media.maxWidth('portrait')`
        padding: 0 15vw;
      `}

      ${media.between('>portrait', 'medium')`
        padding: 0 7em;
      `}

      ${media.minWidth('>medium')`
        padding: 0 10em;
      `}

      ${media.between('>medium', 'xLarge')`
        max-width: 1500px;
      `}

      ${media.minWidth('>xLarge')`
        max-width: 1800px;
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

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

    &:not([data-section='footer']) {
      ${media.maxWidth('portrait')`
        margin-bottom: 10rem;
      `}
    }

    &:not([data-section='une']):not([data-section='footer']) {
      ${media.between('>portrait', 'medium')`
        &:not([data-section='trois']) {
          padding-top: 15vh;
          padding-bottom: 15vh;
        }

        &[data-section='quatre'] {
          padding-bottom: 0;
        }
      `}

      @media (max-height: 1199px) {
        ${media.minWidth('>medium')`
          min-height: 100vh;
        `}
      }
    }

    ${media.minWidth('>medium')`
      @media (max-height: 1199px) {
        &:not([data-section='une']) { height: 100vh; }

        &[data-section="cinq"]:after {
          content: '';
          bottom: 0;
          width: 100%;
          height: 50px;
          position: absolute;
          background: ${props => props.theme.colors.default};
        }
      }

      &[aria-hidden='true'] {
        /* prevent hidden sections from being highlighted */
        overflow: hidden;
        user-select: none;
      }
    `}

    @media (min-height: 1200px) {
      &:not([data-section='une']) {
        padding-top: 10rem;
        padding-bottom: 10rem;
      }
    }

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

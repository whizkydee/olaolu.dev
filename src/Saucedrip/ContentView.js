import Vue from 'vue'
import { media, breakpoints } from '@/helpers'
import styled from 'vue-styled-components'
import { TABBING_CLASSNAME, NAVIGATION_BULLET } from '@/constants'

const ContentView = Vue.component('ContentView', {
  created() {
    document.addEventListener('mousedown', this.notTabbing)
    document.addEventListener('keydown', this.prollyTabbing)
    document.documentElement.id = typeof this.id === 'string' && this.id
  },

  destroyed() {
    document.removeEventListener('mousedown', this.notTabbing)
    document.removeEventListener('keydown', this.prollyTabbing)
  },

  methods: {
    prollyTabbing(event) {
      if (event.key === 'Tab')
        document.documentElement.classList.add(TABBING_CLASSNAME)
    },

    notTabbing() {
      document.documentElement.classList.remove(TABBING_CLASSNAME)
    },
  },

  render() {
    return (
      <StyledContentView role="main" id="main" tabindex="-1">
        {this.$slots.default}
      </StyledContentView>
    )
  },

  props: {
    id: { type: String, required: true },
  },
})

const StyledContentView = styled.main`
  outline: none;
  -webkit-overflow-scrolling: touch;

  ${media.minWidth('medium', +1)`
    touch-action: none;
    scroll-snap-type: y mandatory;
  `}

  > section {
    display: flex;
    outline: none;
    position: relative;
    align-items: center;
    justify-content: center;

    ${media.maxWidth('medium')`
      &:not(#une) {
        min-height: 100vh;
        margin-bottom: 10rem;
      }
    `}

    ${media.minWidth('medium', +1)`
      &:not(#une) {
        height: 100vh;
      }

      &[aria-hidden='true'] {
        /* prevents hidden sections from being highlighted */
        user-select: none;

        &:not(.scrolled) {
          .cavalier {
            p,
            h1 {
              opacity: 0;
            }

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
        iframe,
        [tabindex],
        area[href],
        input:not([disabled]),
        select:not([disabled]),
        button:not([disabled]),
        textarea:not([disabled]),
        [contentEditable='true'],
        ${`a[href]:not(.${NAVIGATION_BULLET})`} {
          &:not([tabindex='-1']) {
            visibility: hidden;
            transition: visibility 400ms;
          }
        }
      }
    `}

    @media (min-width: ${breakpoints.medium}px) and (max-width: 768px) {
      &:not(#une) {
        height: 70vh;
      }
    }

    &[aria-hidden='false'] {
      z-index: 3;
      user-select: auto;
      scroll-snap-align: start;

      .cavalier {
        p,
        h1 {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    }
  }
`

StyledContentView.name = 'StyledContentView'
export default ContentView

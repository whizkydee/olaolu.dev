import Vue from 'vue'
import styled from 'vue-styled-components'
import { TABBING_CLASSNAME, NAVIGATION_ITEM } from '@/constants'

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

  > section {
    display: flex;
    outline: none;
    position: relative;
    align-items: center;
    justify-content: center;

    &:not(#une) {
      height: 100vh;
    }

    /*
      Do not allow hidden sections to receive
      focus via tabbing from an active section.
    */
    &[aria-hidden='true'] {
      iframe,
      [tabindex],
      area[href],
      input:not([disabled]),
      select:not([disabled]),
      button:not([disabled]),
      textarea:not([disabled]),
      [contentEditable='true'],
      ${`a[href]:not(.${NAVIGATION_ITEM})`} {
        &:not([tabindex='-1']) {
          visibility: hidden;
        }
      }
    }
  }
`
StyledContentView.name = 'StyledContentView'

export default ContentView

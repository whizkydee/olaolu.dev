import Vue from 'vue'
import { mapState } from 'vuex'
import { goToSection } from '@/helpers'
import StyledNavigation from './styles'
import { NAVIGATION_BULLET, CURRENT_SECTION, SECTION_MAP } from '@/constants'

export default Vue.component('Navigation', {
  render() {
    return (
      <StyledNavigation aria-label="Main navigation.">
        <ul ref="list">
          <Bullet name="une" ordinal="first" />
          <Bullet name="deux" ordinal="second" />
          <Bullet name="trois" ordinal="third" />
          <Bullet name="quatre" ordinal="fourth" />
          <Bullet name="cinq" ordinal="fifth" />
        </ul>
      </StyledNavigation>
    )
  },
})

const Bullet = Vue.component('Bullet', {
  computed: mapState([CURRENT_SECTION]),
  methods: {
    handleClick() {
      const sectionSelector = `[data-section='${this.name}']`

      goToSection(this.$store, {
        node: this.$root.$el.querySelector(sectionSelector),
      })
    },
  },

  render() {
    const { name, ordinal } = this
    return (
      <li>
        <button
          type="button"
          onClick={this.handleClick}
          class={
            NAVIGATION_BULLET +
            (this.currentSection == this.name ? ' current' : '')
          }
          aria-label={`Go to ${ordinal} section. ${SECTION_MAP[name]}.`}
        />
      </li>
    )
  },

  props: {
    name: { type: String, required: true },
    ordinal: { type: String, required: true },
  },
})

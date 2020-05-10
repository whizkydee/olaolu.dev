import Vue from 'vue'
import { mapState } from 'vuex'
import { goToSection } from '@/helpers'
import StyledNavigation from './styles'
import { NAVIGATION_BULLET, CURRENT_SECTION, SECTION_MAP } from '@/constants'

export default Vue.component('Navigation', {
  render() {
    return (
      <StyledNavigation role="navigation" aria-label="Main navigation.">
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
    handleClick(event) {
      const sectionName = event.target.getAttribute('href').slice(1)
      const sectionSelector = `[data-section='${sectionName}']`

      goToSection(this.$store, {
        node: this.$root.$el.querySelector(sectionSelector),
      })
    },
  },

  render() {
    const { name, ordinal } = this
    return (
      <NavItem
        href={'#' + name}
        className={NAVIGATION_BULLET}
        clickFn={this.handleClick}
        ariaCurrent={this.currentSection === name ? 'page' : null}
        ariaLabel={`Go to ${ordinal} section. ${SECTION_MAP[name]}.`}
      />
    )
  },

  props: {
    name: { type: String, required: true },
    ordinal: { type: String, required: true },
  },
})

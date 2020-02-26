import Vue from 'vue'
import { mapState } from 'vuex'
import { goToSection } from '@/helpers'
import StyledNavigation from './styles'
import { NAVIGATION_BULLET, CURRENT_SECTION } from '@/constants'

const Navigation = Vue.component('Navigation', {
  computed: mapState([CURRENT_SECTION]),
  methods: {
    jumpToSection(event) {
      const sectionId = event.target.getAttribute('href').slice(1)
      const sectionSelector = `[data-section='${sectionId}']`

      goToSection({
        node: this.$root.$el.querySelector(sectionSelector),
      })
    },

    isCurrent(sectionId) {
      return this.currentSection === sectionId && 'page'
    },
  },

  render() {
    return (
      <StyledNavigation role="navigation" aria-label="Main navigation.">
        <ul ref="list">
          <NavItem
            href="#une"
            clickFn={this.jumpToSection}
            className={NAVIGATION_BULLET}
            ariaCurrent={this.isCurrent('une')}
            ariaLabel="Go to first section. Pitch."
          />

          <NavItem
            href="#deux"
            clickFn={this.jumpToSection}
            className={NAVIGATION_BULLET}
            ariaCurrent={this.isCurrent('deux')}
            ariaLabel="Go to second section. Cornerstone."
          />

          <NavItem
            href="#trois"
            clickFn={this.jumpToSection}
            className={NAVIGATION_BULLET}
            ariaCurrent={this.isCurrent('trois')}
            ariaLabel="Go to third section. Experience."
          />

          <NavItem
            href="#quatre"
            clickFn={this.jumpToSection}
            className={NAVIGATION_BULLET}
            ariaCurrent={this.isCurrent('quatre')}
            ariaLabel="Go to fourth section. Carriageway."
          />

          <NavItem
            href="#cinq"
            clickFn={this.jumpToSection}
            className={NAVIGATION_BULLET}
            ariaCurrent={this.isCurrent('cinq')}
            ariaLabel="Go to fifth section. Contact."
          />
        </ul>
      </StyledNavigation>
    )
  },
})

export default Navigation

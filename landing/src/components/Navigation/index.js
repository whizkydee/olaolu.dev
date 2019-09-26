import Vue from 'vue'
import StyledNavigation from './styles'
import { goToSection } from '@/helpers'
import { NAVIGATION_BULLET, CURRENT_SECTION } from '@/constants'

const Navigation = Vue.component('Navigation', {
  methods: {
    jumpToSection(event) {
      if (!event || (event && !event.target)) return

      const targetSection = this.$root.$el.querySelector(
        `[data-section='${event.target.getAttribute('href').slice(1)}']`
      )

      goToSection({ node: targetSection })
    },

    isCurrent(sectionId) {
      return this.$store.state[CURRENT_SECTION] === sectionId && 'page'
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

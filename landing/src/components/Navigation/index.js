import Vue from 'vue'
import StyledNavigation from './styles'
import { goToSection } from '@/helpers'
import { NAVIGATION_BULLET, CURRENT_SECTION_KEY } from '@/constants'

const Navigation = Vue.component('Navigation', {
  methods: {
    jumpToSection: event => {
      let id = event.target.getAttribute('href').slice(1)
      goToSection([document.querySelector(`[data-section='${id}']`)])
    },

    isActiveWhen(sectionId) {
      return this.$store.state[CURRENT_SECTION_KEY] === sectionId && 'page'
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
            ariaLabel="Go to section 1, Pitch."
            ariaCurrent={this.isActiveWhen('une')}
          />

          <NavItem
            href="#deux"
            clickFn={this.jumpToSection}
            className={NAVIGATION_BULLET}
            ariaCurrent={this.isActiveWhen('deux')}
            ariaLabel="Go to section 2, Cornerstone."
          />

          <NavItem
            href="#trois"
            clickFn={this.jumpToSection}
            className={NAVIGATION_BULLET}
            ariaLabel="Go to section 3, Experience."
            ariaCurrent={this.isActiveWhen('trois')}
          />

          <NavItem
            href="#quatre"
            clickFn={this.jumpToSection}
            className={NAVIGATION_BULLET}
            ariaLabel="Go to section 4, Carriageway."
            ariaCurrent={this.isActiveWhen('quatre')}
          />

          <NavItem
            href="#cinq"
            clickFn={this.jumpToSection}
            className={NAVIGATION_BULLET}
            ariaLabel="Go to section 5, Contact."
            ariaCurrent={this.isActiveWhen('cinq')}
          />
        </ul>
      </StyledNavigation>
    )
  },
})

export default Navigation

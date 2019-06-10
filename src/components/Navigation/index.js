import Vue from 'vue'
import StyledNavigation from './styles'
import { goToSection } from '@/helpers'
import { NAVIGATION_BULLET } from '@/constants'

const Navigation = Vue.component('Navigation', {
  methods: {
    goToSection: event =>
      goToSection(document.querySelector(event.target.getAttribute('href'))),

    isActiveWhen(sectionId) {
      return this.$store.state.currentSection === sectionId && 'page'
    },
  },

  render() {
    return (
      <StyledNavigation role="navigation" aria-label="Main navigation">
        <ul ref="list">
          <Link
            href="#une"
            className={NAVIGATION_BULLET}
            clickFn={this.goToSection}
            ariaLabel="Go to section 1, Pitch."
            ariaCurrent={this.isActiveWhen('une')}
          />

          <Link
            href="#deux"
            className={NAVIGATION_BULLET}
            clickFn={this.goToSection}
            ariaCurrent={this.isActiveWhen('deux')}
            ariaLabel="Go to section 2, Cornerstone."
          />

          <Link
            href="#trois"
            className={NAVIGATION_BULLET}
            clickFn={this.goToSection}
            ariaLabel="Go to section 3, Experience."
            ariaCurrent={this.isActiveWhen('trois')}
          />

          <Link
            href="#quatre"
            className={NAVIGATION_BULLET}
            clickFn={this.goToSection}
            ariaLabel="Go to section 4, Carriageway."
            ariaCurrent={this.isActiveWhen('quatre')}
          />

          <Link
            href="#cinq"
            className={NAVIGATION_BULLET}
            clickFn={this.goToSection}
            ariaLabel="Go to section 5, Contact."
            ariaCurrent={this.isActiveWhen('cinq')}
          />
        </ul>
      </StyledNavigation>
    )
  },
})

const Link = Vue.component('Link', {
  render() {
    const { href, external, ariaLabel, ariaCurrent, clickFn } = this

    return (
      <li>
        <a
          href={href}
          aria-label={ariaLabel}
          class={this.className}
          aria-current={ariaCurrent}
          onClick={e => {
            this.href.charAt(0) === '#' && e.preventDefault()
            typeof clickFn === 'function' && clickFn.call(this, e)
          }}
          target={external && '_blank'}
          rel={external && 'noreferrer noopener'}
        >
          {this.$slots.default}
        </a>
      </li>
    )
  },

  props: {
    href: String,
    clickFn: Function,
    ariaLabel: String,
    className: String,
    ariaCurrent: [String, Boolean],
    external: { type: Boolean, default: false },
  },
})

export { Navigation, Link }

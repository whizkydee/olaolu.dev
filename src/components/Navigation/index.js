import Vue from 'vue'
import StyledNavigation from './styles'
import { goToSection } from '@/helpers'

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
            clickFn={this.goToSection}
            ariaLabel="Go to section 1, Pitch."
            ariaCurrent={this.isActiveWhen('une')}
          />
          <Link
            href="#deux"
            clickFn={this.goToSection}
            ariaLabel="Go to section 2, Focus."
            ariaCurrent={this.isActiveWhen('deux')}
          />
          <Link
            href="#trois"
            clickFn={this.goToSection}
            ariaLabel="Go to section 3, Experience."
            ariaCurrent={this.isActiveWhen('trois')}
          />
          <Link
            href="#quatre"
            clickFn={this.goToSection}
            ariaLabel="Go to section 4."
            ariaCurrent={this.isActiveWhen('quatre')}
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
    ariaCurrent: [String, Boolean],
    external: { type: Boolean, default: false },
  },
})

export { Navigation, Link }

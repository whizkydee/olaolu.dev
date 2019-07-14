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
          <Link
            href="#une"
            clickFn={this.jumpToSection}
            className={NAVIGATION_BULLET}
            ariaLabel="Go to section 1, Pitch."
            ariaCurrent={this.isActiveWhen('une')}
          />

          <Link
            href="#deux"
            clickFn={this.jumpToSection}
            className={NAVIGATION_BULLET}
            ariaCurrent={this.isActiveWhen('deux')}
            ariaLabel="Go to section 2, Cornerstone."
          />

          <Link
            href="#trois"
            clickFn={this.jumpToSection}
            className={NAVIGATION_BULLET}
            ariaLabel="Go to section 3, Experience."
            ariaCurrent={this.isActiveWhen('trois')}
          />

          <Link
            href="#quatre"
            clickFn={this.jumpToSection}
            className={NAVIGATION_BULLET}
            ariaLabel="Go to section 4, Carriageway."
            ariaCurrent={this.isActiveWhen('quatre')}
          />

          <Link
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
          target={external && '_blank'}
          rel={external && 'noreferrer noopener'}
          onClick={e => {
            this.href.charAt(0) === '#' && e.preventDefault()
            typeof clickFn === 'function' && clickFn.call(this, e)
          }}
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

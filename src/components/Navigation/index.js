import Vue from 'vue'
import StyledNavigation from './styles'
import { goToSection } from '@/helpers'

const Navigation = Vue.component('Navigation', {
  methods: {
    goToSection: event =>
      goToSection(document.querySelector(event.target.getAttribute('href'))),
  },

  render() {
    const { currentSection } = this.$store.state

    return (
      <StyledNavigation role="navigation" aria-label="Main navigation">
        <ul ref="list">
          <Link
            href="#une"
            clickFn={this.goToSection}
            class={currentSection === 'une' && 'current'}
          >
            1
          </Link>
          <Link
            href="#deux"
            clickFn={this.goToSection}
            class={currentSection === 'deux' && 'current'}
          >
            2
          </Link>
          <Link
            href="#trois"
            clickFn={this.goToSection}
            class={currentSection === 'trois' && 'current'}
          >
            3
          </Link>
          <Link
            href="#quatre"
            clickFn={this.goToSection}
            class={currentSection === 'quatre' && 'current'}
          >
            4
          </Link>
        </ul>
      </StyledNavigation>
    )
  },
})

const Link = Vue.component('Link', {
  render() {
    const { href, external, clickFn } = this

    return (
      <li>
        <a
          href={href}
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
    external: { type: Boolean, default: false },
  },
})

export { Navigation, Link }

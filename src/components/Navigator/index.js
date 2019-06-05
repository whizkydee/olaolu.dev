import Vue from 'vue'
import StyledNavigator from './styles'

const Navigator = Vue.component('Navigator', {
  render() {
    return (
      <StyledNavigator id="section__nav">
        <ul>
          <Link href="#une" class="current">
            1
          </Link>
          <Link href="#deux">2</Link>
          <Link href="#trois">3</Link>
          <Link href="#quatre">4</Link>
        </ul>
      </StyledNavigator>
    )
  },
})

const Link = Vue.component('Link', {
  render() {
    const { href, external } = this

    return (
      <li>
        <a
          href={href}
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
    external: { type: Boolean, default: false },
  },
})

export { Navigator, Link }

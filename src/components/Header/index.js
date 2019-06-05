import Vue from 'vue'
import StyledHeader from './styles'
import { SauceDripLogo } from '@/assets'

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

const Header = Vue.component('Header', {
  data: () => ({
    menuOpen: false,
  }),

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },

  render() {
    const getLabel = () => (this.menuOpen ? 'Close' : 'Open') + ' contact menu'

    return (
      <StyledHeader role="banner" class="pente">
        <router-link to="/" id="logo" aria-label="Logo, go to homepage">
          <SauceDripLogo />
        </router-link>

        <button
          type="button"
          aria-haspopup="menu"
          aria-label={getLabel()}
          onClick={this.toggleMenu}
          class={'menu__toggle' + (this.menuOpen ? ' x' : '')}
        />

        <nav
          id="social__nav"
          role="navigation"
          aria-label="Contact links"
          aria-expanded={'' + this.menuOpen}
        >
          <span class="title">Say Hello</span>

          <ul class="basic__contacts">
            <Link href="mailto:hello@olaolu.me">hello@olaolu.me</Link>
            <Link href="tel:+234808XXXXXXX">+234 808 XXX XXXX</Link>
          </ul>

          <ul class="social__contacts">
            <Link external href="https://facebook.com/mrolaolu">
              FB
            </Link>
            <Link external href="https://twitter.com/mrolaolu">
              TW
            </Link>
            <Link external href="https://linkedin.com/in/olaolu-olawuyi">
              LN
            </Link>
            <Link external href="https://github.com/whizkydee">
              GH
            </Link>
          </ul>
        </nav>
      </StyledHeader>
    )
  },
})

export default Header

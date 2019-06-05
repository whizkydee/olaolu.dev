import Vue from 'vue'
import { Link } from '@/components'
import StyledHeader from './styles'
import { SauceDripLogo } from '@/assets'

const Header = Vue.component('Header', {
  data: () => ({
    menuOpen: false,
  }),

  mounted() {
    document.addEventListener('mouseup', this.maybeCloseMenu)
  },

  destroyed() {
    document.removeEventListener('mouseup', this.maybeCloseMenu)
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },

    maybeCloseMenu(event) {
      if (this.menuOpen) {
        if (event.target.closest('.menu__toggle, #contact__menu')) return

        this.menuOpen = false
      }
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
          id="contact__menu"
          role="navigation"
          aria-label="Contact links"
          aria-expanded={'' + this.menuOpen}
        >
          <span class="title">Say Hello</span>

          <ul class="basic__contact">
            <Link href="mailto:hello@olaolu.me">hello@olaolu.me</Link>
            <Link href="tel:+234808XXXXXXX">+234 808 XXX XXXX</Link>
          </ul>

          <ul class="social__contact">
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

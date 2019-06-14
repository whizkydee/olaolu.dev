import Vue from 'vue'
import { mapState } from 'vuex'
import { Link } from '@/components'
import StyledHeader from './styles'
import { SauceDripLogo } from '@/assets'
import { HEADER_COMPACT, SOCIAL_PROFILES } from '@/constants'

const Header = Vue.component('Header', {
  data: () => ({
    menuOpen: false,
  }),

  computed: mapState([HEADER_COMPACT]),

  mounted() {
    this.maybeTransform()
    window.addEventListener('resize', this.maybeTransform)
    window.addEventListener('scroll', this.maybeTransform)
    document.addEventListener('mouseup', this.maybeCloseMenu)
  },

  destroyed() {
    window.removeEventListener('resize', this.maybeTransform)
    window.removeEventListener('scroll', this.maybeTransform)
    document.removeEventListener('mouseup', this.maybeCloseMenu)
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
      if (!this.menuOpen) document.getElementById('main').focus()
    },

    closeMenu() {
      this.menuOpen = false
    },

    maybeTransform() {
      this.$store.commit(
        'headerCompact',
        window.pageYOffset > this.$el.clientHeight
      )
    },

    maybeCloseMenu(event) {
      if (this.menuOpen) {
        if (event.target.closest('.menu__toggle, #contact__menu')) return

        this.closeMenu()
      }
    },
  },

  render() {
    const { twitter, instagram, linkedIn, github } = SOCIAL_PROFILES
    const getLabel = () => (this.menuOpen ? 'Close' : 'Open') + ' contact menu'

    return (
      <StyledHeader role="banner" data-compact={'' + this[HEADER_COMPACT]}>
        <router-link to="/" id="logo" aria-label="Logo, go to homepage.">
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
          aria-label="Contact menu"
          aria-expanded={'' + this.menuOpen}
        >
          <span class="title">Say Hello</span>

          <ul class="basic__contact">
            <Link href="mailto:hello@olaolu.me">hello@olaolu.me</Link>
            <Link href="tel:+234808XXXXXXX">+234 808 XXX XXXX</Link>
          </ul>

          <ul class="social__contact">
            <Link external href={twitter} ariaLabel="Olaolu on Twitter">
              TW
            </Link>
            <Link external href={github} ariaLabel="Olaolu on GitHub">
              GH
            </Link>
            <Link external href={linkedIn} ariaLabel="Olaolu on LinkedIn">
              LN
            </Link>
            <Link external href={instagram} ariaLabel="Olaolu on Instagram">
              IG
            </Link>
          </ul>
        </nav>
      </StyledHeader>
    )
  },
})

export default Header

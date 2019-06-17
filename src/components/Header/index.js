import Vue from 'vue'
import { mapState } from 'vuex'
import StyledHeader from './styles'
import { SauceDripLogo } from '@/assets'
import { HEADER_COMPACT } from '@/constants'
import { ContactPortal } from '@/components'

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
          <ContactPortal.Basic />
          <ContactPortal.Social />
        </nav>
      </StyledHeader>
    )
  },
})

export default Header

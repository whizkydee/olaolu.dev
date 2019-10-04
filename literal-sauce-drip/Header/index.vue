<template>
  <StyledHeader
    role="banner"
    :data-compact="compact + ''"
    :noMenuShadow="noMenuShadow"
    :blue="isMediumScreen && menuOpen"
    :data-blue="isMediumScreen && menuOpen"
  >
    <a
      id="logo"
      :href="isHome ? landingURL : shelfURL"
      :aria-label="`Logo, go to ${!isHome ? 'shelf' : 'homepage'}.`"
    >
      <SauceDripLogo />
    </a>

    <button
      type="button"
      @click="toggleMenu"
      aria-haspopup="menu"
      :aria-label="getLabel()"
      :class="'menu__toggle' + (menuOpen ? ' x' : '')"
    />

    <nav
      ref="contactMenu"
      id="contact__menu"
      aria-label="Contact menu"
      :aria-expanded="menuOpen + ''"
      :aria-hidden="isMediumScreen && !menuOpen"
    >
      <CrossSiteNav />
      <ContactPortal.Basic />
      <ContactPortal.Social />
    </nav>
  </StyledHeader>
</template>

<script>
import StyledHeader from './styles'
import { wait } from '@mrolaolu/helpers'
import CrossSiteNav from '../CrossSiteNav'
import ContactPortal from '../ContactPortal'
import SauceDripLogo from '../sauce-drip-logo'

export default {
  data: () => ({ menuOpen: false }),

  mounted() {
    if (this.isHome) {
      this.maybeTransform()
      window.addEventListener('resize', this.maybeTransform)
      window.addEventListener('scroll', this.maybeTransform)
    }
    document.addEventListener('keydown', this.maybeCloseMenu)
    document.addEventListener('mouseup', this.maybeCloseMenu)
  },

  destroyed() {
    window.removeEventListener('resize', this.maybeTransform)
    window.removeEventListener('scroll', this.maybeTransform)
    document.removeEventListener('keydown', this.maybeCloseMenu)
    document.removeEventListener('mouseup', this.maybeCloseMenu)
  },

  methods: {
    getLabel() {
      return (this.menuOpen ? 'Close' : 'Open') + ' contact menu'
    },

    closeMenu() {
      this.menuOpen = false
    },

    toggleMenu() {
      this.menuOpen = !this.menuOpen
      this.$refs.contactMenu.classList.remove('shadow')

      if (this.menuOpen && this.isMediumScreen) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (this.menuOpen && !this.noMenuShadow && !this.isMediumScreen) {
        wait(150, () => this.$refs.contactMenu.classList.add('shadow'))
      }

      if (this.isHome && !this.menuOpen) {
        let container =
          this.currentSection === 'footer'
            ? this.$root.$el.querySelector('[data-section="footer]')
            : document.getElementById('main')
        container && container.focus()
      }
    },

    maybeTransform() {
      if (!this.isHome || typeof this.store !== 'object') return

      this.store.commit(
        'headerCompact',
        window.pageYOffset > this.$el.clientHeight
      )
    },

    maybeCloseMenu(event) {
      if (this.menuOpen) {
        switch (event.type) {
          case 'keydown':
            ;['Escape', 'Esc'].indexOf(event.key) !== -1 && this.closeMenu()
            break
          case 'mouseup':
            if (event.target.closest('.menu__toggle, #contact__menu')) return
            this.closeMenu()
            break
        }
      }
    },
  },

  props: {
    store: Object,
    compact: { type: Boolean, default: false },
    currentSection: { type: String, default: '' },
    noMenuShadow: { type: Boolean, default: false },
  },

  components: {
    CrossSiteNav,
    StyledHeader,
    SauceDripLogo,
    'ContactPortal.Basic': ContactPortal.Basic,
    'ContactPortal.Social': ContactPortal.Social,
  },
}
</script>

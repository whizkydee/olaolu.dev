<template>
  <StyledHeader
    role="banner"
    :data-compact="compact + ''"
    :noMenuShadow="noMenuShadow"
    :blue="isMediumScreen && menuOpen"
    :data-blue="isMediumScreen && menuOpen"
  >
    <a href="/" id="logo" aria-label="Logo, go to homepage.">
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
      id="contact__menu"
      aria-label="Contact menu"
      :aria-expanded="menuOpen + ''"
    >
      <ul id="cross__site__nav">
        <NavItem :href="workURL">Work</NavItem>
        <NavItem :href="shelfURL">My Shelf</NavItem>
        <NavItem href="/resume.pdf">My Rèsumè</NavItem>
      </ul>
      <ContactPortal.Basic />
      <ContactPortal.Social />
    </nav>
  </StyledHeader>
</template>

<script>
import NavItem from '../NavItem'
import StyledHeader from './styles'
import ContactPortal from '../ContactPortal'
import SauceDripLogo from '../sauce-drip-logo'

export default {
  name: 'Header',
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
    isHome: { type: Boolean, default: false },
    compact: { type: Boolean, default: false },
    noMenuShadow: { type: Boolean, default: false },
    currentSection: { type: String, required: true },
  },

  components: {
    NavItem,
    StyledHeader,
    SauceDripLogo,
    'ContactPortal.Basic': ContactPortal.Basic,
    'ContactPortal.Social': ContactPortal.Social,
  },
}
</script>

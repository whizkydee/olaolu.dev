<template>
  <StyledHeader
    id="site-header"
    :env="isHome ? 'home' : 'shelf'"
    :noMenuShadow="noMenuShadow"
    :data-compact="String(compact)"
    :blue="isMediumScreen && menuOpen"
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
      :aria-label="getLabel()"
      ref="menuToggler"
      aria-controls="contact-menu"
      :aria-expanded="String(menuOpen)"
      @click="toggleMenu"
      :class="['menu-toggle', { x: menuOpen }]"
    />

    <nav
      ref="contactMenu"
      id="contact-menu"
      aria-label="Contact menu"
      :class="{ open: menuOpen }"
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
import CrossSiteNav from '../CrossSiteNav'
import ContactPortal from '../ContactPortal'
import { wait, getFirstFocusableNode } from '@mrolaolu/helpers'

export default {
  data: () => ({ menuOpen: false }),

  mounted() {
    if (this.isHome) {
      this.maybeTransform()
      window.addEventListener('resize', this.maybeTransform)
      window.addEventListener('scroll', this.maybeTransform)
    }
    document.addEventListener('keyup', this.maybeCloseMenu)
    document.addEventListener('mouseup', this.maybeCloseMenu)
  },

  beforeDestroy() {
    document.body.classList.remove('no-scroll')
    window.removeEventListener('resize', this.maybeTransform)
    window.removeEventListener('scroll', this.maybeTransform)
    document.removeEventListener('keyup', this.maybeCloseMenu)
    document.removeEventListener('mouseup', this.maybeCloseMenu)
  },

  methods: {
    getLabel() {
      return (this.menuOpen ? 'Close' : 'Open') + ' contact menu'
    },

    closeMenu() {
      this.menuOpen = false

      if (this.isHome && this.getSection()) {
        const firstFocusableNode = getFirstFocusableNode(this.getSection())
        firstFocusableNode && firstFocusableNode.focus()
      }
    },

    toggleMenu() {
      const { currentSection, mainElem } = this
      const shouldAddShadow = !this.noMenuShadow && !this.isMediumScreen

      this.menuOpen = !this.menuOpen
      this.$refs.contactMenu.classList.remove('shadow')

      if (this.menuOpen && this.isMediumScreen) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      if (this.menuOpen && shouldAddShadow) {
        wait(150, () => {
          // wait till the contact menu reveal animation is
          // completed before adding the shadow
          this.$refs.contactMenu.classList.add('shadow')
        })
      }

      if (this.isHome && !this.menuOpen) {
        const footer = this.$root.$el.querySelector('[data-section="footer]')
        const container = currentSection === 'footer' ? footer : mainElem

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
      if (!this.menuOpen) return

      const isForeignNode =
        event.target !== this.$refs.menuToggler &&
        !this.$refs.contactMenu.contains(event.target)

      switch (event.type) {
        case 'keyup':
          if (
            ['Escape', 'Esc'].indexOf(event.key) !== -1 ||
            // Close the contact menu once the user tabs away from it
            (event.key == 'Tab' && isForeignNode)
          ) {
            this.closeMenu()
          }
          break
        case 'mouseup':
          if (event.target.closest('.menu-toggle, #contact-menu')) return
          this.closeMenu()
          break
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
    'ContactPortal.Basic': ContactPortal.Basic,
    'ContactPortal.Social': ContactPortal.Social,
  },
}
</script>

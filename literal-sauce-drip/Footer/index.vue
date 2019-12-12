<template>
  <StyledFooter
    isFooter
    name="footer"
    role="contentinfo"
    :shelfEnv="isShelfEnv"
    :aria-hidden="maybeHidden"
  >
    <div class="inner__content">
      <div class="footer__main">
        <ContactPortal.Basic />
        <CrossSiteNav />
      </div>

      <div class="footer__bottom">
        <span>&copy; Olaolu Olawuyi {{ new Date().getFullYear() }}</span>
        <ContactPortal.Social />
      </div>
    </div>
  </StyledFooter>
</template>

<script>
import StyledFooter from './styles'
import CrossSiteNav from '../CrossSiteNav'
import ContactPortal from '../ContactPortal'

export default {
  computed: {
    maybeHidden() {
      return this.isHome && (this.currentSection !== 'footer') + ''
    },
  },

  components: {
    CrossSiteNav,
    StyledFooter,
    'ContactPortal.Basic': ContactPortal.Basic,
    'ContactPortal.Social': ContactPortal.Social,
  },
  props: {
    currentSection: String,
  },
}
</script>

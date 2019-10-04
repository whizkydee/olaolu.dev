<template>
  <StyledFooter
    isFooter
    name="footer"
    :aria-hidden="isHome && (currentSection !== 'footer') + ''"
  >
    <div class="footer__content">
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

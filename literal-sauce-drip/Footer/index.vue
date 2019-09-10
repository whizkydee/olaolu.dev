<template>
  <StyledFooter
    isFooter
    name="footer"
    :aria-hidden="isHome && (currentSection !== 'footer') + ''"
  >
    <div class="footer__content">
      <div class="footer__main">
        <ContactPortal.Basic />

        <ul>
          <NavItem :href="workURL">My Work</NavItem>
          <NavItem :href="shelfURL">My Shelf</NavItem>
          <NavItem href="/resume.pdf">My Rèsumè</NavItem>
        </ul>
      </div>

      <div class="footer__bottom">
        <span>&copy; Olaolu Olawuyi {{ new Date().getFullYear() }}</span>
        <ContactPortal.Social />
      </div>
    </div>
  </StyledFooter>
</template>

<script>
import NavItem from '../NavItem'
import StyledFooter from './styles'
import ContactPortal from '../ContactPortal'

export default {
  name: 'Footer',
  components: {
    NavItem,
    StyledFooter,
    'ContactPortal.Basic': ContactPortal.Basic,
    'ContactPortal.Social': ContactPortal.Social,
  },
  props: {
    currentSection: String,
    isHome: { type: Boolean, default: false },
  },
}
</script>

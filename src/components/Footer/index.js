import Vue from 'vue'
import StyledFooter from './styles'
import { ContactPortal } from '@/components'
import { CURRENT_SECTION_KEY } from '@/constants'

const Footer = Vue.component('Footer', {
  render() {
    const isHome = this.$route.name === 'home'
    const currentSection = this.$store.state[CURRENT_SECTION_KEY]

    return (
      <StyledFooter
        isFooter
        id="footer"
        name="footer"
        role="contentinfo"
        aria-hidden={isHome && '' + (currentSection !== 'footer')}
      >
        <div class="footer__content">
          <div class="footer__main">
            <ContactPortal.Basic />

            <ul>
              <Link href="/work">My Work</Link>
              <Link href="/desk">My Desk</Link>
            </ul>
          </div>

          <div class="footer__bottom">
            <span>&copy; Olaolu Olawuyi {new Date().getFullYear()}</span>
            <ContactPortal.Social />
          </div>
        </div>
      </StyledFooter>
    )
  },
})

export default Footer

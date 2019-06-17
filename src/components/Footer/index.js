import Vue from 'vue'
import StyledFooter from './styles'
import { ContactPortal } from '@/components'
import { CURRENT_SECTION_KEY, SECTIONS } from '@/constants'

const Footer = Vue.component('Footer', {
  render() {
    const isntLastSection = (
      this.$store.state[CURRENT_SECTION_KEY] !== SECTIONS[SECTIONS.length - 1]
    ).toString()

    return (
      <StyledFooter aria-hidden={isntLastSection}>
        <div class="footer__content">
          <div class="footer__main">
            <ContactPortal.Basic />

            <ul>
              <Link href="/work">My Work</Link>
              <Link href="/cookbook">My Cookbook</Link>
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

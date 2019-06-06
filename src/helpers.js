import Storage from '@/Storage'
import { CURRENT_SECTION_KEY } from '@/constants'

const scrollToElem = targetElem => {
  if (!targetElem || !(targetElem instanceof HTMLElement)) return

  window.setTimeout(
    window.scrollTo(0, targetElem.offsetTop, { behaviour: 'smooth' }),
    100
  )
}

const goToSection = section => {
  if (section instanceof HTMLElement) {
    scrollToElem(section)
    Storage.set(CURRENT_SECTION_KEY, section.id)
  }
}

export { scrollToElem, goToSection }

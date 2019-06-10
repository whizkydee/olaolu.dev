import store from './store'
import { scrollToElem } from '@mrolaolu/helpers'

const goToSection = section => {
  if (!(section instanceof HTMLElement)) return

  scrollToElem(section)
  window.setTimeout(() => {
    store.commit('currentSection', section.id)
    document.getElementById('app').dataset.section = section.id
  }, 200)
}

const createMenuShadow = (color = 'rgba(72, 49, 212, .05)') =>
  `0 10px 53px 0 ${color}`

export { scrollToElem, goToSection, createMenuShadow }

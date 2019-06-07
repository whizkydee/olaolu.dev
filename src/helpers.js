import store from './store'

const scrollToElem = targetElem => {
  if (!targetElem || !(targetElem instanceof HTMLElement)) return

  window.setTimeout(
    window.scrollTo(0, targetElem.offsetTop, { behaviour: 'smooth' }),
    100
  )
}

const goToSection = section => {
  if (!(section instanceof HTMLElement)) return

  scrollToElem(section)
  window.setTimeout(() => {
    store.commit('currentSection', section.id)
    document.getElementById('app').dataset.section = section.id
  }, 250)
}

const createMenuShadow = (color = 'rgba(163, 204, 170, 0.3)') =>
  `0 10px 53px 0 ${color}`

export { scrollToElem, goToSection, createMenuShadow }

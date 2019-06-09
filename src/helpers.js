import store from './store'

const toPx = (n = 0) => n + 'px'

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
  }, 200)
}

const createMenuShadow = (color = 'rgba(72, 49, 212, .05)') =>
  `0 10px 53px 0 ${color}`

export { toPx, scrollToElem, goToSection, createMenuShadow }

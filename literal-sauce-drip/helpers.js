const { SHELF_PORT, LANDING_PORT } = require('../config')
import { SECTION_SELECTOR, CURRENT_SECTION } from './constants'
import { focusableSelectors, inBrowser } from '@mrolaolu/helpers'

export * from './media-helpers'

export function registerEnv(Vue, value) {
  Vue.prototype.__currentEnv = value
}

export function goToSection(store, opts) {
  let { node, modifier, smooth = true, focus = true } = opts

  if (!node) return
  const app = document.getElementById('app')
  const sections = Array.from(document.querySelectorAll(SECTION_SELECTOR))

  const getSectionId = () => node.dataset.section
  const curSectionIndex = sections.findIndex(({ dataset }) => {
    return dataset.section === getSectionId()
  })

  const findSection = (idx = 0) => sections[curSectionIndex + idx]
  // determine what section to go to based on the modifier.
  if (modifier == 'next') {
    node = findSection(1)
  } else if (modifier == 'previous') {
    node = findSection(-1)
  }

  if (!(node instanceof HTMLElement)) return

  setTimeout(() => {
    // Add a `scrolled` className so we know not to
    // animate all the items in the section again.
    node.classList.add('scrolled')
  }, 1000)

  if (smooth) smoothScrollToElem(node)
  else scrollTo(0, node.offsetTop)

  setTimeout(() => {
    store && store.commit(CURRENT_SECTION, getSectionId())
    app.dataset[CURRENT_SECTION] = getSectionId()

    if (focus) {
      // Make sure we bring focus to the current section
      // as early as possible.
      node.focus()
    }
  }, 200)
}

export function smoothScrollToElem(elem, speed = 1000) {
  if (!(elem instanceof HTMLElement)) return

  let currentTime = 0
  const scrollTargetY = elem.offsetTop
  const scrollY = pageYOffset || document.documentElement.scrollTop

  // min time .1, max time .8 seconds
  const time = Math.max(
    0.1,
    Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8)
  )

  // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
  const easeInOutCubic = pos => {
    if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 3)
    return 0.5 * (Math.pow(pos - 2, 3) + 2)
  }

  function tick() {
    currentTime += 1 / 60

    let p = currentTime / time
    let t = easeInOutCubic(p)

    if (p < 1) {
      requestAnimationFrame(tick)

      scrollTo(0, scrollY + (scrollTargetY - scrollY) * t)
    } else {
      scrollTo(0, scrollTargetY)
    }
  }

  tick()
}

export function createMenuShadow(color = 'rgba(72, 49, 212, .05)') {
  return `0 10px 53px 0 ${color}`
}

export const [getMainElem, getAnnouncer] = [
  () => document.getElementById('main'),
  () => document.getElementById('Announcer'),
]

export function getFocusableNodes(elem) {
  if (!(elem instanceof HTMLElement)) return []

  return Array.from(elem.querySelectorAll(focusableSelectors))
}

export function isDev() {
  return process.env.NODE_ENV === 'development'
}

const host = inBrowser() ? 'https://' + location.host : ''

export function getShelfURL() {
  return isDev() ? 'http://localhost:' + SHELF_PORT : host + '/shelf'
}

export function getLandingURL() {
  return isDev() ? 'http://localhost:' + LANDING_PORT : host
}

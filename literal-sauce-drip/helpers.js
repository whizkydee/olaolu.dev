export * from './media-helpers'
import { wait } from '@mrolaolu/helpers'
import { SECTION_SELECTOR, CURRENT_SECTION } from './constants'
const { SHELF_PORT, LANDING_PORT } = require('../ports')

export function goToSection(
  store,
  { node, modifier, smooth = true, focus = true }
) {
  if (!(node instanceof HTMLElement)) return

  const getSectionId = () => node.dataset.section
  const sections = Array.from(document.querySelectorAll(SECTION_SELECTOR))

  let curSectionIndex = sections.findIndex(
    ({ dataset }) => dataset.section === getSectionId()
  )

  const findSection = (idx = 0) => sections[curSectionIndex + idx]

  // determine what section to go to based on the modifier.
  node =
    modifier === 'next'
      ? findSection(1)
      : modifier === 'previous'
      ? findSection(-1)
      : node

  const app = document.getElementById('app')
  if (node) {
    wait(1000, () => node.classList.add('scrolled'))

    smooth ? smoothScrollToElem(node) : window.scrollTo(0, node.offsetTop)

    wait(200, () => {
      focus && node.focus()
      store && store.commit(CURRENT_SECTION, getSectionId())
      app.dataset[CURRENT_SECTION] = getSectionId()
    })
  }
}

export function createMenuShadow(color = 'rgba(72, 49, 212, .05)') {
  return `0 10px 53px 0 ${color}`
}

export function smoothScrollToElem(
  elem,
  speed = 1000,
  easing = 'easeInOutCubic'
) {
  if (!(elem instanceof HTMLElement)) return

  const scrollTargetY = elem.offsetTop
  let currentTime = 0
  const scrollY = window.pageYOffset || document.documentElement.scrollTop

  // min time .1, max time .8 seconds
  const time = Math.max(
    0.1,
    Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8)
  )

  // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
  const easingEquations = {
    easeInOutCubic: pos => {
      if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 3)
      return 0.5 * (Math.pow(pos - 2, 3) + 2)
    },
  }

  function tick() {
    currentTime += 1 / 60

    let p = currentTime / time
    let t = easingEquations[easing](p)

    if (p < 1) {
      window.requestAnimationFrame(tick)

      window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t)
    } else {
      window.scrollTo(0, scrollTargetY)
    }
  }

  tick()
}

export function isDev() {
  return process.env.NODE_ENV === 'development'
}

const host = typeof location !== 'undefined' ? 'https://' + location.host : ''

export function getShelfURL() {
  return isDev() ? 'http://localhost:' + SHELF_PORT : host + '/shelf'
}

export function getLandingURL() {
  return isDev() ? 'http://localhost:' + LANDING_PORT : host
}

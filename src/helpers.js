import store from './store'
import { debounce } from '@mrolaolu/helpers'

const goToSection = section => {
  if (!(section instanceof HTMLElement)) return

  scrollTo(section.offsetTop)

  if (section.previousElementSibling) {
    if (!section.previousElementSibling.classList.contains('scrolled'))
      section.previousElementSibling.classList.add('scrolled')
  } else section.classList.add('scrolled')

  if (!section.nextElementSibling) section.classList.add('scrolled')

  debounce(() => {
    store.commit('currentSection', section.id)
    document.getElementById('app').dataset.section = section.id
  }, 200)
}

const createMenuShadow = (color = 'rgba(72, 49, 212, .05)') =>
  `0 10px 53px 0 ${color}`

function scrollTo(scrollTargetY = 0, speed = 700, easing = 'easeInOutCubic') {
  let currentTime = 0
  const scrollY = window.scrollY || document.documentElement.scrollTop

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

export { goToSection, createMenuShadow, scrollTo }

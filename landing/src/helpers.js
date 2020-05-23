import { getFirstFocusableNode } from '@mrolaolu/helpers'
import { SECTION_SELECTOR, CURRENT_SECTION, NAVIGATION_ID } from './constants'

export * from '@saucedrip/core/helpers'

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
      // If there's a focusable node in the current section,
      // bring focus to that node, otherwise, restore focus to the navigation.
      const navigationEl = document.getElementById(NAVIGATION_ID)
      const nodeToFocus = !getFirstFocusableNode(node)
        ? getFirstFocusableNode(navigationEl)
        : node

      if (nodeToFocus === null) return
      nodeToFocus.focus()
    }
  }, 200)
}

function smoothScrollToElem(elem, speed = 1000) {
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

  function runAnimation() {
    currentTime += 1 / 60

    let p = currentTime / time
    let t = easeInOutCubic(p)

    if (p < 1) {
      requestAnimationFrame(runAnimation)

      scrollTo(0, scrollY + (scrollTargetY - scrollY) * t)
    } else {
      scrollTo(0, scrollTargetY)
    }
  }

  runAnimation()
}

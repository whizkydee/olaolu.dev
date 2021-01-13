import { getFirstFocusableNode } from '@mrolaolu/helpers'
import { SECTION_SELECTOR, CURRENT_SECTION, NAVIGATION_ID } from './constants'
import { isMotionReduced } from '@saucedrip/core/helpers'

export * from '@saucedrip/core/helpers'

export function goToSection(store, opts) {
  let { node: sectionNode, modifier, smooth = true, focus = true } = opts

  if (!sectionNode) return
  const sections = getSections()
  const app = document.getElementById('app')

  const getSectionId = () => sectionNode.dataset.section
  const curSectionIndex = sections.findIndex(({ dataset }) => {
    return dataset.section === getSectionId()
  })

  const findSection = (idx = 0) => sections[curSectionIndex + idx]
  // determine what section to go to based on the modifier.
  if (modifier == 'next') {
    sectionNode = findSection(1)
  } else if (modifier == 'previous') {
    sectionNode = findSection(-1)
  }

  if (!sectionNode) return
  setTimeout(() => {
    // Add a `scrolled` className so we know not to
    // animate all the items in the section again.
    sectionNode.classList.add('scrolled')
  }, 1000)

  if (smooth) smoothScroll(sectionNode.offsetTop)
  else scrollTo(0, sectionNode.offsetTop)

  setTimeout(() => {
    store && store.commit(CURRENT_SECTION, getSectionId())
    app.dataset[CURRENT_SECTION] = getSectionId()

    if (focus) {
      // If there's a focusable node in the current section,
      // bring focus to that node, otherwise, restore focus to the navigation.
      const navigationEl = document.getElementById(NAVIGATION_ID)
      const nodeToFocus = !getFirstFocusableNode(sectionNode)
        ? getFirstFocusableNode(navigationEl)
        : sectionNode

      if (nodeToFocus === null) return
      nodeToFocus.focus()
    }
  }, 200)
}

export const [getSections] = [
  () => Array.from(document.querySelectorAll(SECTION_SELECTOR)),
]

function smoothScroll(scrollTargetY, speed = 1000) {
  let currentTime = 0
  const scrollY = pageYOffset || document.documentElement.scrollTop
  const derivedSpeed = isMotionReduced() ? speed * 3 : speed

  // min time .1, max time .8 seconds
  const time = Math.max(
    0.1,
    Math.min(Math.abs(scrollY - scrollTargetY) / derivedSpeed, 0.8)
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

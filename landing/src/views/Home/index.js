import Vue from 'vue'
import {
  wait,
  toPx,
  resetScroll,
  getEventPath,
  matchesQuery,
} from '@mrolaolu/helpers'
import {
  SECTIONS,
  NAVIGATION_ID,
  SECTION_SELECTOR,
  CURRENT_SECTION_KEY,
} from '@/constants'
import './home-styles'
import { mapState } from 'vuex'
import Contact from './Contact'
import PitchSlate from './PitchSlate'
import Experience from './Experience'
import Cornerstone from './Cornerstone'
import Carriageway from './Carriageway'
import { goToSection, breakpoints } from '@/helpers'

const maybeMediumScreen = () =>
  matchesQuery(`(max-width: ${toPx(breakpoints.medium)})`)

const Homepage = Vue.component('Homepage', {
  data: () => ({
    touchY: null,
    prevTime: new Date().getTime(),
    isMediumScreen: maybeMediumScreen(),
  }),

  computed: {
    ...mapState([CURRENT_SECTION_KEY]),
  },

  mounted() {
    const { documentElement } = document

    if (!this.isMediumScreen) {
      wait(1, this.maybeRestoreSection)
    }

    // Set current section to the first section by default.
    this.$root.$el.dataset[CURRENT_SECTION_KEY] = this.getCurrentSectionId()

    window.addEventListener('resize', this.recalcSection)
    document.addEventListener('keydown', this.maybeScrollJack)
    document.addEventListener('touchstart', this.handleTouchstart)
    document.addEventListener('touchmove', this.handleTouchmove, {
      passive: false,
    })
    documentElement.addEventListener('wheel', this.handleMouseWheel, false)
    documentElement.addEventListener('mousewheel', this.handleMouseWheel, false)
  },

  destroyed() {
    const { documentElement } = document

    window.removeEventListener('resize', this.recalcSection)
    document.removeEventListener('keydown', this.maybeScrollJack)
    documentElement.removeEventListener('wheel', this.handleMouseWheel, false)
    documentElement.removeEventListener(
      'mousewheel',
      this.handleMouseWheel,
      false
    )
    document.removeEventListener('touchstart', this.handleTouchstart)
    document.removeEventListener('touchmove', this.handleTouchmove, {
      passive: false,
    })
  },

  methods: {
    /**
     * Get the ID of the current section
     * @return {string}
     */

    getCurrentSectionId() {
      return this[CURRENT_SECTION_KEY]
    },

    /**
     * Determine if the specified section is hidden.
     * @param {string} id - the id of the section to check
     * @return {'true' | 'false'}
     */

    isSectionHidden(id) {
      return (this.getCurrentSectionId() !== id).toString()
    },

    /**
     * Determine what element is most visible in the viewport
     * @param {HTMLElement} s - the section
     * @return {number} - the percentage by which is left of the element
     * to occupy the entire viewport.
     */

    getSectionOffsetDiffFromViewport(s) {
      return Math.abs(
        (parseInt(s.offsetTop) -
          parseInt(
            Math.abs(document.documentElement.getBoundingClientRect().top)
          )) /
          100
      )
    },

    /**
     * Determine what section is most visible in the viewport,
     * and then ensure it occupies the entire viewpor.
     * @return {void}
     */

    maybeRestoreSection() {
      const sections = Array.from(document.querySelectorAll(SECTION_SELECTOR))
      // Set current section to currently visible section upon reload
      const sectionInView = sections.find(
        section => this.getSectionOffsetDiffFromViewport(section) < 2 // <2%
      )

      if (!sectionInView) wait(100, () => resetScroll())
      else {
        goToSection([sectionInView])
        const firstSection = this[CURRENT_SECTION_KEY] === SECTIONS[0]
        if (!firstSection) this.$store.commit('headerCompact', true)
      }
    },

    /**
     * Recalculate position of the current section.
     * @return {void}
     */

    recalcSection() {
      this.isMediumScreen = maybeMediumScreen()

      // Immediately resize sections on window resize (no smooth).
      goToSection([this.getSection()], false)
    },

    /**
     * Take in a valid section id and return the corresponding element.
     * @param {string=} id
     * @return {HTMLElement}
     */

    getSection(id = this.getCurrentSectionId()) {
      const sectionElem = document.querySelector(`[data-section='${id}']`)

      if (!sectionElem) return
      return sectionElem
    },

    /**
     * Go to the section after the current one.
     * @return {void}
     */

    goToNextSection() {
      goToSection([this.getSection(), 'next'])
    },

    /**
     * Go to the section before the current one.
     * @return {void}
     */

    goToPrevSection() {
      goToSection([this.getSection(), 'previous'])
    },

    /**
     * Determine if the page is being scrolled very fast
     * within the specified period of time
     * @param {number} ms
     * @return {boolean}
     */

    scrollingLudicrouslyFast(ms = 100) {
      const curTime = new Date().getTime()
      const timeDiff = curTime - this.prevTime
      this.prevTime = curTime

      return timeDiff < ms
    },

    /**
     * Register the last horizontal touch position.
     * @param {TouchEvent} event
     * @return {void}
     */

    handleTouchstart(event) {
      if (typeof event.touches === 'undefined' || !this.isMediumScreen) return
      this.touchY = event.touches[0].clientY
    },

    /**
     * GO to the next or previous section based on the
     * touch move direction.
     * @param {TouchEvent} event
     * @return {void}
     */

    handleTouchmove(event) {
      if (typeof event.changedTouches === 'undefined' || !this.isMediumScreen)
        return

      const curTouchY = event.changedTouches[0].clientY
      if (!this.scrollingLudicrouslyFast()) {
        if (this.touchY > curTouchY) this.goToNextSection()
        else this.goToPrevSection()
      }
    },

    /**
     * GO to the next or previous section based on
     * the mouse wheel direction.
     * @param {MouseEvent} event
     * @return {void}
     */

    handleMouseWheel(event) {
      if (!this.scrollingLudicrouslyFast()) {
        switch (Math.sign(event.deltaY)) {
          case 1:
            this.goToNextSection()
            break
          case -1:
            this.goToPrevSection()
            break
        }
      }
    },

    /**
     * Hijack scrolling
     * @param {Event} event
     * @return {void}
     */

    maybeScrollJack(event) {
      const inEventPath = cond => getEventPath(event).some(cond)

      const isNavFocused = inEventPath(o => o && o.id === NAVIGATION_ID)
      const isSectionFocused = inEventPath(o => o.dataset && o.dataset.section)
      const isFormFocused = inEventPath(o => o.tagName && o.tagName === 'FORM')

      if (
        isFormFocused ||
        (!isNavFocused &&
          !isSectionFocused &&
          event.target !== this.$el &&
          event.target !== document.body &&
          event.target !== this.$root.$el &&
          event.target !== document.documentElement)
      ) {
        return
      }

      const SPACEBAR = ' '

      if (!this.scrollingLudicrouslyFast(500)) {
        switch (event.key) {
          case 'Down':
          case SPACEBAR:
          case 'Spacebar':
          case 'ArrowDown':
          case 'Right':
          case 'PageDown':
          case 'ArrowRight':
            event.preventDefault()
            this.goToNextSection()
            break

          case 'Up':
          case 'ArrowUp':
          case 'Left':
          case 'PageUp':
          case 'ArrowLeft':
            event.preventDefault()
            this.goToPrevSection()
            break

          case 'Home':
            event.preventDefault()
            goToSection([this.getSection(SECTIONS[0])]) // first section
            break

          case 'End':
            event.preventDefault()
            goToSection([this.getSection(SECTIONS[SECTIONS.length - 1])]) // last section
            break
        }
      }
    },
  },

  render() {
    const { isSectionHidden } = this
    const [une, deux, trois, quatre, cinq] = SECTIONS

    return (
      <ContentView id="homepage">
        <PitchSlate name={une} aria-hidden={isSectionHidden(une)} />
        <Cornerstone name={deux} aria-hidden={isSectionHidden(deux)} />
        <Experience name={trois} aria-hidden={isSectionHidden(trois)} />
        <Carriageway name={quatre} aria-hidden={isSectionHidden(quatre)} />
        <Contact name={cinq} aria-hidden={isSectionHidden(cinq)} />
      </ContentView>
    )
  },
})

export default Homepage

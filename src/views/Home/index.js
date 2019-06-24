import {
  wait,
  toPx,
  resetScroll,
  getEventPath,
  matchesQuery,
} from '@mrolaolu/helpers'
import Vue from 'vue'
import { mapState } from 'vuex'
import Contact from './Contact'
import PitchSlate from './PitchSlate'
import Experience from './Experience'
import Cornerstone from './Cornerstone'
import Carriageway from './Carriageway'
import { goToSection, breakpoints, smoothScrollToElem } from '@/helpers'
import { SECTIONS, NAVIGATION_ID, CURRENT_SECTION_KEY } from '@/constants'

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

    !this.isMediumScreen &&
      wait(() => {
        // Set current section to currently visible section upon reload
        const getPercentageDiff = s =>
          Math.abs(
            (parseInt(s.offsetTop) -
              parseInt(
                Math.abs(document.documentElement.getBoundingClientRect().top)
              )) /
              100
          )

        const sectionInView = this.getSections().filter(
          section => getPercentageDiff(section) < 2 // <2%
        )[0]

        if (!sectionInView) wait(() => resetScroll(), 100)
        else {
          goToSection(sectionInView)
          if (!this[CURRENT_SECTION_KEY] === SECTIONS[0])
            this.$store.commit('headerCompact', true)
        }
      })

    // Set current section to the first section.
    this.$root.$el.dataset.section = this.getCurrentSectionId()

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
    getCurrentSectionId() {
      return this[CURRENT_SECTION_KEY]
    },

    isSectionHidden(id) {
      return (this.getCurrentSectionId() !== id).toString()
    },

    recalcSection() {
      this.isMediumScreen = maybeMediumScreen()

      // Immediately resize sections on window resize (no smooth).
      goToSection(this.getSection(this.getCurrentSectionId()), false)
    },

    getSections() {
      return [...this.$el.getElementsByTagName('section')]
    },

    getSection(id = this.getCurrentSectionId()) {
      const sectionElem = document.getElementById(id)

      if (!sectionElem) return
      return sectionElem
    },

    goToNextSection() {
      if (this.getCurrentSectionId() === SECTIONS[SECTIONS.length - 1]) {
        smoothScrollToElem(document.querySelector('footer'))
      }
      return goToSection(this.getSection().nextElementSibling)
    },

    goToPrevSection() {
      goToSection(this.getSection().previousElementSibling)
    },

    scrollingLudicrouslyFast(ms = 80) {
      const curTime = new Date().getTime()
      const timeDiff = curTime - this.prevTime
      this.prevTime = curTime

      return timeDiff < ms
    },

    handleTouchstart(event) {
      if (typeof event.touches === 'undefined' || !this.isMediumScreen) return
      this.touchY = event.touches[0].clientY
    },

    handleTouchmove(event) {
      if (typeof event.changedTouches === 'undefined' || !this.isMediumScreen)
        return

      const curTouchY = event.changedTouches[0].clientY
      if (!this.scrollingLudicrouslyFast()) {
        if (this.touchY > curTouchY) this.goToNextSection()
        else this.goToPrevSection()
      }
    },

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

    maybeScrollJack(event) {
      const isNavFocused = getEventPath(event).some(
        ({ id }) => id === NAVIGATION_ID
      )

      if (
        !isNavFocused &&
        event.target !== this.$el &&
        event.target !== document.body &&
        event.target !== this.$root.$el &&
        event.target !== document.documentElement
      )
        return

      const SPACEBAR = ' '

      if (!this.scrollingLudicrouslyFast(300)) {
        switch (event.key) {
          case 'Down':
          case SPACEBAR:
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
            goToSection(this.getSection(SECTIONS[0]))
            break

          case 'End':
            event.preventDefault()
            goToSection(this.getSection(SECTIONS[SECTIONS.length - 1]))
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
        <PitchSlate id={une} aria-hidden={isSectionHidden(une)} />
        <Cornerstone id={deux} aria-hidden={isSectionHidden(deux)} />
        <Experience id={trois} aria-hidden={isSectionHidden(trois)} />
        <Carriageway id={quatre} aria-hidden={isSectionHidden(quatre)} />
        <Contact id={cinq} aria-hidden={isSectionHidden(cinq)} />
      </ContentView>
    )
  },
})

export default Homepage

import Vue from 'vue'
import { mapState } from 'vuex'
import Contact from './Contact'
import PitchSlate from './PitchSlate'
import Experience from './Experience'
import Cornerstone from './Cornerstone'
import { goToSection } from '@/helpers'
import Carriageway from './Carriageway'
import { debounce, resetScroll, getEventPath } from '@mrolaolu/helpers'
import { CURRENT_SECTION_KEY, SECTIONS, NAVIGATION_ID } from '@/constants'

const Homepage = Vue.component('Homepage', {
  data: () => ({
    touchY: null,
    prevTime: new Date().getTime(),
  }),

  computed: {
    ...mapState([CURRENT_SECTION_KEY]),
  },

  mounted() {
    const { documentElement } = document

    debounce(() => {
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

      if (!sectionInView) debounce(() => resetScroll(), 10)
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
      goToSection(this.getSection().nextElementSibling)
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
      if (typeof event.touches === 'undefined') return
      this.touchY = event.touches[0].clientY
    },

    handleTouchmove(event) {
      if (typeof event.changedTouches === 'undefined') return

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

    return (
      <ContentView id="homepage">
        <PitchSlate
          id={SECTIONS[0]}
          aria-hidden={isSectionHidden(SECTIONS[0])}
        />
        <Cornerstone
          id={SECTIONS[1]}
          aria-hidden={isSectionHidden(SECTIONS[1])}
        />
        <Experience
          id={SECTIONS[2]}
          aria-hidden={isSectionHidden(SECTIONS[2])}
        />
        <Carriageway
          id={SECTIONS[3]}
          aria-hidden={isSectionHidden(SECTIONS[3])}
        />
        <Contact id={SECTIONS[4]} aria-hidden={isSectionHidden(SECTIONS[4])} />
      </ContentView>
    )
  },
})

export default Homepage

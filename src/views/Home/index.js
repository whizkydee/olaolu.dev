import Vue from 'vue'
import { mapState } from 'vuex'
import PitchSlate from './PitchSlate'
import Concentrer from './Concentrer'
import Experience from './Experience'
import { goToSection } from '@/helpers'
import resetScroll from '@mrolaolu/helpers/resetScroll'
import { CURRENT_SECTION_KEY, NAV_FIXED_KEY } from '@/constants'

const Homepage = Vue.component('Homepage', {
  computed: {
    ...mapState([CURRENT_SECTION_KEY, NAV_FIXED_KEY]),
  },

  mounted() {
    const { documentElement } = document

    // Ensure the page always starts from the beginning.
    window.setTimeout(() => resetScroll(document.documentElement), 0)
    document.getElementById('app').dataset.section = this.getCurrentSectionId()

    window.addEventListener('resize', this.recalcSection)
    document.addEventListener('keydown', this.maybeScrollJack)
    documentElement.addEventListener('wheel', this.handleMouseWheel)
    documentElement.addEventListener('mousewheel', this.handleMouseWheel)
  },

  destroyed() {
    const { documentElement } = document

    window.removeEventListener('resize', this.recalcSection)
    document.removeEventListener('keydown', this.maybeScrollJack)
    documentElement.removeEventListener('wheel', this.handleMouseWheel)
    documentElement.removeEventListener('mousewheel', this.handleMouseWheel)
  },

  methods: {
    getCurrentSectionId() {
      return this[CURRENT_SECTION_KEY]
    },

    recalcSection() {
      goToSection(this.getSection(this.getCurrentSectionId()))
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

    debounce(cb, timeout = 200) {
      if (typeof cb !== 'function') return
      window.setTimeout(cb, timeout)
    },

    handleMouseWheel(event) {
      switch (Math.sign(event.deltaY)) {
        case 1:
          this.debounce(this.goToNextSection())
          break
        case -1:
          this.debounce(this.goToPrevSection())
          break
      }
    },

    maybeScrollJack(event) {
      switch (event.key) {
        case 'Down':
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
      }
    },
  },

  render() {
    return (
      <ContentView id="homepage" ref="mainElem">
        <PitchSlate id="une" />
        <Concentrer id="deux" />
        <Experience id="trois" />
      </ContentView>
    )
  },
})

export default Homepage

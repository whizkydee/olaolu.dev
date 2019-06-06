import Vue from 'vue'
import Storage from '@/Storage'
import PitchSlate from './PitchSlate'
import Concentrer from './Concentrer'
import { goToSection } from '@/helpers'
import WorkExperience from './WorkExperience'
import { CURRENT_SECTION_KEY } from '@/constants'
import resetScroll from '@mrolaolu/helpers/resetScroll'

const Homepage = Vue.component('Homepage', {
  mounted() {
    Storage.reset(CURRENT_SECTION_KEY)
    resetScroll(document.documentElement)

    document.addEventListener('keydown', this.maybeScrollJack)
  },

  destroyed() {
    document.removeEventListener('keydown', this.maybeScrollJack)
  },

  methods: {
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
        default:
          break
      }
    },

    getSection(id = Storage.get(CURRENT_SECTION_KEY)) {
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
  },

  render() {
    return (
      <ContentView id="homepage" ref="mainElem">
        <PitchSlate id="une" />
        <Concentrer id="deux" />
        <WorkExperience id="trois" />
      </ContentView>
    )
  },
})

export default Homepage

import Vue from 'vue'
import { mapState } from 'vuex'
import Contact from './Contact'
import PitchSlate from './PitchSlate'
import Experience from './Experience'
import Cornerstone from './Cornerstone'
import { goToSection } from '@/helpers'
import Carriageway from './Carriageway'
import { getEventPath, resetScroll, debounce } from '@mrolaolu/helpers'
import { CURRENT_SECTION_KEY, SECTIONS, NAVIGATION_ID } from '@/constants'

const Homepage = Vue.component('Homepage', {
  data: () => ({
    prevTime: new Date().getTime(),
  }),

  computed: {
    ...mapState([CURRENT_SECTION_KEY]),
  },

  mounted() {
    const { documentElement } = document

    // Ensure the page always starts from the beginning.
    this.debounce(() => resetScroll(), 0)

    // Set current section to the first section.
    this.$root.$el.dataset.section = this.getCurrentSectionId()

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

    maybeSectionHidden(id) {
      return (this.getCurrentSectionId() !== id).toString()
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

    debounce: (cb, timeout = 250) => debounce(cb, timeout),

    handleMouseWheel(event) {
      const curTime = new Date().getTime()
      const timeDiff = curTime - this.prevTime
      this.prevTime = curTime
      const wheelingLudicrouslyFast = timeDiff < 60

      if (!wheelingLudicrouslyFast) {
        switch (Math.sign(event.deltaY)) {
          case 1:
            this.debounce(this.goToNextSection())
            break
          case -1:
            this.debounce(this.goToPrevSection())
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
        event.target !== document.body &&
        event.target !== this.$root.$el &&
        event.target !== this.$refs.mainElem.$el &&
        event.target !== document.documentElement
      )
        return

      const SPACEBAR = ' '
      switch (event.key) {
        case 'Down':
        case SPACEBAR:
        case 'ArrowDown':
        case 'Right':
        case 'PageDown':
        case 'ArrowRight':
          event.preventDefault()
          this.debounce(this.goToNextSection())
          break

        case 'Up':
        case 'ArrowUp':
        case 'Left':
        case 'PageUp':
        case 'ArrowLeft':
          event.preventDefault()
          this.debounce(this.goToPrevSection())
          break

        case 'Home':
          event.preventDefault()
          this.debounce(goToSection(this.getSection(SECTIONS[0])))
          break

        case 'End':
          event.preventDefault()
          this.debounce(
            goToSection(this.getSection(SECTIONS[SECTIONS.length - 1]))
          )
          break
      }
    },
  },

  render() {
    const { maybeSectionHidden } = this

    return (
      <ContentView id="homepage" ref="mainElem">
        <PitchSlate
          id={SECTIONS[0]}
          aria-hidden={maybeSectionHidden(SECTIONS[0])}
        />
        <Cornerstone
          id={SECTIONS[1]}
          aria-hidden={maybeSectionHidden(SECTIONS[1])}
        />
        <Experience
          id={SECTIONS[2]}
          aria-hidden={maybeSectionHidden(SECTIONS[2])}
        />
        <Carriageway
          id={SECTIONS[3]}
          aria-hidden={maybeSectionHidden(SECTIONS[3])}
        />
        <Contact
          id={SECTIONS[4]}
          aria-hidden={maybeSectionHidden(SECTIONS[4])}
        />
      </ContentView>
    )
  },
})

export default Homepage

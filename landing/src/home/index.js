import Vue from 'vue'
import {
  SECTIONS,
  SECTION_MAP,
  NAVIGATION_ID,
  SECTION_SELECTOR,
  CURRENT_SECTION,
} from '@/constants'
import {
  wait,
  debounce,
  isMacintosh,
  getEventPath,
  elementInView,
} from '@mrolaolu/helpers'
import './home-styles'
import { mapState } from 'vuex'
import Contact from './Contact'
import PitchSlate from './PitchSlate'
import Experience from './Experience'
import Cornerstone from './Cornerstone'
import Carriageway from './Carriageway'
import { goToSection as GoToSection } from '@/helpers'

const Homepage = Vue.component('Homepage', {
  data: () => ({
    touchY: null,
    prevTime: new Date().getTime(),
  }),
  computed: {
    ...mapState([CURRENT_SECTION]),
    firstSection: { get: () => SECTIONS[0] },
    lastSection: { get: () => SECTIONS[SECTIONS.length - 1] },
    announcement() {
      const sectionName = SECTION_MAP[this.currentSection]
      return `You are now in the "${sectionName}" section.`
    },
    scrollableElems() {
      return [
        this.$el,
        window.document.body,
        this.$root.$el,
        window.document.documentElement,
      ]
    },
  },

  async beforeCreate() {
    process.env.NODE_ENV === 'production' &&
      console.log(`${await import('raw-loader!@saucedrip/core/cat.txt').then(
        m => m.default
      )}
    Hey there 👋, curious!
    You're probably wondering how cool this site is, yeah?
    I can do even better, so, if your company is currently
    looking for someone with my kind of skills, feel free to hit me up
    on https://twitter.com/mrolaolu or via hello@olaolu.dev ✨.

    And... about your curiousity, the code that powers my site is publicly hosted
    on https://github.com/whizkydee/olaolu.dev. That's a good place to start
    for sure 🤞.
    `)
  },

  mounted() {
    const { documentElement } = document

    this.isMediumScreen || wait(1, this.maybeRestoreSection)

    // Set current section to the first section by default.
    this.$root.$el.dataset[CURRENT_SECTION] = this.currentSection

    window.addEventListener('resize', this.handleResize)
    document.addEventListener('keydown', this.maybeScrollJack)
    document.addEventListener('touchstart', this.handleTouchstart)
    document.addEventListener('touchmove', this.handleTouchmove, {
      passive: false,
    })
    documentElement.addEventListener('wheel', this.handleMouseWheel, false)
    documentElement.addEventListener('mousewheel', this.handleMouseWheel, false)
  },

  beforeDestroy() {
    const { documentElement: docElem } = document

    window.removeEventListener('resize', this.handleResize)
    document.removeEventListener('keydown', this.maybeScrollJack)
    docElem.removeEventListener('wheel', this.handleMouseWheel, false)
    docElem.removeEventListener('mousewheel', this.handleMouseWheel, false)
    document.removeEventListener('touchstart', this.handleTouchstart)
    document.removeEventListener('touchmove', this.handleTouchmove, {
      passive: false,
    })
  },

  methods: {
    /**
     * Determine if the specified section is hidden.
     * @param {string} id - the id of the section to check
     * @return {'true' | 'false'}
     */
    isSectionHidden(id) {
      const section = this.getSection(id)
      let hidden = false

      if (this.isMaxHeight) {
        hidden = this.currentSection !== id
      } else {
        if (!section) return
        hidden = !elementInView(section, {
          threshold: 0.5,
        })
      }

      return String(hidden)
    },

    /**
     * Configurable fn to scroll to a section - accepts a node
     * Default opts: `{ smooth: true, focus: true }`.
     * Toggle the values to disable/enable smooth scrolling
     * and focusing the section on arrival respectfully.
     * @return {void}
     */
    goToSection(...args) {
      // Ensure we only call `requestAnimationFrame` on screens wider
      // than medium. Prevents the scroll bug on mobile Chrome.
      if (this.isMediumScreen) return
      return GoToSection(this.$store, ...args)
    },

    /**
     * Recalculate position of the current section
     * then adjust based on that information.
     * @return {void}
     */
    recalcSection() {
      this.goToSection({ node: this.getSection(), smooth: false })
    },

    /**
     * Go to the section after the current one.
     * @return {void}
     */
    goToNextSection() {
      this.goToSection({ modifier: 'next', node: this.getSection() })
    },

    /**
     * Go to the section before the current one.
     * @return {void}
     */
    goToPrevSection() {
      this.goToSection({ modifier: 'previous', node: this.getSection() })
    },

    /**
     * Jump to the absolute first section on the page.
     * @return {void}
     */
    goToFirstSection() {
      this.goToSection({ node: this.getSection(this.firstSection) })
    },

    /**
     * Jump to the absolute last section on the page.
     * @return {void}
     */
    goToLastSection() {
      this.goToSection({ node: this.getSection(this.lastSection) })
    },

    /**
     * Determine what section is most visible in the viewport
     * @param {HTMLElement} section - the section
     * @return {number} - the percentage left for the element to
     * occupy the entire viewport.
     */
    getOffsetFromViewport(section) {
      const offsetTop = parseInt(section.offsetTop)
      const docElemScrollTop = parseInt(document.documentElement.scrollTop)

      return Math.abs((offsetTop - docElemScrollTop) / 100) < 2 // 2 percent
    },

    /**
     * Determine what section is most visible in the viewport,
     * and then ensure it occupies the entire viewpor.
     * @return {void}
     */
    maybeRestoreSection() {
      const isFirstSection = this.currentSection === this.firstSection
      const sections = Array.from(
        this.$root.$el.querySelectorAll(SECTION_SELECTOR)
      )

      // Set current section to the most visible section upon reload
      const mostVisibleSection = sections.find(this.getOffsetFromViewport)

      if (mostVisibleSection) {
        this.goToSection({ focus: false, node: mostVisibleSection })

        if (!isFirstSection) {
          this.$store.commit('headerCompact', true)
        }
      } else {
        wait(100, () => {
          // ...reset scroll!
          Object.assign(document.documentElement, {
            scrollTop: 0,
            scrollLeft: 0,
          })
        })
      }
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
      if (event.touches === undefined || this.isMediumScreen) return
      this.touchY = event.touches[0].clientY
    },

    /**
     * GO to the next or previous section based on the
     * touch move direction.
     * @param {TouchEvent} event
     * @return {void}
     */
    handleTouchmove(event) {
      if (event.changedTouches === undefined || this.isMediumScreen) return

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
      if (this.isMediumScreen) return

      if (!this.scrollingLudicrouslyFast()) {
        switch (Math.sign(event.deltaY)) {
          case 1:
            return this.goToNextSection()
          case -1:
            return this.goToPrevSection()
        }
      }
    },

    /**
     * When the window is resized, recalculate the
     * position of the current section.
     * @return {void}
     */
    handleResize() {
      return debounce(this.recalcSection, 200)()
    },

    /**
     * Hijack scrolling.
     * @param {Event} event
     * @return {void}
     */
    maybeScrollJack(event) {
      if (this.isMediumScreen || !event) return

      const SPACEBAR = [' ', 'Spacebar']
      const isCommandKey = () => isMacintosh() && event.metaKey
      const downwardKeys = [
        'Down',
        ...SPACEBAR,
        'ArrowDown',
        'Right',
        'PageDown',
        'ArrowRight',
      ]
      const upwardKeys = ['Up', 'ArrowUp', 'Left', 'PageUp', 'ArrowLeft']
      const isScrollableElemFocused = this.scrollableElems.includes(
        event.target
      )

      const inEventPath = predicate =>
        getEventPath(event)
          .filter(el => el instanceof HTMLElement)
          .some(predicate)

      const isNavFocused = inEventPath(el => el && el.id === NAVIGATION_ID)
      const isSectionFocused = inEventPath(el => el && el.dataset.section)
      const isFormFocused = inEventPath(el => el && el.tagName === 'FORM')

      if (
        isFormFocused ||
        this.scrollingLudicrouslyFast(500) ||
        !(isNavFocused || isSectionFocused || isScrollableElemFocused)
      ) {
        return // ...do not scroll!
      }

      if (downwardKeys.includes(event.key)) {
        event.preventDefault()
        isCommandKey() ? this.goToLastSection() : this.goToNextSection()
      } else if (upwardKeys.includes(event.key)) {
        event.preventDefault()
        isCommandKey() ? this.goToFirstSection() : this.goToPrevSection()
      } else if (event.key === 'Home') {
        event.preventDefault()
        this.goToFirstSection()
      } else if (event.key === 'End') {
        event.preventDefault()
        this.goToLastSection()
      }
    },
  },

  render() {
    const { isSectionHidden, announcement } = this
    const [une, deux, trois, quatre, cinq] = SECTIONS

    return (
      <ContentView id="homepage" announcement={announcement} readAnnouncement>
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

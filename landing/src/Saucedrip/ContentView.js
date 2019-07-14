import Vue from 'vue'
import { TABBING_CLASSNAME } from '@/constants'

const ContentView = Vue.component('ContentView', {
  created() {
    document.addEventListener('mousedown', this.notTabbing)
    document.addEventListener('keydown', this.prollyTabbing)
    document.documentElement.id = typeof this.id === 'string' && this.id
  },

  destroyed() {
    document.removeEventListener('mousedown', this.notTabbing)
    document.removeEventListener('keydown', this.prollyTabbing)
  },

  methods: {
    prollyTabbing(event) {
      if (event.key === 'Tab')
        document.documentElement.classList.add(TABBING_CLASSNAME)
    },

    notTabbing() {
      document.documentElement.classList.remove(TABBING_CLASSNAME)
    },
  },

  render() {
    return (
      <main id="main" role="main" tabindex="-1">
        {this.$slots.default}
      </main>
    )
  },

  props: {
    id: { type: String, required: true },
  },
})

export default ContentView

<template>
  <main id="main" role="main" tabindex="-1">
    <slot />
  </main>
</template>

<script>
import { TABBING_CLASSNAME } from '../constants'

export default {
  name: 'ContentView',

  mounted() {
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

  props: {
    id: { type: String, required: true },
  },
}
</script>

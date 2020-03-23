<template>
  <main id="main" role="main" tabindex="-1">
    <slot />
  </main>
</template>

<script>
import { TABBING_CLASSNAME } from '../constants'

export default {
  mounted() {
    document.addEventListener('mousedown', this.removeTabbingId)
    document.addEventListener('keydown', this.maybeAddTabbingId)
    document.documentElement.id = typeof this.id === 'string' && this.id
  },

  beforeDestroy() {
    document.removeEventListener('mousedown', this.removeTabbingId)
    document.removeEventListener('keydown', this.maybeAddTabbingId)
  },

  methods: {
    maybeAddTabbingId(event) {
      if (event.key === 'Tab')
        document.documentElement.classList.add(TABBING_CLASSNAME)
    },

    removeTabbingId() {
      document.documentElement.classList.remove(TABBING_CLASSNAME)
    },
  },

  props: {
    id: { type: String, required: true },
  },
}
</script>

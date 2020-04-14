<template>
  <main id="main" tabindex="-1">
    <slot />

    <Announcer :message="announcement" :readOut="readAnnouncement" />
  </main>
</template>

<script>
import { TABBING_CLASSNAME } from '../constants'

export default {
  data: () => ({
    isTabbing: false,
  }),

  mounted() {
    typeof this.id === 'string' && (document.documentElement.id = this.id)
    document.addEventListener('mousedown', this.removeTabbingId)
    document.addEventListener('keydown', this.maybeAddTabbingId)
    document.addEventListener('visibilitychange', this.maybeRemoveTabbingId)
  },

  beforeDestroy() {
    document.removeEventListener('mousedown', this.removeTabbingId)
    document.removeEventListener('keydown', this.maybeAddTabbingId)
    document.removeEventListener('visibilitychange', this.maybeRemoveTabbingId)
  },

  methods: {
    maybeAddTabbingId(event) {
      if (event.key !== 'Tab') return
      this.isTabbing = true
      document.documentElement.classList.add(TABBING_CLASSNAME)
    },

    removeTabbingId() {
      this.isTabbing = false
      document.documentElement.classList.remove(TABBING_CLASSNAME)
    },

    maybeRemoveTabbingId(event) {
      const doc = event.target

      if (!this.isTabbing || doc.visibilityState == 'visible') return
      this.removeTabbingId()
    },
  },

  props: {
    announcement: String,
    id: { type: String, required: true },
    readAnnouncement: { type: Boolean, default: false },
  },
}
</script>

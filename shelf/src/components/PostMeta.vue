<template>
  <div class="post-meta">
    <time
      class="post-meta__date"
      :datetime="computedDate"
      :aria-label="'Published on: ' + post.date"
      >{{ post.date }}</time
    >
    <template v-if="post.timeToRead">
      <span class="post-meta__ttr">{{ post.timeToRead }} min read</span>
    </template>
  </div>
</template>

<script>
import { prefixWithZero } from '@mrolaolu/helpers'

export default {
  computed: {
    computedDate() {
      let date = new Date(this.post.date)
      if (Number.isNaN(date.getDate())) return

      return (
        date.getFullYear() +
        '-' +
        prefixWithZero(date.getMonth() + 1) +
        '-' +
        prefixWithZero(date.getDate())
      )
    },
  },

  props: ['post'],
}
</script>

<style lang="scss">
.post-meta {
  opacity: 0.8;
  margin-bottom: 1em;
  font-size: 0.8em;
}
</style>

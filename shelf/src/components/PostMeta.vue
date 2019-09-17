<template>
  <div class="post-meta">
    <span class="post-meta__date">{{ post.date }}</span>
    <template v-if="post.timeToRead">
      <span class="post-meta__ttr">{{ post.timeToRead }} min read</span>
    </template>
  </div>
</template>

<script>
export default {
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

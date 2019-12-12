<template>
  <div class="post-tags">
    <span v-if="withTitle">Tags:</span>
    <g-link
      class="post-tags__link color-off"
      v-for="tag in post.tags"
      :key="tag.id"
      :to="tag.path"
    >
      {{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: ['post', 'withTitle'],
}
</script>

<style lang="scss">
.post-tags {
  margin: 1em 0 0;
  font-size: 0.9em;

  a,
  span {
    &:not(:last-child) {
      margin-right: 0.7em;
    }
  }

  &__link {
    color: currentColor;
    text-decoration: none;
    color: currentColor;
    border-radius: var(--radius);
  }
}
</style>

<template>
  <div class="post__tags">
    <span v-if="withTitle">Tags:</span>
    <g-link
      class="post__tags-link color-off"
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
.post__tags {
  margin: 1em 0 0;
  font-size: 0.9em;

  a,
  span {
    &:not(:last-child) {
      margin-right: 0.7em;
    }
  }

  &-link {
    color: currentColor;
    text-decoration: none;
    border-radius: var(--radius);
  }
}
</style>

<template>
  <div class="post-card" :class="{ 'post-card--has-poster': post.poster }">
    <div class="post-card__header" v-if="post.coverImage">
      <g-image
        alt="Cover image"
        v-if="post.coverImage"
        class="post-card__image"
        :src="post.coverImage"
      />
    </div>
    <div class="post-card__content">
      <PostMeta class="post-card__meta" :post="post" />
      <h2 class="post-card__title" v-html="post.title" />
      <p class="post-card__description" v-html="post.description" />

      <PostTags class="post-card__tags" :post="post" v-if="post.tags" />

      <g-link class="post-card__link" :to="post.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags,
  },
  props: ['post'],
}
</script>

<style lang="scss">
.post-card {
  position: relative;
  margin-bottom: var(--space);

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--border-color);
  }

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    &:empty {
      display: none;
    }
  }

  &__content {
    padding-bottom: 1.5rem;
  }

  &__image {
    min-width: 100%;
  }

  &__title {
    margin-top: 0;
  }

  &__description {
    margin: 0;

    @media (min-width: 651px) {
      max-width: 85%;
    }
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>

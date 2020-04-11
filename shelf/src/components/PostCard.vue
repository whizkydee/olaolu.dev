<template>
  <li class="post-card" :class="{ 'post-card--has-poster': post.poster }">
    <div class="post-card__header" v-if="post.cover_image">
      <g-image
        alt="Cover image"
        v-if="post.cover_image"
        class="post-card__image"
        :src="post.cover_image"
      />
    </div>
    <article class="post-card__content" aria-label="Post">
      <g-link class="post-card__link color-off" :to="post.path">{{
        post.title
      }}</g-link>

      <PostMeta class="post-card__meta" :post="post" />
      <h2 class="post-card__title" v-html="post.title" />
      <p class="post-card__description" v-html="post.description" />

      <PostTags class="post-card__tags" :post="post" v-if="post.tags" />
    </article>
  </li>
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
  list-style-type: none;
  margin-bottom: var(--space);

  &:not(:last-of-type) {
    @media (min-width: 461px) {
      border-bottom: 1px solid var(--border-color);
    }

    @media (max-width: 650px) {
      margin-bottom: calc(var(--space) * 1.3);
    }
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
    font-weight: 300;

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
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
    transition: none;
    -webkit-tap-highlight-color: transparent;
  }
}

.is-tabbing .post-card__link:focus {
  outline-color: transparent;
  border-bottom: 5px solid var(--border-color);
}
</style>

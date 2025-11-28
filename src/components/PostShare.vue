<template>
  <div class="post__share">
    <a
      target="_blank"
      :href="fbShareURL"
      aria-label="Share this post on Facebook."
      @click="$ga.event('Post', 'click', 'Facebook share button')"
    >
      <FacebookIcon />
    </a>

    <a
      target="_blank"
      :href="twitterShareURL"
      aria-label="Share this post on Twitter."
      @click="$ga.event('Post', 'click', 'Twitter share button')"
    >
      <TwitterIcon />
    </a>
  </div>
</template>

<script>
import { unslashEnd } from '@mrolaolu/helpers'
import { TwitterIcon, FacebookIcon } from '@saucedrip/core/icons'

export default {
  props: ['post'],
  components: {
    TwitterIcon,
    FacebookIcon,
  },

  computed: {
    shareableURL() {
      return unslashEnd(unslashEnd(this.shelfURL) + this.$page.post.path)
    },

    fbShareURL() {
      const { title } = this.$page.post
      return `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        `${this.shareableURL}&quote=${title}`
      )}`
    },

    twitterShareURL() {
      const { title } = this.$page.post
      return `https://twitter.com/intent/tweet?${encodeURIComponent(
        `url=${this.shareableURL}&via=mrolaolu&text=${title}`
      )}`
    },
  },
}
</script>

<style lang="scss">
.post__share {
  display: flex;
  position: relative;

  a {
    position: relative;
    transition: transform 0.2s, filter 0.2s;

    &:hover {
      transform: scale(1.5);
      filter: contrast(90%);
    }

    &:focus {
      outline-width: 0;
    }

    &:not(:last-of-type) {
      margin-right: 1em;
    }

    &:nth-of-type(1) {
      color: #4172b8;
    }

    &:nth-of-type(2) {
      color: #1da1f2;
    }

    svg {
      width: 20px;
      height: 20px;
    }

    path {
      fill: currentColor;
    }
  }
}
</style>

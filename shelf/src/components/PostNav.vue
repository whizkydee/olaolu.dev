<template>
  <nav class="post-nav">
    <a class="post-nav__previous" :href="prevPost.path">
      <BowArrow direction="left" />
      <span>Previous</span>
    </a>

    <a href="/" aria-label="See all posts" class="post-nav__squares">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#4c3eff"
          d="M.5 15.194V.7h14.494v14.494zM21.006 15.194V.7H35.5v14.494zM.5 35.7V21.207h14.494V35.7zM21.006 35.7V21.207H35.5V35.7z"
        />
      </svg>
    </a>

    <a class="post-nav__next" :href="nextPost.path">
      <span>Next</span>
      <BowArrow />
    </a>
  </nav>
</template>

<script>
import { safeReduce } from '@mrolaolu/helpers'

export default {
  props: ['posts', 'post'],

  computed: {
    computedPosts() {
      return safeReduce(
        this.posts.edges,
        (acc, cur) => acc.concat(cur.node),
        []
      )
    },

    nextPost() {
      return this.computedPosts[this.curPostIndex + 1] || {}
    },

    prevPost() {
      return this.computedPosts[this.curPostIndex - 1] || {}
    },

    curPostIndex() {
      return this.computedPosts.findIndex(p => p && p.id === this.post.id)
    },
  },
}
</script>

<style lang="scss">
.post-nav {
  display: flex;
  width: 100%;
  font-size: 0.78em;
  user-select: none;
  color: var(--electric-blue);
  justify-content: space-between;

  a {
    display: flex;
    font-weight: bold;
    color: currentColor;
    align-items: center;
    text-transform: uppercase;
    -webkit-tap-highlight-color: transparent;

    &:not([href]) {
      opacity: 0.7;
      pointer-events: none;
    }

    @media (min-width: 500px) {
      span:after {
        content: ' Post';
      }
    }
  }

  svg {
    width: 3.5em;
    flex-shrink: 0;
    transition: transform 0.2s;
  }

  &__next,
  &__previous {
    path {
      stroke: currentColor;
    }
  }

  &__previous {
    &:hover svg {
      transform: translateX(-10px);
    }

    svg {
      margin-right: 1em;
    }
  }

  &__next {
    &:hover svg {
      transform: translateX(10px);
    }

    svg {
      margin-left: 1em;
    }
  }

  &__squares {
    svg {
      width: 1.5em;
    }

    @media (max-width: 350px) {
      display: none;
    }

    path {
      fill: currentColor;
    }
  }
}
</style>

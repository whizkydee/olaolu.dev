<template>
  <nav class="post-nav">
    <a
      rel="prev"
      :href="prevPost"
      class="post-nav__previous"
      :aria-hidden="!prevPost"
      @click="$ga.event('Post', 'click', 'Previous Post Link')"
    >
      <BowArrow direction="left" />
      <span>Previous</span>
    </a>

    <a
      :href="shelfURL"
      aria-label="Go to all posts"
      class="post-nav__squares"
      @click="$ga.event('Post', 'click', 'Post nav squares')"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#4c3eff"
          d="M.5 15.194V.7h14.494v14.494zM21.006 15.194V.7H35.5v14.494zM.5
          35.7V21.207h14.494V35.7zM21.006 35.7V21.207H35.5V35.7z"
        />
      </svg>
    </a>

    <a
      rel="next"
      :href="nextPost"
      class="post-nav__next"
      :aria-hidden="!nextPost"
      @click="$ga.event('Post', 'click', 'Next Post Link')"
    >
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
      return this.getPost(this.curPostIndex + 1)
    },

    prevPost() {
      return this.getPost(this.curPostIndex - 1)
    },

    curPostIndex() {
      return this.computedPosts.findIndex(p => p && p.id === this.post.id)
    },
  },

  methods: {
    getPost(index) {
      let { path } = this.computedPosts[index] || {}
      return path ? (this.DEV ? path : '/shelf' + path) : null
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

    &[aria-hidden='true'] {
      opacity: 0.7;
      pointer-events: none;
    }
    span {
      @media (min-width: 500px) {
        &:after {
          content: ' Post';
        }
      }

      @media (max-width: 349px) {
        font-size: 0.9em;
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
      height: 1.5em;
    }

    @media (max-width: 350px) {
      display: none;
    }

    path {
      fill: currentColor;
    }
  }
}

.is-tabbing .post-nav__squares:focus {
  outline-width: 2px;
}
</style>

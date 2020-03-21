<template>
  <Layout
    id="post-page"
    :title="$page.post.title"
    :description="$page.post.description"
  >
    <article id="post">
      <header class="post__header">
        <PostMeta :post="$page.post" />

        <h1 class="post__header-title">{{ $page.post.title }}</h1>
      </header>

      <div class="post__cover_image" v-if="$page.post.cover_image">
        <g-image
          alt="Cover image"
          v-if="$page.post.cover_image"
          :src="$page.post.cover_image"
        />
      </div>

      <div class="post__content" v-html="$page.post.content" />

      <footer class="post__footer">
        <div class="footer-meta">
          <PostTags :post="$page.post" :withTitle="true" />

          <div class="post__share">
            <a
              target="_blank"
              :href="fbShareURL"
              aria-label="Share this post on Facebook"
              @click="$ga.event('Post', 'click', 'Facebook share button')"
            >
              <FacebookIcon />
            </a>

            <a
              target="_blank"
              :href="twitterShareURL"
              aria-label="Share this post on Twitter"
              @click="$ga.event('Post', 'click', 'Twitter share button')"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>

        <PostNav :post="$page.post" :posts="$page.posts" />
      </footer>

      <Newsletter />
    </article>
  </Layout>
</template>

<script>
import PostNav from '~/components/PostNav'
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import { unslashEnd } from '@mrolaolu/helpers'
import { TwitterIcon, FacebookIcon } from '@saucedrip/core/icons'

export default {
  components: {
    PostNav,
    PostMeta,
    PostTags,
    TwitterIcon,
    FacebookIcon,
  },

  computed: {
    shareableURL() {
      return unslashEnd(unslashEnd(this.shelfURL) + this.$page.post.path)
    },

    fbShareURL() {
      const { title } = this.$page.post
      return `https://facebook.com/sharer/sharer.php?u=${encodeURI(
        `${this.shareableURL}&quote=${title}`
      )}`
    },

    twitterShareURL() {
      const { title } = this.$page.post
      return `https://twitter.com/intent/tweet?${encodeURI(
        `url=${this.shareableURL}&via=mrolaolu&text=${title}`
      )}`
    },
  },

  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'twitter:card',
          content: this.$page.post.cover_image
            ? 'summary_large_image'
            : 'summary',
        },
        { name: 'og:type', content: 'article' },
        { name: 'article:author', content: 'Olaolu Olawuyi' },
        { name: 'article:published_time', content: this.$page.post.date },
      ],
    }
  },
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    id
    title
    path
    date (format: "D MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }

   posts: allPost(
     order: ASC,
     sortBy: "date",
     filter: { published: { eq: true }}
    ) {
    edges {
      node {
        id
        path
      }
    }
  }
}
</page-query>

<style lang="scss">
#post {
  position: relative;
}

.post__header {
  padding: 1rem 0;
  text-align: left;

  &-title {
    color: var(--electric-blue);
    font-size: 2em;
    margin-bottom: 0;
  }
}

#post-page {
  .post-meta {
    padding-bottom: 0.6rem;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 2rem;

    time {
      margin-right: 7vw;
    }
  }
}

.post {
  &__cover_image {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__footer {
    display: flex;
    position: relative;
    flex-direction: column;

    > div,
    > nav {
      margin-bottom: 2.5rem;
    }

    .footer-meta {
      display: flex;
      margin-top: 1em;
      flex-wrap: wrap;
      align-items: baseline;
      justify-content: space-between;

      .post__tags {
        margin: 0;
        max-width: 70%;
        flex-wrap: wrap;
      }
    }
  }

  &__share {
    display: flex;
    position: relative;

    a {
      transition: 0.2s;
      position: relative;

      &:hover {
        transform: scale(1.5);
        filter: contrast(90%);
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
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}

.is-tabbing a:focus {
  outline-width: 2px;
}
</style>

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
        <PostTags :post="$page.post" />
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

export default {
  components: {
    PostNav,
    PostMeta,
    PostTags,
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

  &__content {
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }

    ul,
    ol {
      margin-left: 1.25em;
      margin-bottom: 1.25em;

      li {
        margin-bottom: 0.6em;
        list-style-type: inherit;
      }
    }

    ul {
      list-style-type: disc;
    }

    ol {
      list-style-type: decimal;
    }

    a {
      --fading-electric: rgba(72, 49, 212, 0.05);

      transition: 0.15s ease;
      color: var(--electric-blue);
      outline: 0.5em solid rgba(72, 49, 212, 0);
      border-bottom: 3px solid var(--fading-electric);

      &:hover {
        border-color: transparent;
        background: var(--fading-electric);
        outline: 3px solid var(--fading-electric);
      }
    }
  }

  &__footer {
    position: relative;

    div,
    nav {
      margin-bottom: 2.5rem;
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

.is__tabbing a:focus {
  outline-width: 2px;
}
</style>

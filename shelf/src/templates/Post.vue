<template>
  <Layout id="post-page">
    <article id="post">
      <header class="post__header">
        <PostMeta :post="$page.post" />

        <h1 class="post__header-title">{{ $page.post.title }}</h1>
      </header>

      <div class="post__coverImage" v-if="$page.post.coverImage">
        <g-image
          alt="Cover image"
          v-if="$page.post.coverImage"
          :src="$page.post.coverImage"
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
import Author from '~/components/Author'
import PostNav from '~/components/PostNav'
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    Author,
    PostNav,
    PostMeta,
    PostTags,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description,
        },
      ],
    }
  },
}
</script>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
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
    coverImage (width: 860, blur: 10)
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
  &__coverImage {
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
</style>

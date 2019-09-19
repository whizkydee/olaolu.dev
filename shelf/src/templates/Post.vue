<template>
  <Layout id="post-page">
    <article id="post">
      <div class="post-title">
        <PostMeta :post="$page.post" />

        <h1 class="post-title__text">
          {{ $page.post.title }}
        </h1>
      </div>

      <div class="post">
        <div class="post__header">
          <g-image
            alt="Cover image"
            v-if="$page.post.coverImage"
            :src="$page.post.coverImage"
          />
        </div>

        <div class="post__content" v-html="$page.post.content" />

        <div class="post__footer">
          <PostTags :post="$page.post" />
        </div>
      </div>

      <div class="post-comments">
        <!-- Add comment widgets here -->
      </div>

      <Author class="post-author" />
    </article>
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author.vue'

export default {
  components: {
    Author,
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
}
</page-query>

<style lang="scss">
.post-title {
  padding: 1rem 0;
  text-align: left;

  &__text {
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
  &__header {
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

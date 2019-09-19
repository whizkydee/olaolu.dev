<template>
  <Layout :show-logo="false" id="list-of-posts">
    <h1 class="text-center space-bottom no-select">
      <span style="opacity: 0.8">/</span>shelf
    </h1>
    <!-- List posts -->
    <ol class="posts">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </ol>
  </Layout>
</template>

<page-query>
{
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        path
        date (format: "D MMMM YYYY")
        description
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard,
  },
  metaInfo: {
    title: 'Posts',
  },
}
</script>

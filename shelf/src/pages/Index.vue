<template>
  <Layout
    id="list-of-posts"
    title="Posts - Olaolu's shelf"
    description="Articles on web development and design by Olaolu, expert frontend developer and UX Engineer"
  >
    <PageHeader title="shelf" noDot />
    <!-- List posts -->
    <ol class="posts" aria-label="Posts">
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
        date
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
import PostCard from '~/components/PostCard'

export default {
  components: { PostCard },
  metaInfo: {
    title: 'Posts',
  },
}
</script>

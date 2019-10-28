<template>
  <Layout
    id="tag-page"
    :title="`Posts tagged &quot;${$page.tag.title}&quot;`"
    :description="`All posts tagged &quot;${$page.tag.title}&quot;`"
  >
    <h1 class="page-heading"><span>#</span> {{ $page.tag.title }}</h1>

    <div class="posts">
      <PostCard
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D MMMM YYYY")
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: { PostCard },
  metaInfo() {
    return {
      title: `Posts tagged "${this.$page.tag.title}"`,
    }
  },
}
</script>

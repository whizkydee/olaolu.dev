<template>
  <Layout
    id="tag-page"
    :title="`Posts tagged &quot;${$page.tag.title}&quot;`"
    :description="`All posts tagged &quot;${$page.tag.title}&quot;`"
  >
    <PageHeader :title="' ' + $page.tag.title" preTitleSymbol="#" noDot />

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
            date
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
import PostCard from '~/components/PostCard'

export default {
  components: { PostCard },
  metaInfo() {
    return {
      title: `Posts tagged "${this.$page.tag.title}"`,
    }
  },
}
</script>

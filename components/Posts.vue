<template>
  <div>
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :userId="post.userId"
      :id="post.id"
      :title="post.title"
      :body="post.body"
    />
  </div>
</template>

<script>
import PostItem from '@/components/PostItem'

export default {
  components: {
    PostItem
  },
  computed: {
    posts () {
      return this.$store.getters.getPosts
    }
  },
  created() {
    this.$store.dispatch('fetchPosts')
  }
}
</script>

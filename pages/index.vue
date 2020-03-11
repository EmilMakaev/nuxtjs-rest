<template>
  <div class="container">
    <Posts />
  </div>
</template>

<script>
import Posts from '~/components/Posts.vue'

export default {
  components: {
    Posts
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

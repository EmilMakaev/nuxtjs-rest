<template>
  <div class="post-item">
    <ul>
      <li class="post-item-li">
        <p class="post-item-title">{{title}}</p>
        <p class="post-item-body">{{body}}</p>
        <button
          @click="deletePost"
          class="btn">Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    userId: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  methods: {
    deletePost() {
      this.$store.dispatch('deletePost', this.id)
    }
  }
}
</script>

<style>
.post-item {
  max-width: 400px;
  min-height: 200px;
}
.post-item-li {
  background-color: gray;
  min-height: 100px;
  margin: 10px;
  padding: 10px;
  color: white;
  border-radius: 5px;
  font-size: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.post-item-title {
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 10px;
}

.post-item-body {
  font-size: 19px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  display: flex;
}

.btn {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #ff5a5a;
  color: white;
  font-weight: bold;
  width: 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
}

.btn:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>

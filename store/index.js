import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, data) {
      state.posts = data
    },
    deleteItem(state, index) {
      state.posts.splice(index, 1);
      return state.posts;
    }
  },
  actions: {
    fetchPosts({
      commit
    }) {
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => {
          commit('setPosts', response.data);
        })
        .catch(e => console.log(e))
    },
    deletePost({
      commit
    }, postId) {
      const index = this.state.posts.findIndex(item => {
        return item.id === postId
      })
      commit('deleteItem', index);
    }
  },
  getters: {
    getPosts(state) {
      return state.posts;
    }
  }
})

export default store
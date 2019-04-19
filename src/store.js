import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    history: []
  },
  mutations: {
    setPosts (state, posts) {
      let postLength = 5
      state.posts.push(...posts.splice(0, postLength))
    },
    move (state, { index, direction, title }) {
      var old_index = index
      var new_index
      if (direction === 'up') {
        new_index = --index
      } else {
        new_index = ++index
      }
      if (new_index >= state.posts.length) {
        var k = new_index - state.posts.length + 1
        while (k--) {
          state.posts.push(undefined)
        }
      }
      state.posts.splice(new_index, 0, state.posts.splice(old_index, 1)[0])
      state.history.push({ 'post': title, 'old_index': old_index, 'new_index': new_index })
    },
    restore (state, { old_index, new_index, history_index }) {
      if (old_index >= state.posts.length) {
        var k = old_index - state.posts.length + 1
        while (k--) {
          state.posts.push(undefined)
        }
      }
      state.posts.splice(old_index, 0, state.posts.splice(new_index, 1)[0])
      state.history.splice(history_index, 1)
    }
  },
  actions: {
    async getPosts ({ commit }) {
      await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(({ data }) => {
          commit('setPosts', data)
        })
    }
  }
})

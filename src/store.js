import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    history: [].reverse()
  },
  mutations: {
    setPosts (state, posts) {
      let postLength = 5
      //get first 5 posts
      state.posts.push(...posts.splice(0, postLength))
    },
    move (state, { index, direction, title }) {
      var old_index = index
      var new_index
      //decide direction
      if (direction === 'up') {
        new_index = --index
      } else {
        new_index = ++index
      }
      //error check
      if (new_index >= state.posts.length) {
        var k = new_index - state.posts.length + 1
        while (k--) {
          state.posts.push(undefined)
        }
      }
      //moves post to new position
      state.posts.splice(new_index, 0, state.posts.splice(old_index, 1)[0])
      // adds current move to history
      state.history.unshift({ 'post': title, 'old_index': old_index, 'new_index': new_index })
    },
    restore (state, { old_index, new_index, history_index, title }) {
      //error check
      if (old_index >= state.posts.length) {
        var k = old_index - state.posts.length + 1
        while (k--) {
          state.posts.push(undefined)
        }
      }
      //retores previous state of posts
      state.posts.splice(old_index, 0, state.posts.splice(new_index, 1)[0])
      // remove move from history after restore
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

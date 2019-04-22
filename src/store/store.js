import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    history: [],
    error: ""
  },
  mutations: {
    setPosts (state, posts) {
      // console.log(posts)
      let postLength = 5
      // get first 5 posts
      state.posts.push(...posts.splice(0, postLength))
    },
    move (state, { index, direction, post }) {
      var old_index = index
      var new_index
      // decide direction
      if (direction === 'up') {
        new_index = --index
      } else {
        new_index = ++index
      }
      // moves post to new position
      state.posts.splice(new_index, 0, state.posts.splice(old_index, 1)[0])
      // generate unique id for each history
      let rand = Math.floor((Math.random() * 100) + 1);
      const id = post.id * rand * (state.history.length / new_index)
      // adds current move to history
      state.history.unshift({'id':id, 'title': post.title.substring(0, 10), 'old_index': old_index, 'new_index': new_index })
    },
    restore (state, { old_index, history_index }) {
     // Get the post we are trying to restore
     let title = state.history[history_index].title;
     let post = state.posts.find(post => post.title.substring(0, 10) == title);
     // Get current index in original posts
     let current_index = state.posts.indexOf(post);
    // retores previous state of posts
     state.posts.splice(old_index, 0, state.posts.splice(current_index, 1)[0])
    // remove move from history after restore if you want
    // state.history.splice(history_index, 1)
    }
  },
  actions: {
    async getPosts ({ commit,state }) {
      await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(({ data }) => {
          commit('setPosts', data)
        })
        .catch(error=>{
          state.error = "Error : Unable to fetch posts";
        })
    }
  }
})

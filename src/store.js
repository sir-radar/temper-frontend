import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts:[]
  },
  mutations: {
    setPosts(state,posts){
      let postLength = 5;
      state.posts.push(...posts.splice(0, postLength))

    },
    up(state,index){
      
    },
    down(state,index){
      
    }
  },
  actions: {
    async getPosts({commit}){
         await axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then(({data})=>{
                      // console.log(data)
                      commit('setPosts',data)
                    })
    
     }
  }
})

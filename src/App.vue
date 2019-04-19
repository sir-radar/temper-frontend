<template>
  <div id="app">
    <header>
      <div class="header_bg"></div>
    </header>

    <div class="d-flex justify-content-between align-items-start action_center">
      <div class="posts_list">
        <h2>Sortable Post List</h2>
       <!-- post -->
       <Post v-for="(post, index) in posts" :key="index" :post="post" :index="index"/>

      </div>
      <div class="time_travel">
        <div class="time_travel_title p-3">
          <h2>List of actions commited</h2>
        </div>
        <div class="times p-3">
         <!-- time -->
         <Time/>
        </div>

      </div>
    </div>
    
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations, mapGetters} from 'vuex';
import Post from '@/components/Post';
import Time from '@/components/Time';
export default {
  name: 'app',
  components: {
   Post,
   Time
  },
  async mounted(){
    await this.getPosts()
  },
  methods:{
    ...mapActions(['getPosts']),
  },
  computed:{
    ...mapState(['posts'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background-color: #F6F6F6;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
header {
  position: relative;
  height: 230px;
  overflow: hidden;
}

.header_bg {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #6457B5;
  transform: skewY(-10.2deg);
  transform-origin: top left;
}
.action_center{
  position: absolute;
  height: 500px;
  width: 80%;
  left: 10%;
  top: 5%;
  z-index: 100;

}
.posts_list{
  width: 45%;
  text-align: left;
  color: #FFF;
  //  overflow: scroll;
}

.time_travel{
  width: 45%;
  text-align: left;
  color: #000;
  background-color: #F6F6F6;
  border-radius: 4px;
  box-shadow: 1px 1px 3px #818181;
}
.time_travel_title{
  background: white;
  
  border-radius: 4px 4px 0px 4px;
}

</style>

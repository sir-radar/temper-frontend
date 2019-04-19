<template>
  <div class="d-flex justify-content-between align-items-center post">
    <h3 class="p-3">{{post.title.substring(0, 20)}}{{more()}}</h3>
    <div class="d-flex flex-column justify-content-center chevron pr-3">
      <i @click="up(index)" v-if="index !== 0" class="fas fa-angle-up arrow"></i>
      <i @click="down(index)" v-if="index !== (posts.length-1)" class="mt-3 fas fa-angle-down arrow"></i>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations, mapGetters} from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    post: Object,
    index: Number
  },
  methods:{
    ...mapMutations(['up','down']),
    more(){
      return this.post.title.length > 20 ? '...': ''
    }
  },
  computed:{
    ...mapState(['posts'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.post{
  background: #FFF;
  border-radius: 4px;
  box-shadow: 1px 1px 3px #818181;
  color: #000;
  margin-top: 1.5rem;
}
.chevron{
  height: 50px;
}
.arrow{
  color: #6457B5;
  cursor: pointer;
}
</style>

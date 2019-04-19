<template>
<transition name="fade">
  <div class="d-flex justify-content-between align-items-center post">
    <h3 class="p-3">{{reducedTitleLength(post)}}{{more()}}</h3>
    <div class="d-flex flex-column justify-content-center chevron pr-3">
      <i
        @click="move({index,direction:'up',title:reducedTitleLength(post)})"
        v-if="index !== 0"
        class="fas fa-angle-up arrow"
      ></i>
      <i
        @click="move({index,direction:'down',title:reducedTitleLength(post)})"
        v-if="index !== (posts.length-1)"
        class="mt-3 fas fa-angle-down arrow"
      ></i>
    </div>
  </div>
</transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Post',
  props: {
    post: Object,
    index: Number
  },
  methods: {
    ...mapMutations(['move']),
    more () {
      return this.post.title.length > 10 ? '...' : ''
    },
    reducedTitleLength (post) {
      return post.title.substring(0, 10)
    }
  },
  computed: {
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

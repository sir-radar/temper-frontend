<template>
  <div class="d-flex justify-content-between align-items-center post">
    <h3 class="p-3">{{reducedTitleLength()}}{{more()}}</h3>
    <div class="d-flex flex-column justify-content-center chevron pr-3">
      <i
        @click="move({index,direction:'up',post})"
        v-if="index !== 0"
        class="fas fa-angle-up arrow"
      ></i>
      <i
        @click="move({index,direction:'down',post})"
        v-if="index !== (posts.length-1)"
        class="mt-3 fas fa-angle-down arrow"
      ></i>
    </div>
  </div>
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
    reducedTitleLength () {
      return this.post.title.substring(0, 10)
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

</style>

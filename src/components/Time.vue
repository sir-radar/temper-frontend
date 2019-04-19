<template>
  <div class="time d-flex justify-content-between align-items-center" :class="{top_border_radius: index === 0, 'bottom_border_radius': index === (history.length-1)}">
    <h6>Moved {{history_item.post}} from index {{history_item.old_index}} to index {{history_item.new_index}}</h6>
    <button
      @click.prevent="restore({'old_index':history_item.old_index, 'new_index':history_item.new_index,'history_index':index })"
      class="time_btn"
      :disabled="index !== 0"
    >Time travel</button>
    <!-- Time travel should be in order of action commited not reversed -->
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Time',
  props: {
    history_item: Object,
    index: Number
  },
  methods: {
    ...mapMutations(['restore'])
  },
  computed: {
    ...mapState(['history'])
  }
}
</script>
<style scoped lang="scss">
.time{
  background-color: #FFF;
  padding: .5rem;
  margin-top: 2px;
}
.time_btn{
  padding: 10px;
  border: none;
  background-color: #00ff86;
  outline: none;
  border-radius: 4px;
  font-weight: 600;
}
.top_border_radius{
  border-radius: 4px 4px 0px 0px;
}
.bottom_border_radius{
  border-radius: 0px 0px 4px 4px;
}
</style>

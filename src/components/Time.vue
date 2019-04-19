<template>
  <div class="time d-flex justify-content-between align-items-center">
    <h6>Moved post 2 from index 2 to indx 1</h6>
    <button class="time_btn">Time travel</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>

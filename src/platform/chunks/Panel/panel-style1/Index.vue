<template>
  <div class="panel-box">
    <slot></slot>
  </div>
</template>

<script>
    export default {
      name: 'Index'
    }
</script>

<style scoped lang="stylus">
  .panel-box
    border-radius 10px
    background #fff
    margin 10px
</style>

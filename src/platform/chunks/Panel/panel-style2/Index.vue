<template>
    <div class="panel-box">
      <div class="title">{{title}}</div>
      <div class="body">
        <slot></slot>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'Index',
      props: ['title']
    }
</script>

<style scoped lang="stylus">
  .panel-box
    background #fff
    margin 10px
    .title
      height 36px
      line-height 36px
      background #60aee4
      font-size 16px
      color #fff
      padding  0 0 0 10px
    .body
      border 1px #60aee4 solid
</style>

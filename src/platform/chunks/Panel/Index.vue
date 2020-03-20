<template>
    <div class="panel-box">
      <Tabs v-model="name1" :animated="false" name="tab1-1">
        <TabPane label="数据表格1" tab="tab1-1">1</TabPane>
        <TabPane label="数据表格2" tab="tab1-1">2</TabPane>
      </Tabs>
    </div>
</template>

<script>
  import {Tabs, TabPane} from 'view-design'
  export default {
    name: 'Index',
    data () {
      return {
        name1: ''
      }
    },
    components: {
      Tabs,
      TabPane
    }
  }
</script>

<style scoped lang="stylus">
  .panel-box
    border-radius 10px
    background #fff
    margin 10px
</style>

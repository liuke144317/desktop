/**
* Created by OXOYO on 2017/12/24.
*
* 入口文件
*/

<style scoped lang="less" rel="stylesheet/less">
  .app-task-bar-icon-box {
    position: relative;
    bottom: 0;
    z-index: 5020;
    /*width: 100%;*/
    /*height: 100%;*/
    /*display: inline-block;*/
    // #0E2E49
    /*border-top: 1px solid rgba(14, 46, 73, .3);*/
    box-sizing: content-box;
    overflow: hidden;
    border-left: 1px rgba(255, 255, 255, 0.2) solid;
  }
</style>

<template>
  <div class="app-task-bar-icon-box">
    <WallpaperBackground></WallpaperBackground>
    <TaskBarIcon
      v-for="item in appData.iconList"
      :key="item.id"
      :info="item"
      type="app"
    ></TaskBarIcon>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import TaskBarIcon from './components/TaskBarIcon'

  export default {
    name: 'TaskBarIconBox',
    components: {
      TaskBarIcon
    },
    computed: {
      ...mapState('Platform/Admin', {
        appData: state => state.appData
      })
    }
  }
</script>

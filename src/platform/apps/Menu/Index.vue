<template>
  <div class="Menu-box">
    <div class="mb-header">
      <i class="hd-left iconfont icon-shebeizhongleifenbu"></i>
      <div class="hd-right" @click="close">
        <i class=" iconfont icon-guanbi"></i>
      </div>
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#282B34"
      text-color="#fff"
      @open=""
      @close="">
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    import {Menu, Submenu, MenuItem, MenuItemGroup} from 'element-ui'
    export default {
      name: 'Index',
      components: {
        'el-menu': Menu,
        'el-submenu': Submenu,
        'el-menu-item': MenuItem,
        'el-menu-item-group': MenuItemGroup
      },
      methods: {
        close () {
          let _t = this
          _t.$utils.bus.$emit('platform/application/Menu/close', false)
        }
      }
    }
</script>

<style scoped lang="stylus">
  .Menu-box
    writing-mode:lr-tb
    position: absolute
    z-index: 1900
    height: 100%
    background: #282B34
    transition:all 0.6s
    &>>>.el-menu
      border-right 0
    .mb-header
      display flex
      height 30px
      background #282B34
      color #fff
      width 100%
      font-size 0
      .hd-left,.hd-right
        display inline-block
        height 30px
        line-height: 30px
        width 50%
      .hd-left
        padding-left 5px
        flex-grow 1
      .hd-right
        width 30px
        text-align center
        &:hover
          background #D9504E
          color #fff
          cursor pointer
</style>

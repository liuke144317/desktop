<template>
  <div class="Menu-box">
    <div class="mb-header">
      <i class="hd-left iconfont icon-shebeizhongleifenbu"></i>
      <div class="hd-right" @click="close">
        <i class=" iconfont icon-guanbi"></i>
      </div>
    </div>
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      background-color="#282B34"
      text-color="#fff"
      @select="select">
      <el-menu-item v-for="(item, index) in menu.menuList" :index="index.toString()" :key="index">
        <img :src="item.imgSrc" alt="" width="18px" height="18px" v-default-img="imgUrl">
        <span slot="title" v-text="item.text"></span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    import {Menu, Submenu, MenuItem, MenuItemGroup} from 'element-ui'
    import {mapState} from 'vuex'
    export default {
      name: 'Index',
      components: {
        'el-menu': Menu,
        'el-submenu': Submenu,
        'el-menu-item': MenuItem,
        'el-menu-item-group': MenuItemGroup
      },
      data () {
        return {
          imgUrl: 'static/apps/Menu/yellowFolder.png'
        }
      },
      computed: {
        ...mapState('Platform/Menu', {
          menu: state => state.menu
        })
      },
      methods: {
        // 关闭菜单
        close () {
          let _t = this
          _t.$utils.bus.$emit('platform/application/Menu/close')
        },
        // select选中改变事件
        select (index) {
          let _t = this
          _t.$store.commit('Platform/Menu/list/set', {..._t.menu, menuIndex: index})
          _t.$utils.bus.$emit('platform/application/Menu/select/change')
        }
      },
      beforeDestroy () {
        let _t = this
        _t.$utils.bus.$off([
          'platform/application/Menu/close',
          'platform/application/Menu/select/change'
        ])
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

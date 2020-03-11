/**
* function:右侧未读消息面板
*/
<template>
  <div class="Drawer-box">
    <el-drawer
      title="未读消息"
      :visible.sync="drawer"
      :modal="modal"
    >
      <NoticeItem></NoticeItem>
    </el-drawer>
  </div>
</template>

<script>
    import { Drawer } from 'element-ui'
    import NoticeItem from './components/NoticeItem'
    export default {
      name: 'Index',
      components: {
        'el-drawer': Drawer,
        NoticeItem
      },
      data () {
        return {
          drawer: false,
          modal: false
        }
      },
      methods: {
        open () {
          this.drawer = !this.drawer
        }
      },
      created () {
        let _t = this
        // 监听Notice打开
        _t.$utils.bus.$on('platform/application/Notice/show', function () {
          _t.open()
        })
      }
    }
</script>

<style scoped lang="stylus">
  .Drawer-box>>>.el-drawer__header>span
    font-size 15px
    font-weight 600px
  .Drawer-box>>>.el-drawer
    width 350px!important
  .Drawer-box>>>:focus
    outline:0
  .Drawer-box
    writing-mode:lr-tb
  .Drawer-box>>>.el-drawer__header
    -webkit-box-align center
    -ms-flex-align center
    align-items center
    display -webkit-box
    display -ms-flexbox
    display flex
    margin-bottom 32px
    background rgba(0,0,0,.1)
    height 50px
    padding 0 10px
    font-weight 600
</style>

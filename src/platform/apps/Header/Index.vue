<template>
    <div class="header-box">
      <div class="hd-left">
        <div class="logo">
          <div class="img-box">
            <img src="http://m.sukeintel.com:9017/zdrjypsm/static/login/open/themes/images/v3/zdrjypsm_log_cloud_white_v2.png" alt="">
          </div>
        </div>
        <div class="parting-line">|</div>
        <div class="module" @click="open">自定义模块名称</div>
      </div>
      <div class="hd-right">
        <div class="name">欢迎您：苏珊</div>
        <div class="message"><i class="iconfont icon-xiaoxi"></i></div>
        <div class="doubt"><i class="iconfont icon-yiwen"></i></div>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'Index',
      methods: {
        open () {
          let _t = this
          console.log('打开')
          _t.$utils.bus.$emit('platform/application/header', true)
        }
      }
    }
</script>

<style scoped lang="stylus">
  .header-box
    background #0077D5
    width 100%
    height 50px
    display flex
    margin-top -50px
    font-size 0
    .hd-left
      font-size 0px
      .logo,.parting-line,.module
        display inline-block
        vertical-align top
        .img-box
          height 50px
          display table-cell
          vertical-align middle
          img
            height 25px
      .logo
        padding-left 10px
      .parting-line
        font-size 30px
        color  #fff
        height 50px
        padding 0 5px
      .module
        font-size 20px
        color #fff
        font-size 20px
        color #fff
        height 50px
        line-height 50px
        vertical-align middle
    .hd-right
      flex-grow 1
      text-align right
      .name,.message,.doubt
        display inline-block
        vertical-align top
        height 50px
        line-height 50px
        color #fff
      .name
        font-size 12px
        width 200px
        text-align center
      .message
        width 60px
        text-align center
      .doubt
        text-align left
        width 50px
</style>

<template>
    <div class="header-box">
      <div class="hd-left">
        <div class="logo">
          <div class="img-box">
            <img src="http://m.sukeintel.com:9017/zdrjypsm/static/login/open/themes/images/v3/zdrjypsm_log_cloud_white_v2.png" alt="">
          </div>
        </div>
        <div class="parting-line">|</div>
        <div class="module" @click="operationMenu">
          自定义模块名称
        </div>
      </div>
      <div class="hd-right">
        <div class="name">
            <div class="nm-head-box" @mouseenter="openUserInfo" @mouseleave="closeUserInfo">
              <div class="nm-head">
                <img width="100%" height="100%" src="static/apps/UserInfo/user.png" alt="">
              </div>
            </div>
            <div class="nm-name">欢迎您：苏珊</div>
            <div class="detail-info" :style="detailInfo" @mouseenter="openUserInfo" @mouseleave="closeUserInfo">
              <div class="description">
                <div class="des-img">
                  <img width="100%" height="100%" src="static/apps/UserInfo/user.png" alt="">
                </div>
                <div class="des-info">
                  <div>当前园区：1</div>
                  <div>姓名：苏珊</div>
                  <div>所在单位：2</div>
                </div>
              </div>
              <div class="user-option">
                <div class="uo-item">个人用户</div>
                <div class="uo-item">退出登录</div>
              </div>
            </div>
        </div>
        <div class="message" @click="openNotice">
          <Badge :value="12" class="item">
            <i class="iconfont icon-xiaoxi"></i>
          </Badge>
        </div>
        <div class="doubt"><i class="iconfont icon-yiwen"></i></div>
      </div>
    </div>
</template>

<script>
    import {Badge} from 'element-ui'
    export default {
      name: 'Index',
      components: {
        Badge
      },
      data () {
        return {
          detailInfo: {
            width: '260px',
            display: 'none'
          },
          timeOut: '',
          flag: false
        }
      },
      methods: {
        // 打开左侧Menu菜单面板
        operationMenu () {
          let _t = this
          if (!_t.flag) {
            _t.$utils.bus.$emit('platform/application/Menu/operation')
          }
        },
        // 打开右侧Notice面板
        openNotice () {
          let _t = this
          _t.$utils.bus.$emit('platform/application/Notice/show')
        },
        // 打开用户信息面板
        openUserInfo (event) {
          let _t = this
          clearTimeout(_t.timeOut)
          // 如果鼠标在用户信息面板，则不执行下面的操作
          if (event.target.className === 'detail-info') {
            return
          }
          let detailInfoWidth = parseInt(_t.detailInfo.width)
          let left = -(detailInfoWidth / 2) + event.target.offsetLeft + (event.target.offsetWidth / 2) + 'px'
          _t.detailInfo = {..._t.detailInfo, left: left, top: event.target.offsetWidth + 10 + 'px', display: 'block'}
        },
        // 关闭用户信息面板
        closeUserInfo () {
          let _t = this
          _t.timeOut = setTimeout(() => {
            _t.detailInfo = {..._t.detailInfo, display: 'none'}
          }, 200)
        }
      }
    }
</script>

<style scoped lang="stylus">
  height = 50px
  .header-box
    background #0077D5
    width 100%
    height height
    display flex
    margin-top -(height)
    font-size 0
    position relative
    .hd-left
      font-size 0px
      .logo,.parting-line,.module
        display inline-block
        vertical-align top
        .img-box
          height height
          display table-cell
          vertical-align middle
          img
            height 25px
      .logo
        padding-left 10px
      .parting-line
        border-left: 2px #fff solid;
        color: #fff;
        height: 20px;
        margin-top: 15px;
        margin-left: 5px;
        margin-right: 5px;
      .module
        font-size 20px
        color #fff
        font-size 20px
        color #fff
        height height
        line-height height
        vertical-align middle
        &:hover
          cursor pointer
    .hd-right
      flex-grow 1
      text-align right
      .name,.message,.doubt
        display inline-block
        vertical-align top
        height height
        line-height height
        color #fff
      .name
        width 200px
        text-align center
        position: relative
        .detail-info
          position absolute
          border-radius 5px
          background #fff
          z-index 2005
          border-radius: 5px;
          overflow: hidden;
          .description
            width 100%
            height 100px
            background #24B4FD
            position relative
            margin-bottom 10px
            .des-img
              height: 50px;
              width: 50px;
              background: #fff;
              border-radius: 50%;
              overflow: hidden;
              position: absolute;
              bottom: 0;
              top: 0;
              margin: auto;
              left: 20px;
            .des-info
              position: absolute;
              height: 60px;
              bottom: 0;
              top: 0;
              margin auto
              left: 80px;
              font-size 13px
              color #fff
              &>div
                height 20px
                line-height 20px
          .uo-item
            width 100%
            height 35px
            line-height 35px
            color #000
            text-align left
            padding 0 20px
            font-size 12px
            &:hover
              background #F0F8FD
        .nm-head-box,.nm-name
          display inline-block
          vertical-align top
          height height
          line-height height
        .nm-head-box
          width height
          height height
          position: relative;
          .nm-head
            position absolute
            height 30px
            width 30px
            margin auto
            background #fff
            top 0
            bottom 0
            right 0
            left 0
            border-radius 50%
            overflow hidden
          &:hover
            cursor pointer
        .nm-name
          font-size 12px
      .message
        width 60px
        text-align center
        &>>>.el-badge__content.is-fixed
          top:10px
          transform translateY(-50%) translateX(100%) scaleX(0.8) scaleY(0.8)
        &:hover
          cursor pointer
      .doubt
        text-align left
        width height
        &:hover
          cursor pointer
</style>

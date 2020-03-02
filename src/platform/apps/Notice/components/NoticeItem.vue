<template>
    <div class="item-box">
      <div class="ib-content">
        <div class="ib-left">
          <Badge :value="12" class="item">
            <i class="iconfont icon-IMliaotian-duihua"></i>
          </Badge>
        </div>
        <div class="ib-center">
          <div class="center-top">账单催缴处理</div>
          <div class="center-bottom">审核通过</div>
        </div>
        <div class="ib-right">
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </div>
      </div>
      <el-divider></el-divider>
    </div>
</template>

<script>
    import {Badge, Button, Divider} from 'element-ui'
    export default {
      name: 'NoticeItem',
      components: {
        Badge,
        'el-button': Button,
        'el-divider': Divider
      }
    }
</script>

<style scoped lang="stylus">
  .item-box>>>.el-divider--horizontal
      margin 10px
      width auto
  .ib-content
    display: flex
    padding 0 10px
    .ib-left
      width 52px
      text-align center
      border 1px #DCDFE6 solid
      border-radius 5px
      box-sizing: content-box;
      .iconfont
        font-size 35px
    .ib-center
      flex-grow 1
      text-align left
      padding 0 0 0 20px
      &>div
        height 27px
        line-height 27px
      .center-top
        font-size 15px
        font-weight 800
      .center-bottom
        font-size 13px
        color #999b9b
    .ib-right
      width 54px
      height 54px
      line-height 54px
      text-align center
      &>>>.el-button.is-circle
        padding 6px
</style>

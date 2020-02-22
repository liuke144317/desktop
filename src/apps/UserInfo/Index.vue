/**
* Created by OXOYO on 2017/12/24.
*
* 入口文件
*/

<style scoped>
  .box{
    width:100%;
    height: 100%;
    background: #fff;
  }
  .box>>>.el-tabs--left{
    height: 100%;
  }
  .box>>>.el-tabs__header{
    width: 150px;
    background: #F7F7F7;
  }
  .box>>>.el-tabs__item{
    color: #666;
    font-size: 14px;
    text-align: center;
  }
  .box>>>.el-tabs__item:hover{
    color: #409EFF;
  }
  .box>>>.is-active{
    background: #fff;
  }
  .content_title{
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    color: #999;
  }
  .box>>>.el-divider--horizontal{
    margin: 0;
  }
</style>

<template>
  <div class="box">
    <Tabs tab-position="left">
      <TabPane v-for="item in tabPane" :label="item.label" :key="item.label">
        <div class="content_title" v-text="item.value"></div>
        <Divider></Divider>
        <div></div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import { Tabs, TabPane, Divider } from 'element-ui'
  export default {
    name: 'SystemLog',
    components: {
      Tabs,
      TabPane,
      Divider
    },
    data () {
      return {
        tabPane: [
          {
            label: '基本资料',
            value: '基本资料'
          }, {
            label: '用户类型',
            value: '用户类型'
          }, {
            label: '修改密码',
            value: '修改密码'
          }, {
            label: '切换登录',
            value: '切换登录'
          }
        ]
      }
    },
    props: {
      info: {
        type: Object
      }
    },
    created: function () {
    },
    destroyed: function () {
    }
  }
</script>

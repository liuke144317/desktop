/**
* Created by OXOYO on 2018/4/24.
*
* 公共隐藏应用界面
*/

<style scoped lang="less" rel="stylesheet/less">
  .app-block {
    width: 100%;
    height: 100%;
    background: #fff;
    display: inline-block;

    .block-header {
      .title {
        display: inline-block;
        text-align: center;
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        font-size: 20px;
      }
    }
    .block-body {
      display: inline-block;
      text-align: center;
      width: 100%;

      .logo {
        height: 50px;

        img {
          width: 48px;
          height: 48px;
        }
      }
      .loading {
        display: inline-block;
        margin-top: 10px;

        .loading-icon{
          animation: loading-spin 1s linear infinite;
        }
        @keyframes loading-spin {
          from { transform: rotate(0deg);}
          50%  { transform: rotate(180deg);}
          to   { transform: rotate(360deg);}
        }
      }
      .complete {
        display: inline-block;
        width: 100%;
        text-align: center;
        height: 30px;
        line-height: 30px;
        font-size: 14px;

        &.complete-success {
          color: #19be6b;
        }
        &.complete-fail {
          color: #ed3f14;
        }
      }
      .button {
        margin-top: 50px;
      }
    }
  }
</style>

<template>
  <div class="app-block">
    <div class="block-header">
        <div class="title">{{ info.app_title || info.config.app.title }}</div>
    </div>
    <div class="block-body">
      <div class="logo">
        <img :src="info.config.app.icon" :alt="info.app_title || info.config.app.title">
      </div>
      <div class="loading" v-show="isLoading">
        <Spin fix>
          <Icon class="loading-icon" type="load-c" size=18></Icon>
          <div class="loading-text">隐藏应用中...</div>
        </Spin>
      </div>
      <div
        :class="{ 'complete': true, 'complete-success': isSuccess, 'complete-fail': !isSuccess }"
        v-show="isComplete"
      >
        <Icon :type="isSuccess ? 'checkmark-circled' : 'close-circled'"></Icon>
        {{ completeMsg }}
      </div>
      <Button class="button" type="primary" :disabled="isSuccess" v-show="!isLoading" @click="handleUninstall">立即隐藏应用</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Uninstall',
    props: {
      info: {
        type: Object
      }
    },
    data () {
      return {
        // 是否加载中
        isLoading: false,
        // 是否完成
        isComplete: false,
        // 是否成功
        isSuccess: false,
        // 完成提示信息
        completeMsg: ''
      }
    },
    methods: {
      handleUninstall: function () {
        let _t = this
        _t.isLoading = true
        // 广播事件 触发window事件 open
        _t.$utils.bus.$emit('platform/application/uninstall', {
          action: 'doUninstall',
          data: {
            appInfo: _t.info,
            callback: (isSuccess, msg) => {
              _t.isLoading = false
              _t.isComplete = true
              _t.isSuccess = isSuccess
              _t.completeMsg = msg || (isSuccess ? '隐藏应用成功！' : '隐藏应用失败！')
            }
          }
        })
      }
    }
  }
</script>

/**
* Created by OXOYO on 2017/12/24.
*
* 入口文件
*/

<style scoped>
  .app-nav{
    background: #0c4b8e;
    height: 74px;
    display: flex;
    margin-top: -74px;
  }
  .app-nav .hn-left, .app-nav .hn-right{
    width: 400px;
    height: 74px;
  }
  .hn-left .logo{
    display: flex;
    height: 74px;
    position: relative;
  }
  .hn-left .logo img{
    height: 28px;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translate(0,-50%);
  }
  .app-nav .hn-center{
    flex-grow: 1;
  }
  a:link, a:visited, a:active{
    text-decoration: none;
  }
  a {
    text-shadow: none;
    color: #337ab7;
  }
  .hn-center .topmenu{
    position: relative;
    background-color: transparent;
    width: 100%;
    height: 100%;
    text-align: center;
    z-index: 10002;
  }
  .topmenu .slider-container{
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 35px;
  }
  .topmenu .sc-left, .topmenu .sc-right{
    position: absolute;
    top: 0;
    color: #fff;
    width: 25px;
    height: 70px;
    line-height: 70px;
    display: none;
    cursor: pointer;
  }
  .topmenu .sc-left{
    left: -25px;
    border-radius: 10px 0 0 10px!important;
  }
  .topmenu .sc-right{
    right: -25px;
    border-radius: 0 10px 10px 0!important;
  }
  .slider-container .sc-center{
    width: 100%;
    display: flex;
    overflow: hidden;
  }
  .slider-container .m-slider{
    display: flex;
    height: 74px;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }
  .m-slider .nvabox-trigger, .m-slider #trigger-user{
    display: flex;
    flex-direction: column;
    width: 106px;
    height: 74px;
    line-height: 74px;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    box-sizing: border-box;
    padding: 5px 0;
  }
  .nvabox-trigger img, #trigger-user img{
    width: 40px;
    height: 40px;
    margin: auto;
    box-sizing: border-box;
    padding: 5px;
  }
  .nvabox-trigger .text, #trigger-user .text{
    height: 20px;
    font-size: 12px;
    line-height: 20px;
    font-weight: bold;
    color: #fff;
  }
  .hn-right{
    position: relative;
  }
  .hn-right .salutatory{
    color:#fff;
    font-size:12px;
    font-weight: 700;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate( 0, -50%);
  }
</style>

<template>
  <div class="app-nav">
    <div class="hn-left">
      <a href="javascript:void(0);" class="logo">
        <img class="logo-pic" src="http://m.sukeintel.com:9017/zdrjypsm/static/login/open/themes/images/v3/zdrjypsm_log_cloud_white_v2.png">
      </a>
    </div>
    <div class="hn-center">
      <div class="topmenu">
        <div class="slider-container" is_click="0">
          <div class="sc-left iconfont icon-icon-arrow-left2" @click="initSlider('left')" style="display: none;"></div>
          <div class="sc-center" style="justify-content: center;">
            <div class="m-slider" style="transform: translate(0px, 0px);">
              <span v-for="(item,index) in navData" class="nvabox-trigger" data-trigger="nvabox-park" :sapplytype="item.sapplytype" :style="index === 0 ? 'background-color: rgb(28, 98, 170)':''">
                <img :src="item.imgSrc">
                <span class="text">{{item.text}}</span>
              </span>
              <span id="trigger-user" data-trigger="nvabox-user" @click.stop="openUserInfo">
                <img src="http://m.sukeintel.com:9017/zdrjypsm/static/login/open/themes/images/v3/user.png">
                <span class="text">个人用户</span>
              </span>
            </div>
          </div>
          <div class="sc-right iconfont icon-icon-arrow-left2-copy" @click="initSlider('right')" style="display: none;"></div>
        </div>

      </div>
    </div>
    <div class="hn-right">
				<span class="salutatory">
					<span id="header-parkName" class="none">当前园区：<strong></strong></span>
					<span id="header-projectName" class="none" style="display:none">当前项目：<strong></strong></span>
					<br><span id="header-userType" class="none">姓名：<strong>平台管理员</strong></span>
					<br><span id="header-postName" class="none">所在单位：<strong></strong></span>
				</span>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Login',
    props: ['navData'],
    computed: {
      ...mapState('Platform/Admin', {
        appData: state => state.appData
      })
    },
    methods: {
      // 初始化左右滑块
      initSlider: function (handle) {
        // 获取sc-center宽度offsetWidth
        let maxWidth = document.querySelector('.sc-center').offsetWidth
        // 获取m-slider宽度
        let sliderWidth = document.querySelector('.m-slider').offsetWidth
        // 获取每个tab方块宽度
        let tabWidth = document.querySelector('.nvabox-trigger').offsetWidth
        // 偏移量
        let offset = 0
        // var sliderTransform = $('.m-slider').css('transform')
        let sliderTransform = document.querySelector('.m-slider').style.transform
        if (sliderTransform !== '' && sliderTransform !== undefined && sliderTransform !== 'none') {
          offset = sliderTransform.substring(sliderTransform.indexOf('(') + 1, sliderTransform.indexOf('p'))
        }
        if (handle === undefined) {
          if (sliderWidth > maxWidth) {
            document.querySelector('.sc-right').style.display = 'block'
            document.querySelector('.sc-center').style.justifyContent = ''
          } else {
            document.querySelector('.sc-left').style.display = 'none'
            document.querySelector('.sc-right').style.display = 'none'
            document.querySelector('.sc-center').style.justifyContent = 'center'
            document.querySelector('.m-slider').style.transform = 'translate(0,0)'
          }
          if (Math.abs(offset) + maxWidth >= sliderWidth) {
            document.querySelector('.sc-right').style.display = 'none'
          }
          return false
        }
        let isClick = document.querySelector('.slider-container').getAttribute('is_click')
        document.querySelector('.slider-container').setAttribute('is_click', '1')
        if (isClick === '1') {
          return false
        }
        setTimeout(function () {
          document.querySelector('.slider-container').setAttribute('is_click', '0')
        }, 400)
        let newoffset = 0
        if (handle === 'left') {
          document.querySelector('.sc-right').style.display = 'block'
          newoffset = parseInt(offset) + (parseInt(maxWidth / tabWidth) * tabWidth)
          if (newoffset > 0) {
            newoffset = 0
          }
          if (newoffset === 0) {
            document.querySelector('.sc-left').style.display = 'none'
          }
        }
        if (handle === 'right') {
          newoffset = parseInt(offset) - (parseInt(maxWidth / tabWidth) * tabWidth)
          document.querySelector('.sc-left').style.display = 'block'
          if (Math.abs(newoffset) + maxWidth >= sliderWidth) {
            document.querySelector('.sc-right').style.display = 'none'
          }
        }
        document.querySelector('.m-slider').style.transform = 'translate(' + newoffset + 'px,0px)'
      },
      openUserInfo: function () {
        let _t = this
        let iconList = ''
        _t.$store.commit(_t.$utils.store.getType('Admin/appData/set', 'Platform'), {
          ..._t.appData,
          iconList: iconList
        })
      }
    },
    created () {
      let _t = this
      window.onresize = function () {
        _t.initSlider()
      }
      this.$emit('')
    },
    mounted () {
      this.initSlider()
    }
  }
</script>

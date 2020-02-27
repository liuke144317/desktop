<template>
  <div>
    <div class="main-header">
      <div class="header-box fn-clear">
        <div class="header-brand fn-left">
          <a href="" class="brand-img">
            <img src="@@/login/open/themes/images/v3/zdrjypsm_log_cloud_v2.png" alt="">
          </a>
        </div>
        <div class="header-nav">
          <div class="nav-menu fn-clear">
            <div class="nav-list">
              <a href="" class="nav-list-a">首页</a>
            </div>
            <div class="nav-list">
              <a href="" class="nav-list-a">招商中心</a>
            </div>
            <div class="nav-list">
              <a href="" class="nav-list-a">产业服务</a>
            </div>
            <div class="nav-list">
              <a href="" class="nav-list-a">新闻中心</a>
            </div>
            <div class="nav-list">
              <a href="" class="nav-list-a">联系我们</a>
            </div>
          </div>
        </div>
        <div class="nav-right fn-right">
          <div class="search-box">
            <div class="search_bar" id="J_searchBar">
              <form name="search" id="J_form" action="./search">
                <input class="search-input" tabindex="0" autocomplete="off" name="search" id="J_search">
                <button class="search-btn" type="submit" id="J_submit"></button>
                <span class="search_ico"></span>
              </form>
            </div>
          </div>
          <div class="nav-login">
            <a href="" class="sky-eyes-login"><p class="login-btn">登录</p><p class="login-btn">注册</p></a>
          </div>
        </div>
      </div>
    </div>
    <div class="main-login-bg">
      <div class="form">
        <div id="login_tab">
          <div class="tab-wrap">
            <div class="login_tab_box">
              <form class="login_tab_form normal" name="loginForm" id="login_form" method="post" action="">
                <div class="div_title"><span>用户登录</span></div>
                <div class="div_user"><span></span><input  name="sUserName" id="normal_username" class="username" type="text" placeholder="用户名/手机号码" v-model="login.username"/></div>
                <div class="div_pw"><span></span><input name="sPassword" id="normal_pw" class="pw" type="password" placeholder="密码" v-model="login.password"/></div>
                <div id="div_code" class="div_code" style="display: none;">
                  <input name="CODE" id="code_input" class="username code" type="text" placeholder="请输入验证码" v-model="login.code_input"/>
                  <div class="img-code">
                    <div id="codeImg" class="code_img"></div>
                  </div>
                </div>
                <div class="div_box"><a class="forgetPw" href="forget">忘记密码？</a></div>
                <div><input class="login_btn" id="loginBtn" type="button" value="登录"  @click="userLogin"/></div>
                <div class="login-tips" id="loginTips">&nbsp;</div>
              </form>
            </div>
            <div class="login_register">
              <p>您还没有注册用户？<a class="a-link" href="">立即注册</a>&nbsp;</p>
            </div>
          </div>
        </div>
        <div class="app_download">
          <img id="erweima_code" src="@@/static/login/open/themes/images/v3/zdrjypsm-code.png">
          <p>扫码下载手机APP</p>
          <div class="app_download_bg"></div>
        </div>
      </div>
    </div>
    <div class="main-footer" style="width:1000px">
      <a href="http://www.cc-sp.com.cn/" target="_blank">长沙中电软件园</a> |<a href="" target="_blank">长沙中电软件园APP下载</a> | <a href="http://www.cc-sp.com.cn/contact-%25E8%2581%2594%25E7%25B3%25BB%25E6%2596%25B9%25E5%25BC%258F-1.html" target="_blank">联系我们</a> | 版权所有： 长沙中电软件园有限公司 湖南苏科智能科技有限公司
    </div>
  </div>
</template>
<script>
    // import 'jquery'
    import {GVerify} from '@@/Jquery/jquery.codeVerify.js'
    export default {
      name: 'Index',
      data () {
        return {
          login: {
            username: '',
            password: '',
            code_input: ''
          }
        }
      },
      methods: {
        // 用户登录
        userLogin () {
          let _t = this
          let verifyCode = new GVerify('codeImg')
          _t.loginVerify(this.login.username).then(res => {
            if (res === '用户名不存在！' || res === '') {
              $('#div_code').css({display: 'none'})
              $('#login_tab').css({height: '340px', top: '145px'})
            }
            $('#loginBtn').val('登录中...').attr('disabled', 'disabled')
            _t.login.password = $.trim(_t.login.password)
            let res1 = false
            let tipMsg = '请输入验证码!'
            if (res === '密码已错误三次,请输入验证码！') {
              $('#div_code').css({display: 'block'})
              $('#login_tab').css({height: '400px', top: '100px'})
              res1 = verifyCode.validate(document.getElementById('code_input').value)
              tipMsg = res
            } else {
              res1 = true
            }
            $('#loginTips').css({display: 'none'})
            if (res === '用户名不存在！') {
              $('#loginTips').html('用户名不存在!').fadeIn()
              $('#loginBtn').val('登录').removeAttr('disabled')
            } else if (_t.login.password === '') {
              $('#loginTips').html('请输入正确的密码!').fadeIn()
              $('#loginBtn').val('登录').removeAttr('disabled')
              return false
            } else {
              if (res1) {
                $('#loginTips').html(' &nbsp; ').fadeIn()
              } else {
                $('#loginTips').html(tipMsg).fadeIn()
                $('#loginBtn').val('登录').removeAttr('disabled')
                return false
              }
              // 登录请求
              let types = _t.$utils.store.getType('Login/doLogin', 'Platform')
              _t.$store.dispatch(types, this.login)
                .then(res => {
                  console.log('res', res)
                  if (res[0].msg === '') {
                    // 进入首页
                    _t.$store.commit(_t.$utils.store.getType('userInfo/update', 'Platform'), {
                      isLogin: true
                    })
                    console.log('进入首页', res)
                  } else {
                    $('#loginTips').html(res[0].msg).fadeIn()
                    $('#loginBtn').val('登录').removeAttr('disabled')
                  }
                }, err => {
                  console.log('登录失败', err)
                })
            }
          }, rej => {
            console.log('登录失败', rej)
          })
        },
        // 用户名验证
        loginVerify (username) {
          let _t = this
          let types = _t.$utils.store.getType('Login/doLoginVerify', 'Platform')
          let res = _t.$store.dispatch(types, username)
          return res
        }
      }
    }
</script>
<style src="@@/oldCss/login-register.css"></style>
<style src="@@/oldCss/main-base.css"></style>
<style scoped>
  #login_tab{top: 145px;right:100px;border-top-right-radius:0px;border-bottom-right-radius:0px;box-shadow: 1px 2px 10px 0 #9e9e9e;}
  .app_download{width:200px;height:340px;position:absolute;top:145px;right:-100px;}
  .app_download .app_download_bg{width:200px;height:340px;position: absolute;top:0px;right:0px;border-top-right-radius:5px;border-bottom-right-radius:5px;background:rgba(0, 0, 0, 0.4);z-index:1}
  .app_download #erweima_code{width:110px;height:110px;margin:85px auto 40px auto;display:block;z-index:9999;position: relative;}
  .app_download p{position: relative;text-align:center;color:#fff;z-index:9999;display:block;font-size:14px;}
  .app_download p:before,.app_download p:after{content: "";width:30px;border-top: 1px solid #fff; display: inline-block;vertical-align: middle;}
  .app_download p:before{margin-right:5px;}
  .app_download p:after{margin-left:5px;}

</style>

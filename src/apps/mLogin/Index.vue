<template>
  <div>
    <div class="main-header">
      <div class="header-box fn-clear">
        <div class="header-brand fn-left">
          <a href="" class="brand-img">
            <img src="static/login/open/themes/images/v3/zdrjypsm_log_cloud_v2.png" alt="">
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
          <img id="erweima_code" src="static/login/open/themes/images/v3/zdrjypsm-code.png">
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
    import {GVerify} from '../../../static/Jquery/jquery.codeVerify.js'
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
<style scoped>
  a,address,b,big,blockquote,body,center,cite,code,dd,del,div,dl,dt,em,fieldset,font,form,h1,h2,h3,h4,h5,h6,html,i,iframe,img,ins,label,legend,li,ol,p,pre,small,span,strong,u,ul,var{margin:0; padding:0}
  article,aside,details,figcaption,figure,footer,header,main,nav,section,summary{display:block}
  hr{-moz-box-sizing:content-box; box-sizing:content-box; height:0}
  button,html input[type=button],input[type=submit]{-webkit-apperance:button; cursor:pointer}
  button[disabled],html input[disabled]{cursor:default}
  ol,ul,li{list-style:none}
  img{border:0; vertical-align:middle}
  em,i,small{font-style:normal}
  .fl{float:left}
  .fr{float:right}
  .al{text-align:left}
  .ac{text-align:center}
  .ar{text-align:right}
  .hide{display:none}
  .clear,.clr{display:block; overflow:hidden; clear:both; height:0; line-height:0; font-size:0}
  .clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden}
  .clearfix{*zoom:1}
  .w{width:1200px; margin:0 auto}
  body{font:12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif; -webkit-font-smoothing:antialiased; color:#666; background:#fff}
  a{color:#666; text-decoration:none}
  a:hover{text-decoration:none}

  .main-header{width:100%;min-width:1000px;height:80px;background-color:#fff;}
  .header-box{width: 1000px;height: 80px;margin: 0 auto;box-sizing: border-box;position: relative;}
  .header-brand{height: 80px;line-height: 80px;float: left;}
  .header-brand a{vertical-align: middle;}
  .header-brand a, .header-brand img{display: inline-block;width:140px;border: none;}
  .header-nav{width:600px;margin-left: 320px;}
  .nav-menu .nav-list{float: left;position: relative;padding: 0 15px;box-sizing: border-box;}
  .nav-menu .nav-list{height: 80px;line-height:80px;}
  .nav-menu .nav-list a{text-decoration: none;cursor: pointer;}
  .nav-menu .nav-list a:hover{color: #1e7ff2}
  .nav-menu .nav-list-a{font-size: 14px;color: #000;}
  .nav-right{position: absolute;height: 24px;top: 50%;right: 0;margin-top: -12px;float: right;}
  .nav-login, .search-box{display: inline-block;vertical-align: middle;}
  .search_bar{position: relative;border: 1px solid #1e7ff2;-webkit-border-radius: 4px;border-radius: 4px;float: right;width:120px;min-width: 22px;height: 22px;line-height: 22px;transition: width .3s;-webkit-backface-visibility: hidden;overflow: hidden;}
  .search-btn, .search-input, .search_ico{height: 22px;line-height: 22px;position: absolute;top: 0;right: 0;background: transparent;color: #1e7ff2;}
  .search-input{outline: 0;border: none;outline: none;width:94px;z-index: 10;padding: 0 20px 0 6px;}
  .search-btn, .search_ico{display: block;cursor: pointer;width: 22px;border: 0;}
  .search_ico{background:#1e7ff2 url(https://zos.alipayobjects.com/rmsportal/MbuRuHwqpXHxMEb.png);background-position: 50%;background-size: 14px 14px;background-repeat: no-repeat;z-index: 90;}
  .nav-login{width: 90px;height: 22px;line-height: 22px;border: 1px solid #1e7ff2;-webkit-border-radius: 4px;border-radius: 4px;margin-left: 8px;}
  .login-btn{display: block;width: 50%;border: 0;font-size: 14px;text-align: center;vertical-align: middle;float: left;position: relative;color: #1e7ff2;}
  .login-btn a{color: #1e7ff2;text-decoration: none;cursor: pointer;}
  .login-btn:nth-child(1):after{content: '';display: block;position: absolute;right: 0;top: 0;bottom: 0;width: 1px;height: 40%;background: #1e7ff2;margin: auto;}

  .main-login-bg{width:100%; min-width:1000px; height:620px; background:url('../../../static/apps/MLogin/zdrjypsm_login_bg.png') center center no-repeat;}
  .form{width:1000px; margin:0 auto;padding:0;height:100%;position:relative;}
  #login_tab{width:400px;height:340px;background-color:#fff;position:absolute;top:145px;right:50px;border-radius:5px;box-shadow:1px 3px 20px 0 #9e9e9e;}
  #login_tab .tab-wrap{width:330px;margin:0px auto;}
  #login_tab .login_tab_box,
  #login_tab .login_register{width:100%;margin:0 auto;}
  #login_tab .login_tab_box{margin-top:35px;}
  #login_tab .login_tab_box .login_tab_form{display:block;}
  #login_tab .login_tab_box .div_title{margin-bottom:20px;}
  #login_tab .login_tab_box .div_title span{height:26px;line-height:26px;text-align:left;font-size:16px;font-weight:700;color:#1e7ff2;display:block;font-family:"Microsoft YaHei",tahoma,arial,'Hiragino Sans GB',sans-serif}
  #login_tab .username,
  #login_tab .pw{width:100%; padding:10px 0px; border:1px solid #b6b6b6; height:20px; line-height:20px; margin-bottom:10px;color:#666;text-indent:45px;}
  #login_tab .div_user,
  #login_tab .div_pw, #login_tab .div_code{position:relative;}
  #login_tab .div_user span,
  #login_tab .div_pw span{position:absolute; left:15px; top:12px; width:16px; height:18px; background:url(../../../static/apps/MLogin/iphone.png) 0 -480px no-repeat; z-index:1;}
  #login_tab .div_pw span{background-position:0 -506px;}
  #login_tab .slider{width:100%;background:#f2f2f2;border:1px solid #b6b6b6;}
  #login_tab .slider .label{line-height:36px;color:#7dabdf;border:0;top:1px;}
  #login_tab .div_box{margin-top:15px; height:20px; line-height:20px; position:relative;text-align:right}
  #login_tab .login_btn{display:block; width:100%;box-shadow:0 2px 1px #999; margin-top:15px;height:50px; text-align:center; font:bold 16px/50px tahoma,arial,Microsoft YaHei; border:none; border-radius:4px; color:#fff; cursor:pointer; background:#1e7ff2;letter-spacing:6px;}
  #login_tab .login_btn:hover{background:#0c5ec0}
  #login_tab .login-tips{line-height:30px; text-indent:5px;color:#7dabdf}
  #login_tab .login_register .a-link{color:#1e7ff2}

  #login_tab .code{width:65%;text-indent:15px;}
  #login_tab .img-code{width:30%;float:right;height:40px;border:1px solid #b6b6b6;cursor:pointer;}
  #login_tab .img-code .code_img{width:100%;height:100%;display:block}

  .main-footer{margin:20px auto;min-width:1000px;font-size:12px; text-align:center;color:#666;padding-bottom:30px}
  .main-footer a:hover{color:#1e7ff2}

  /*banner*/
  .banner-box{width:100%;overflow: hidden;text-align:center;position: relative;}
  .banner ul{list-style:none;width:300%;}
  .banner ul li{display:block;float:left;width:33%;height:400px;-ms-background-size:cover;background-size:cover;background-position:50%;box-shadow:inset 0 -3px 6px rgba(0,0,0,.1);}
  #banner{width:1920px;margin:0 auto}
  #banner .dots{position: absolute;left: 0;right: 0;bottom:15px;}
  #banner .dots li{display: inline-block;width: 10px;height: 10px;margin: 0 6px;text-indent: -999em;border: 2px solid #fff;border-radius: 6px;cursor: pointer;opacity: .4;-webkit-transition: background .5s, opacity .5s;-moz-transition: background .5s, opacity .5s;transition: background .5s, opacity .5s;}
  #banner .dots li.active{background: #fff;opacity: 1;}

  .banner01 {width:100%;min-width: 1024px; position: relative;height:30px}
  .haveImg{height:400px}
  .banner01.haveImg img{width:100%;height:400px;}
  .banner01 .position-box{background: rgba(0, 0, 0, 0.4);height: 30px;width: 100%;position: absolute; bottom: 0;}
  .banner01 .position-box .position{width: 1000px;margin: 0 auto;text-align: right; color: #fff;line-height: 30px;}
  .banner01 .position-box .position ul{float: right}
  .banner01 .position-box .position ul li{float:left}
  .banner01 .position-box .position ul li,.banner01 .position-box .position ul li a{font-size:14px;line-height:30px;color:#fff;}

  /*warp*/
  .warp{ width: 100%;  position: relative;}
  .warp .content{width: 1000px;margin: 0 auto; position: relative;}

  .park-introduction{position: relative;padding-top:60px;margin:0 auto;padding-bottom:120px; }
  .park-introduction h3 {font-size:24px;color: #464646;text-align: center;height:30px;line-height:30px;margin-bottom:20px;font-weight: normal;position: relative;letter-spacing:2px;}
  .park-introduction p.text{width:600px;display:block;text-align: justify;font-size:12px; line-height:24px;letter-spacing: 1px;color:#444}
  .park-introduction span.more{float: right;text-align: center;width:150px;margin-top:55px;display: block;background: #1e7ff2;border-radius:5px;text-decoration: none;height:35px;line-height:35px; color: #fff;font-size:14px;display: block}
  .warp .content .code{position:absolute;width: 320px;height:119px;top:-90px;left:0px;z-index:10}
  .warp .content .hose{position:absolute;width: 336px;height:357px;top:115px;right:0px;z-index:10}

  .warp_bg{height:200px;position:relative;background:url(../../../static/apps/MLogin/wrap_bg.png) 0 0px no-repeat;padding-top:95px;}
  .content-data{padding:0px;width:912px;margin:0 auto;}
  .content-data .data-box{width:150px; height:200px; display: inline-block;margin-right:100px;text-align: center;}
  .content-data .data-box:last-child{margin-right: 0;}
  .data-box .box-img{width: 150px; height: 135px; display: table-cell; text-align: center; vertical-align: middle;}
  .data-box .box-img img{width: 135px; height: 135px;border:none}
  .data-box .box-link{padding:0;}
  .data-box a{display:block; text-decoration: none; height: 30px; line-height: 30px; color: #666; font-size:16px;font-weight:bold;font-family: Microsoft Yahei,sans-serif;}

  .js-silder{width: 1000px;margin:20px auto;position: relative;}
  .silder-scroll{width: 1000px;height: 220px;overflow: hidden;}
  .silder-main{width:9999px;height: 220px;position: relative;}
  .silder-single{position: absolute;top: 0;left: 0;width:1000px}
  .js-silder-ctrl{margin-top: 10px;text-align: center;position:relative;height:24px;}
  .silder-ctrl-prev, .silder-ctrl-next{;position: absolute;top: 50%;margin-top: -65px;width: 30px;height: 45px;cursor: pointer;background: url(../../../static/apps/MLogin/icon_v9.png) no-repeat 5px 5px;}
  .silder-ctrl-prev{left:-30px;}
  .silder-ctrl-next{right:-30px;background-position: -5px -40px;}
  .silder-ctrl-con{display: inline-block;width: 32px;height: 20px;margin: 0 10px;cursor: pointer;text-indent: -100px;overflow: hidden;background: url(../../../static/apps/MLogin/icon_v9.png) no-repeat -32px -112px;}
  .current{background: url(../../../static/apps/MLogin/icon_v9.png) no-repeat 0px -92px ;}

  .news-title{padding:0px;font-size:24px;color: #464646;height:40px;line-height:40px;text-align: center;letter-spacing:2px;display:block;margin-bottom:20px;}
  .news-warp {position: relative;width:1000px;overflow: hidden;height:150px}
  .news-warp .news_list li{float:left;display:block;width:500px; margin:0px auto;}
  .row-listWithImage { border-radius: 6px; overflow: hidden;background:#fff;}
  .row-listWithImage .intro,
  .row-listWithImage .poster { height: 150px; overflow: hidden; }
  .row-listWithImage .poster { width: 230px; float: left; background-size: cover; background-position: center center; background-repeat: no-repeat; background-color: #1e7ff2;}
  .row-listWithImage .intro { position: relative; margin-left: 230px; padding: 0 20px;}
  .row-listWithImage .intro h3 {font-size:14px;margin-bottom:8px; padding-top:10px;white-space: pre; text-overflow: ellipsis;overflow: hidden;}
  .row-listWithImage .intro .text { height:80px; overflow: hidden; font-size:12px; line-height:20px; text-align: justify;text-indent:20px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:4; overflow: hidden;}
  .row-listWithImage .intro .text,
  .row-listWithImage .intro .date {color: #777;}
  .row-listWithImage .intro .date {font-size:14px; float: right;margin-top:15px;}

  .hezuo_logo{width: 1006px; overflow: hidden;position: relative;margin: 0 auto;}
  .roll-wrap {position: relative;width:1000px; height:76px;overflow: hidden;margin: 35px auto}
  .roll-wrap .roll__list::before,
  .roll-wrap .roll__list::after{content:"";display:table;line-height:0}
  .roll-wrap .roll__list::after{clear:both}
  .roll-wrap .roll__list{width:9999px;position:absolute;top:0;}
  .roll-wrap .roll__list li{float:left;display:block;margin-right:30px;width:220px; height:67px;border:1px solid #d6d6d6;padding:1px}
  /*footer*/
  .warp-footer{width: 100%;position: relative;background-color: #999999;}
  .warp-footer .content {width: 1000px;margin: 0 auto; position: relative; padding: 36px 0px 60px;color:#fff;}
  .warp-footer .content:after {visibility: hidden;display: block;font-size: 0;content: " ";clear: both;height: 0;}
  .warp-footer .foot-logo{float: left;}
  .warp-footer .foot-conter{float:right;}
  .warp-footer .foot-conter p{margin:20px 0px;position:relative;text-align:left;font-size:13px;color:#e8e5e5;letter-spacing:1px;}
  .warp-footer .foot-conter ul{position:relative;height:30px}
  .warp-footer .foot-conter ul li{line-height:30px;font-size:14px;float:left;margin-right:80px}
  .warp-footer .foot-conter dl{float:left;margin-right:80px;}
  .warp-footer .foot-conter dl dd{line-height:26px;font-size:14px;}
  .warp-footer .foot-conter a{color:#fff}
</style>

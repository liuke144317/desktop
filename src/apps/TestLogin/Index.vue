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
                <div class="div_user"><span></span><input  name="sUserName" id="normal_username" class="username" type="text" placeholder="用户名/手机号码" /></div>
                <div class="div_pw"><span></span><input name="sPassword" id="normal_pw" class="pw" type="password" placeholder="密码" /></div>
                <div id="div_code" class="div_code" style="display: none;">
                  <input name="CODE" id="code_input" class="username code" type="text" placeholder="请输入验证码" />
                  <div class="img-code">
                    <div id="codeImg" class="code_img"></div>
                  </div>
                </div>
                <%--<div class="div_box"><a class="forgetPw" href="forget">忘记密码？</a></div>--%>
                <div><input class="login_btn" id="loginBtn" type="button" value="登录" /></div>
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
    export default {
      name: 'Index'
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
</style>

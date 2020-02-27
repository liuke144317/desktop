/**
 * Created by OXOYO on 2017/12/24.
 *
 * 接口
 */

import Vue from 'vue'
import Qs from 'qs'

export default {
  // 执行登录
  doSignIn: async (data) => {
    let res = await Vue.prototype.$http.post('/Platform/user/signIn', data)
    return res
  },
  // myLogin 登陆验证
  doLoginVerify (sUserName) {
    let promise = new Promise((resolve, reject) => {
      let flag = ''
      Vue.prototype.$get('/psm_Web_exploded/login_verify', {sUserName})
        .then(res => {
          flag = res[0].msg
          resolve(flag)
        })
        .catch(err => {
          flag = 'error'
          console.log('用户名验证异常', err)
          reject(flag)
        })
    })
    return promise
  },
  // myLogin登录
  doLogin (item) {
    let data = Qs.stringify({
      sUserName: item.username,
      sPassword: item.password,
      CODE: item.code_input
    })
    return Vue.prototype.$post('/psm_Web_exploded/login_login', data)
  }
}

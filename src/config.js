/**
 * Created by OXOYO on 2017/12/24.
 *
 */

// 服务配置
export const Serv = {
  // development: '//localhost:3000/api/v3.0.1',
  development: 'http://112.74.31.208:3000/api/v3.0.1',
  // production: '//x-webdesktop-api-koa.herokuapp.com/api/v2.0.0'
  production: '//47.93.49.248/x-webdesktop-api/v3.0.1'
}

// cookie相关配置
export const Cookie = {
  prefix: 'x-',
  keys: {
    account: 'account',
    token: 'key',
    userType: 'user-type',
    userCode: 'user-code'
  },
  getItem: function (key) {
    return key ? this.prefix + this.keys[key] : ''
  },
  path: {
    development: '/',
    production: '/X-WebDesktop-Vue'
  }
}

// 系统配置
export const System = {
  author: 'OXOYO',
  repository: {
    type: 'github',
    url: 'https://github.com/OXOYO/X-WebDesktop-Vue'
  },
  version: '3.0.1',
  name: 'X-WebDesktop-Vue',
  title: 'X-WebDesktop-Vue',
  subtitle: 'X-WebDesktop-Vue',
  logo: './static/logo.png',
  copyright: '© 2017 - 2018 OXOYO'
}

// 页面宽高配置
export const pageSize = {
  // 默认所有应用窗口宽高
  width: '600',
  height: '450',
  // 特殊指定某应用宽高
  appoint: [
    {
      appName: 'UIComponent',
      width: '700',
      height: '500'
    }
  ]
}

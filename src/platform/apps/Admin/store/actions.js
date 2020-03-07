/**
 * Created by OXOYO on 2017/12/5.
 */

import Api from '../api'

export default {
  // 获取bing壁纸
  'user/BaseInfo': async ({ commit }, payload) => {
    let res = await Api.user.getBaseInfo(payload)
    return res
  },
  // 获取应用列表
  // 'user/application/list': async ({ commit }, payload) => {
  //   let res = await Api.user.getApplicationListByUserId(payload)
  //   console.log('res1111111', res)
  //   return res
  // },
  // 获取导航栏列表
  'user/getNavSlider/list': () => {
    let res = Api.user.getNavSliderList()
    return res
  },
  // 获取应用列表
  'user/application/list': () => {
    return Api.user.getApplicationList()
  }
}

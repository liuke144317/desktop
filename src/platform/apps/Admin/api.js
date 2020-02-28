/**
 * Created by OXOYO on 2017/12/24.
 *
 * 接口
 */

import Vue from 'vue'
export default {
  user: {
    // 获取用户基本信息
    getBaseInfo: async (data) => {
      let res = await Vue.prototype.$http.get('/Platform/user/BaseInfo')
      return res
    },
    // 获取用户应用列表
    getApplicationListByUserId: async (data) => {
      let res = await Vue.prototype.$http.get('/Platform/user/application/list', {
        params: data
      })
      return res
    },
    // 获取导航栏列表
    getNavSliderList () {
      let res = [
        {'sapplytype': '综合查询', 'imgSrc': 'http://m.sukeintel.com:9017/zdrjypsm/static/login/open/themes/images/v3/icon-desktop-park-lease.png', 'text': '综合查询'},
        {'sapplytype': '园区租赁', 'imgSrc': 'http://m.sukeintel.com:9017/zdrjypsm/static/login/open/themes/images/v3/icon-desktop-park-lease.png', 'text': '园区租赁'},
        {'sapplytype': '园区资产与维修', 'imgSrc': 'http://m.sukeintel.com:9017/zdrjypsm/static/login/open/themes/images/v3/icon-desktop-park-lease.png', 'text': '园区资产与维修'},
        {'sapplytype': '基础信息', 'imgSrc': 'http://m.sukeintel.com:9017/zdrjypsm/static/login/open/themes/images/v3/icon-desktop-park-lease.png', 'text': '基础信息'},
        {'sapplytype': '系统管理', 'imgSrc': 'http://m.sukeintel.com:9017/zdrjypsm/static/login/open/themes/images/v3/icon-desktop-park-lease.png', 'text': '系统管理'}
      ]
      return res
    }
  }
}

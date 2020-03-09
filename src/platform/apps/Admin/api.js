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
    },
    // 获取应用列表
    getApplicationList: () => {
      let res = [{
        app_category: '综合查询',
        app_description: '搜罗所有应用。',
        app_id: 2,
        app_name: 'ApplicationMarket',
        app_publish: 1,
        app_title: '应用市场',
        app_type: 0,
        app_icon: './static/apps/ApplicationMarket/logo.png',
        create_time: '2017-07-14T17:06:06.000Z',
        id: 2,
        private: 0,
        status: 1,
        update_time: '2017-11-13T08:56:47.000Z',
        user_id: 1,
        user_type: 0
      }, {
        app_category: '综合查询',
        app_description: '个人中心包含用户的个人信息。',
        app_id: 3,
        app_name: 'PersonalCenter',
        app_publish: 1,
        app_title: '个人中心',
        app_type: 0,
        app_icon: './static/apps/PersonalCenter/logo.png',
        create_time: '2017-07-14T17:09:19.000Z',
        id: 3,
        private: 0,
        status: 1,
        update_time: '2017-11-13T08:58:08.000Z',
        user_id: 1,
        user_type: 0
      }, {
        app_category: '园区租赁',
        app_description: '平台系统设置。',
        app_id: 4,
        app_name: 'SystemSetting',
        app_publish: 0,
        app_title: '系统设置',
        app_type: 0,
        app_icon: './static/app.png',
        create_time: '2018-04-24T14:50:23.000Z',
        id: 4,
        private: 0,
        status: 1,
        update_time: '2018-04-24T14:50:23.000Z',
        user_id: 1,
        user_type: 1
      }, {
        app_category: '园区租赁',
        app_description: '查看系统日志',
        app_id: 16,
        app_name: 'SystemLog',
        app_publish: 1,
        app_title: '系统日志',
        app_type: 1,
        app_icon: './static/apps/SystemLog/logo.png',
        create_time: '2019-05-23T13:37:12.000Z',
        id: 125,
        private: 0,
        status: 1,
        update_time: '2019-05-23T13:37:12.000Z',
        user_id: 1,
        user_type: 1
      }, {
        app_category: '园区资产与维修',
        app_description: '百度翻译',
        app_id: 8,
        app_name: 'BaiduFanyi',
        app_publish: 1,
        app_title: '百度翻译',
        app_type: 1,
        app_icon: './static/apps/BaiduFanyi/logo.png',
        create_time: '2019-06-11T03:29:23.000Z',
        id: 128,
        private: 0,
        status: 1,
        update_time: '2019-06-11T03:29:23.000Z',
        user_id: 1,
        user_type: 1
      }, {
        app_category: '基础信息',
        app_description: 'OXOYO的Blog',
        app_id: 14,
        app_name: 'Blog',
        app_publish: 1,
        app_title: 'Blog',
        app_type: 1,
        app_icon: './static/apps/Blog/logo.png',
        create_time: '2019-06-11T03:30:37.000Z',
        id: 129,
        private: 0,
        status: 1,
        update_time: '2019-06-11T03:30:37.000Z',
        user_id: 1,
        user_type: 1
      }, {
        app_category: '基础信息',
        app_description: '图灵聊天机器人',
        app_id: 12,
        app_name: 'iChat',
        app_publish: 1,
        app_title: 'iChat',
        app_type: 1,
        app_icon: './static/apps/iChat/logo.png',
        create_time: '2019-06-18T05:00:29.000Z',
        id: 133,
        private: 0,
        status: 1,
        update_time: '2019-06-18T05:00:29.000Z',
        user_id: 1,
        user_type: 1
      }, {
        app_category: '系统管理',
        app_description: '高德地图',
        app_id: 9,
        app_name: 'AmapDitu',
        app_publish: 1,
        app_title: '高德地图',
        app_type: 1,
        app_icon: './static/apps/AmapDitu/logo.png',
        create_time: '2019-06-18T05:05:29.000Z',
        id: 134,
        private: 0,
        status: 1,
        update_time: '2019-06-18T05:05:29.000Z',
        user_id: 1,
        user_type: 1
      }, {
        app_category: '系统管理',
        app_description: '在线白板',
        app_id: 18,
        app_name: 'XBoard',
        app_publish: 1,
        app_title: 'XBoard',
        app_type: 1,
        app_icon: './static/apps/XBoard/logo.png',
        create_time: '2019-06-18T08:08:11.000Z',
        id: 136,
        private: 0,
        status: 1,
        update_time: '2019-06-18T08:08:11.000Z',
        user_id: 1,
        user_type: 1
      }]
      return res
    }
  }
}

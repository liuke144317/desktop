/**
 * Created by OXOYO on 2018/4/24.
 *
 * 应用隐藏应用工具
 */

export default function (ctx, appInfo) {
  let _t = ctx
  console.log('utils.uninstall appData', appInfo)
  // 广播事件 打开隐藏应用界面
  _t.$utils.bus.$emit('platform/application/uninstall', {
    action: 'openByUninstall',
    data: {
      appInfo: JSON.parse(JSON.stringify(appInfo))
    }
  })
}

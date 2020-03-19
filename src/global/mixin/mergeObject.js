/***
 * @type {{methods: {mergeObject(*=, *=): *}}}
 * @description 合并配置，遇到对象则合并，其他覆盖
 */
const mergeObject = {
  methods: {
    mergeObject (source, target) {
      let keys = Object.keys(source)
      // 1.判断源对象是否需要处理，不管是几层的对象，原数据带的属性就覆盖，不存在的则使用默认值
      if (keys.length) {
        keys.map(key => {
          // 源属性
          let item = source[key]
          // 1.1.target是否存在该属性，有则做处理，无则跳过
          let flag = target.hasOwnProperty(key)
          if (flag) {
            // 1.1.1.判断类型是否相等，同类型才可以执行覆盖
            if (typeof item === typeof target[key]) {
              // 1.2.不是对象则覆盖、是数组则覆盖
              if (typeof item !== 'object' || (typeof item === 'object' && item instanceof Array)) {
                target[key] = source[key]
                // 1.3.是对象则递归处理
              } else if (typeof item === 'object' && typeof target === 'object') {
                target[key] = this.mergeObject(item, target[key])
              }
            }
          } else {
            target[key] = source[key]
          }
        })
      }
      return target
    }
  }
}
export default mergeObject

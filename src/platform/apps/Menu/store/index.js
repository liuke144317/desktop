import state from './state'
import mutations from './mutations'
import actions from './actions'

export default {
  moduleName: 'Menu',
  store: {
    namespaced: true,
    state,
    mutations,
    actions
  }
}

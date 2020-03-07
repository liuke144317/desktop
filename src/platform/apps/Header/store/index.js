import state from './state'
import mutation from './mutations'

export default {
  moduleName: 'Header',
  store: {
    namespaced: true,
    state,
    mutation
  }
}

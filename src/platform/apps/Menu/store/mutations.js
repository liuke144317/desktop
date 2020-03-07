export default{
  'menu/operation': (state, data) => {
    state.Menu = JSON.parse(JSON.stringify(data))
  },
  'list/set': (state, data) => {
    state.menuList = data
  }
}

export default{
  'menu/operation': (state, data) => {
    state.Menu = JSON.parse(JSON.stringify(data))
  },
  'list/set': (state, data) => {
    // state.menu.menuList = data
    state.menu = data
  }
}

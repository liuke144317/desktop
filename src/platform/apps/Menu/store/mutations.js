export default{
  'menu/operation': (state, data) => {
    state.Menu = JSON.parse(JSON.stringify(data))
  }
}

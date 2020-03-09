const defaultImg = {}
defaultImg.install = (Vue) => {
  Vue.directive('default-img', {
    inserted: async function (el, binding) {
      let imgUrl = binding.value
      if (imgUrl) {
        let exist = await imageExist(imgUrl)
        if (exist) {
          el.setAttribute('src', imgUrl)
        }
      }
    }
  })
}

let imageExist = url => {
  return new Promise(resolve => {
    let img = new Image()
    img.onload = function () {
      resolve(true)
      if (this.complete === true) {
        resolve(true)
        img = null
      }
    }
    img.onerror = () => {
      resolve(false)
      img = null
    }
    img.src = url
  })
}
export default defaultImg

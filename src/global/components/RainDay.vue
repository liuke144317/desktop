/**
* Created by OXOYO on 2017/9/26.
*
* 雨滴背景
*/

<style scoped lang="less" rel="stylesheet/less">
  .rain-day {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .rain-day-background {
      width: 100%;
      height: 100%;
    }
  }
</style>

<template>
  <div class="rain-day">
    <img id="rainDayBackground" class="rain-day-background" :src="background"/>
  </div>
</template>

<script>
  export default {
    name: 'RainDay',
    props: {
      config: {
        type: Object,
        default: () => {
          return {
            blur: 20,
            opacity: 1
          }
        }
      },
      rain: {
        type: Array,
        default: () => {
          return [
            {
              drops: [ [1, 2, 8000] ],
              period: null
            },
            {
              drops: [ [3, 3, 0.88], [5, 5, 0.9], [6, 2, 1] ],
              period: 100
            }
          ]
        }
      },
      background: {
        type: String,
        default: './static/win7/wallpaper.jpg'
      }
    }
  }
</script>


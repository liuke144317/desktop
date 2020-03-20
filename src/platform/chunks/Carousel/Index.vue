/**
*  @function 图片轮播带缩略图和放大镜功能（或者右侧展示放大区域）
*/
<template>
  <div class="carousel-box">
    <Carousel v-model="value" :autoplay="false">
      <CarouselItem>
        <img src="https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1585275606&t=e9348fbb2c46d65b42c3280ddc97bc8a" alt="" width="100%" height="100%">
      </CarouselItem>
      <CarouselItem>
        <img src="https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1585275606&t=e9348fbb2c46d65b42c3280ddc97bc8a" alt="" width="100%" height="100%">
      </CarouselItem>
      <CarouselItem>
        <img src="https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1585275606&t=e9348fbb2c46d65b42c3280ddc97bc8a" alt="" width="100%" height="100%">
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
    // import {Carousel, CarouselItem} from 'view-design'
    import {Carousel, CarouselItem} from 'element-ui'
    export default {
      name: 'Index',
      components: {
        Carousel,
        CarouselItem
      },
      data () {
        return {
          value: 0
        }
      }
    }
</script>

<style scoped lang="stylus">
  /*.carousel-box*/
    /*width 100%*/
    /*height 100%*/
    /*&>>>.ivu-carousel,&>>>.ivu-carousel-list*/
      /*width:100%*/
      /*height:100%*/
    /*&>>>.ivu-carousel-track,.ivu-carousel-item*/
      /*height:100%!important*/
</style>

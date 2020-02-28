<template>
  <div class="box">
    <ModalBox :data = data @cancel="cancel" @ok="ok"></ModalBox>
    <Button class="btn1" type="primary" @click="data.show = true">窗口中的弹出框</Button>
  </div>
</template>
<script>
    import ModalBox from '@/platform/apps/Modal/Index.vue'
    export default {
      name: 'Index',
      components: {
        ModalBox
      },
      data () {
        return {
          data: {
            show: false,
            title: 'Common Modal dialog box title'
          }
        }
      },
      methods: {
        ok () {
          console.log('选择执行')
        },
        cancel () {
          console.log('取消执行')
        }
      }
    }
</script>
<style scoped>
  .box{
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .btn1{
    margin: 5px;
  }
  .box>>>.ivu-modal{
    top: 0!important;
  }
</style>

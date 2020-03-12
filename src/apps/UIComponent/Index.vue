<template>
  <div class="box">
    <ModalBox :data = "data" @cancel="cancel" @ok="ok"></ModalBox>
    <Dialog :show = "data.dialogShow" :title="data.title"></Dialog>
    <Button class="btn1" type="primary" @click="data.show = true">确认弹框</Button>
    <Button class="btn1" type="primary" @click="data.dialogShow = true">Dialog弹框</Button>
  </div>
</template>
<script>
    import ModalBox from '@/platform/apps/Modal/confirm/Index.vue'
    import Dialog from '@/platform/apps/Modal/dialog/Index.vue'
    export default {
      name: 'Index',
      components: {
        ModalBox,
        Dialog
      },
      data () {
        return {
          data: {
            show: false,
            title: 'Common Modal dialog box title',
            dialogShow: false
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

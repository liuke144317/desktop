/**
* 插件说明：
* ModalBox：confirm确认框
* Dialog：弹出框，‘body’插槽可插入主题内容，‘footer’插槽插入弹出框底部居中按钮
*/
<template>
  <div class="box">
    <ModalBox :data = "data1" @cancel="cancel" @ok="ok"></ModalBox>
    <Dialog :data = "data2">
      <div slot="body">
        <h1>Dialog</h1>
      </div>
      <!--<button type="button" class="ivu-btn ivu-btn-primary">&lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; <span>确认</span></button>-->
    </Dialog>
    <Dialog :data = "data3">
      <div slot="body">
        <h1>Dialog</h1>
      </div>
      <!--<div slot="footer">-->
      <!--<button type="button" class="ivu-btn ivu-btn-text">&lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; <span>取消</span></button>-->
      <!--<button type="button" class="ivu-btn ivu-btn-primary">&lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; <span>确认</span></button>-->
      <!--</div>-->
    </Dialog>
    <Button class="btn1" type="primary" @click="data1.show = true">确认弹框</Button>
    <Button class="btn1" type="primary" @click="data2.show = true">Dialog弹框</Button>
    <Button class="btn1" type="primary" @click="data3.show = true">dataTable</Button>
    <Button class="btn1" type="primary" @click="data.dialogShow = true">树形控件</Button>
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
          data1: {
            show: false,
            title: 'confirm'
          },
          data2: {
            show: false,
            title: 'dialog'
          },
          data3: {
            show: false,
            title: '树形控件'
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

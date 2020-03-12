/*
* function:提示框
*/
<template>
  <div class="modal-box">
    <Modal
      class-name="vertical-center-modal"
      v-model="data.show"
      :title="data.title"
      @on-ok="ok"
      @on-cancel="cancel"
      @on-visible-change="change">
    </Modal>
  </div>
</template>

<script>
    export default {
      name: 'modal',
      props: ['data'],
      methods: {
        ok () {
          this.$emit('ok')
        },
        cancel () {
          this.$emit('cancel')
        },
        change (data) {
          if (data) {
            $('body>.layout-platform').css({'filter': 'blur(5px)'})
          } else {
            $('body>.layout-platform').css({'filter': 'blur(0)'})
          }
        }
      }
    }
</script>

<style>
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .vertical-center-modal .ivu-modal{
    top: 0!important;
    margin: 0;
  }
</style>

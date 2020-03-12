<template>
  <div class="modal-box">
    <modal
      class-name="vertical-center-modal"
      v-model="show"
      :title="title"
      :styles="styles"
      @on-ok="ok"
      @on-cancel="cancel">
      <h1>Dialog</h1>
    </modal>
  </div>
</template>

<script>
    import { Modal } from 'view-design'
    export default {
      name: 'hello',
      props: ['show', 'title'],
      components: {
        modal: Modal
      },
      data () {
        return {
          styles: {width: '80%', height: '80%'}
        }
      },
      methods: {
        ok () {
          this.$emit('ok')
        },
        cancel () {
          this.$emit('cancel')
        }
      }
    }
</script>

<style scoped lang="stylus">
  /*body*/
    /*&>>>.ivu-modal-content*/
      /*height 100%!important*/
</style>

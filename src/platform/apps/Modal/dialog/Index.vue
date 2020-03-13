<template>
  <div class="modal-box">
    <modal
      class-name="vertical-center-modal"
      v-model="data.show"
      :title="data.title"
      :styles="styles"
      footer-hide
      @on-ok="ok"
      @on-cancel="cancel">
      <!-- body部分插入-->
      <div class="mb-body">
        <slot name="body" >
        </slot>
      </div>
      <!-- footer部分插入,主要放置按钮-->
      <div class="mb-footer" v-if="isShow">
        <slot name="footer">
        </slot>
      </div>
    </modal>
  </div>
</template>

<script>
    import { Modal } from 'view-design'
    export default {
      name: 'hello',
      props: ['data'],
      components: {
        modal: Modal
      },
      data () {
        return {
          styles: {width: '95%', height: '99%'}
        }
      },
      computed: {
        isShow () {
          return this.$slots.footer
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
  .mb-body
    height 100%
    flex-grow 1
    overflow auto
  .mb-footer
    text-align center
    border-top: 1px solid #e8eaec;
    padding: 12px 18px 12px 18px;
  .v-transfer-dom>>>.ivu-modal-content
    height 100%!important
    border-radius 0
    border 5px #438eb9 solid
    border-top none
    display flex
    flex-direction column
    .ivu-modal-header
      background: #438eb9
      padding 0
      height 30px
      border-bottom none
      .ivu-modal-header-inner
        height 30px
        line-height @height
        font-size 12px
        color #fff
    .ivu-modal-close
      right 0
      top 0
      .ivu-icon-ios-close
        font-size 30px
        color #fff
        top 0
    .ivu-modal-body
      padding 0
      flex 1
      display flex
      flex-direction column
    .ivu-modal-footer
      text-align center
</style>

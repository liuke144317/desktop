/*
* function:自定义iview数据表格
*/
<template>
  <div>
    <div class="search">
      <Input v-model="search_value" @on-change="changeSearch">
        <span slot="prepend">搜索</span>
      </Input>
    </div>
    <Table row-key="id" :columns="columns" :data="data"></Table>
    <div style="margin: 10px;overflow: hidden" class="page">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changePage" show-sizer show-total></Page>
      </div>
    </div>
  </div>
</template>

<script>
    import {Table, Input, Page} from 'view-design'
    export default {
      name: 'Index',
      props: ['columns', 'data'],
      components: {
        Table,
        Input,
        Page
      },
      data () {
        return {
          search_value: '',
          page_value: 1
        }
      },
      methods: {
        changePage (page) {
          this.page_value = page
          this.getData()
        },
        changeSearch () {
          this.getData()
        },
        getData () {
          console.log('search', this.search_value)
          console.log('page', this.page_value)
        }
      }
    }
</script>

<style scoped lang="stylus">
  .search
    padding 5px
    background #cadff4
    &>>>.ivu-input-group
      width 300px!important
  .page>>>.ivu-select-item-selected
    color #fff!important
  .page>>>.ivu-select-arrow
    transform translateY(0)
    -webkit-transform translateY(0)
  .page>>>.ivu-select-visible .ivu-select-arrow
    -webkit-transform: translateY(0) rotate(180deg);
    -ms-transform: translateY(0) rotate(180deg);
    transform: translateY(0) rotate(180deg);
    display: inline-block;
</style>

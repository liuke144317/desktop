<template>
  <div :id="data.id"></div>
</template>

<script>
  import mergeObject from '@/global/mixin/mergeObject'
  import elementResizeDetectorMaker from 'element-resize-detector'
  export default {
    name: 'barChart',
    mixins: [mergeObject],
    data () {
      return {
        eCharts: ''
      }
    },
    props: ['data'],
    methods: {
      initLineChart () {
        let echarts = require('echarts')
        this.eCharts = echarts.init(document.getElementById(this.data.id))
        let option = {
          grid: {
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: []
          },
          yAxis: {
            type: 'value'
          },
          series: []
        }
        let dataOption = this.data['option']
        if (dataOption !== undefined) {
          if (typeof dataOption !== 'object' || (typeof dataOption === 'object' && dataOption instanceof Array)) {
            throw new Error("eChart's params to use merge is not object!!!")
          } else {
            option = this.mergeObject(dataOption, option)
          }
        }
        this.eCharts.setOption(option)
      },
      initEChart () {
        let _t = this
        const erd = elementResizeDetectorMaker()
        erd.listenTo(document.getElementById(this.data.id), (element) => {
          console.log('窗口大小变化')
          if (_t.eCharts !== '') {
            _t.eCharts.resize()
          }
        })
      }
    },
    mounted () {
      this.initLineChart()
      this.initEChart()
    }
  }
</script>

<style scoped>

</style>

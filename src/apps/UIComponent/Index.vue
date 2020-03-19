/**
* 插件说明：
* ModalBox：confirm确认框
* Dialog：弹出框，‘body’插槽可插入主题内容，‘footer’插槽插入弹出框底部居中按钮
*/
<template>
  <div class="box">
    <Tabs v-model="name1" :animated="false">
      <TabPane label="UI组件" name="name1">
        <ModalBox :data = "data1" @cancel="cancel" @ok="ok"></ModalBox>
        <Dialog :data = "data2">
          <div slot="body">
            <dataTable :columns="columns1" :data="table_data"></dataTable>
          </div>
        </Dialog>
        <Spin fix v-if="spinShow">
          <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
          <div>加载中</div>
        </Spin>
        <Button class="btn1" type="primary" @click="data1.show = true">确认弹框</Button>
        <Button class="btn1" type="primary" @click="data2.show = true">有dataTable的dialog弹框</Button>
        <Button class="btn1" type="primary" @click="loading">Loading加载</Button>
        <Button class="btn1" type="primary" @click="message">Message全局提示</Button>
      </TabPane>
      <TabPane label="地图" name="name2">
        <div id="map"></div>
      </TabPane>
      <TabPane label="eCharts" name="name3">
        <div style="display: flex;height: 50%">
          <LineEChart style="display:inline-block;width: 50%;height: 100%" :data="lineChartData"></LineEChart>
          <barEChart style="display:inline-block;width: 50%;height: 100%" :data="barChartData"></barEChart>
        </div>
        <div style="display: flex;height: 50%">
          <pieEChart style="display:inline-block;width: 50%;height: 100%" :data="pieEChartData"></pieEChart>
          <radarEChart style="display:inline-block;width: 50%;height: 100%" :data="radarEChart"></radarEChart>
        </div>
      </TabPane>
      <TabPane label="数据表格" name="name4">
        <dataTable :columns="columns1" :data="table_data"></dataTable>
      </TabPane>
      <TabPane label="页面跳转" name="name5">
        页面跳转
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
    import ModalBox from '@/platform/chunks/Modal/confirm/Index.vue'
    import Dialog from '@/platform/chunks/Modal/dialog/Index.vue'
    import dataTable from '@/platform/chunks/DataTable/Index.vue'
    import {Spin} from 'view-design'
    import LineEChart from '@/platform/chunks/ECharts/lineChart.vue'
    import barEChart from '@/platform/chunks/ECharts/barChart.vue'
    import pieEChart from '@/platform/chunks/ECharts/pieChart.vue'
    import radarEChart from '@/platform/chunks/ECharts/radarChart.vue'
    import AMap from 'AMap'
    export default {
      name: 'Index',
      components: {
        ModalBox,
        Dialog,
        dataTable,
        Spin,
        LineEChart,
        barEChart,
        pieEChart,
        radarEChart
      },
      data () {
        return {
          data1: {
            show: false, // dialog是否显示
            title: 'confirm' // dialog标题
          },
          data2: {
            show: false,
            title: 'dialog'
          },
          columns1: [
            {
              title: 'Name',
              key: 'name',
              tree: true
            },
            {
              title: 'Age',
              key: 'age'
            },
            {
              title: 'Address',
              key: 'address',
              render: (h, params) => {
                // console.log('h', h)
                // console.log('params', params)
                const row = params.row
                const text = row.status === 1 ? 'Working' : row.status === 2 ? 'Success' : 'Fail'
                //
                return h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  }
                }, text)
              }
            }
          ],
          table_data: [
            {
              id: '100',
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03',
              children: [
                {
                  id: '100100',
                  name: 'John Brown',
                  age: 18,
                  address: 'New York No. 1 Lake Park'
                },
                {
                  id: '10101',
                  name: 'Joe Blackn',
                  age: 30,
                  address: 'Sydney No. 1 Lake Park'
                },
                {
                  id: '10102',
                  name: 'Jon Snow',
                  age: 26,
                  address: 'Ottawa No. 2 Lake Park',
                  children: [
                    {
                      id: '1010200',
                      name: 'Jim Green',
                      age: 24,
                      address: 'New York No. 1 Lake Park'
                    }
                  ]
                }
              ]
            },
            {
              id: '101',
              name: 'Jim Green',
              age: 24,
              address: 'London No. 1 Lake Park',
              date: '2016-10-01'
            },
            {
              id: '102',
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              date: '2016-10-02'
            },
            {
              id: '103',
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04'
            }
          ],
          spinShow: false,
          components: {},
          name1: '',
          lineChartData: {
            id: 'chart1',
            // 用来添加和覆盖option
            option: {
              xAxis: {
                // option.xAxis.data的数据
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              // option.series的数据
              series: [
                {
                  name: '邮件营销',
                  type: 'line',
                  stack: '总量',
                  data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                  name: '联盟广告',
                  type: 'line',
                  stack: '总量',
                  data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                  name: '视频广告',
                  type: 'line',
                  stack: '总量',
                  data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                  name: '直接访问',
                  type: 'line',
                  stack: '总量',
                  data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                  name: '搜索引擎',
                  type: 'line',
                  stack: '总量',
                  data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
              ]
            }
          },
          barChartData: {
            id: 'chart2',
            // 用来添加和覆盖option
            option: {
              xAxis: {
                // option.xAxis.data的数据
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              // option.series的数据
              series: [
                {
                  name: '邮件营销',
                  type: 'bar',
                  data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                  name: '联盟广告',
                  type: 'bar',
                  data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                  name: '视频广告',
                  type: 'bar',
                  data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                  name: '直接访问',
                  type: 'bar',
                  data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                  name: '搜索引擎',
                  type: 'bar',
                  data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
              ]
            }
          },
          pieEChartData: {
            id: 'pieChart',
            option: {
              series: [
                {
                  name: '访问来源',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '60%'],
                  data: [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                    {value: 1548, name: '搜索引擎'}
                  ],
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            }
          },
          radarEChart: {
            id: 'radarChart',
            option: {
              radar: {
                indicator: [
                  {name: '销售（sales）', max: 6500},
                  {name: '管理（Administration）', max: 16000},
                  {name: '信息技术（Information Techology）', max: 30000},
                  {name: '客服（Customer Support）', max: 38000},
                  {name: '研发（Development）', max: 52000},
                  {name: '市场（Marketing）', max: 25000}
                ]
              },
              series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                data: [
                  {
                    value: [4300, 10000, 28000, 35000, 50000, 19000],
                    name: '预算分配（Allocated Budget）'
                  },
                  {
                    value: [5000, 14000, 28000, 31000, 42000, 21000],
                    name: '实际开销（Actual Spending）'
                  }
                ]
              }]
            }
          }
        }
      },
      methods: {
        // modal确认
        ok () {
          console.log('选择执行')
        },
        // modal取消
        cancel () {
          console.log('取消执行')
        },
        // 加载展示
        loading () {
          let _t = this
          console.log('loading...')
          _t.spinShow = true
          setTimeout(() => {
            _t.spinShow = false
            console.log('finish...')
          }, 2000)
        },
        // message展示
        message () {
          let _t = this
          setTimeout(() => {
            _t.$Message.info('普通！')
          }, 0)
          setTimeout(() => {
            _t.$Message.warning('警告！')
          }, 500)
          setTimeout(() => {
            _t.$Message.error('错误！')
          }, 1000)
          setTimeout(() => {
            _t.$Message.success('成功！')
          }, 1500)
          setTimeout(() => {
            _t.$Message.loading('加载！')
          }, 2000)
        },
        // 初始化高德地图
        initAMap () {
          var map = new AMap.Map('map', {
            center: [116.397428, 39.90923], // [纬度，经度]
            resizeEnable: true,
            zoom: 10
          })
          AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
            map.addControl(new AMap.ToolBar())
            map.addControl(new AMap.Scale())
          })
        }
      },
      mounted () {
        this.initAMap()
      }
    }
</script>
<style scoped>
  .box{
    width: 100%;
    height: 100%;
    background: #fff;
    overflow: auto;
  }
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  #map{
    width: 100%;
    height: 400px;
  }
  .box>>>.ivu-tabs{
    /*display: flex;*/
    /*flex-direction: column;*/
    height: 100%;
  }
  .box>>>.ivu-tabs-content{
    height: calc(100% - 52px);
  }
  .box>>>.ivu-tabs-tabpane{
    height: 100%;
  }
</style>

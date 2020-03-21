/**
* 插件说明：
* ModalBox：confirm确认框
* Dialog：弹出框，‘body’插槽可插入主题内容，‘footer’插槽插入弹出框底部居中按钮
*/
<template>
  <div class="box">
    <Tabs v-model="name1" :animated="false" name="tab1">
      <TabPane label="UI组件" tab="tab1">
        <ModalBox :data = "data1" @cancel="cancel" @ok="ok"></ModalBox>
        <Dialog :data = "data2">
          <div slot="body">
            <dataTable :columns="columns1" :data="table_data1"></dataTable>
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
        <Select style="width:200px;margin: 10px 0 0 0">
          <Option value="New York">New York</Option>
          <Option value="London">London</Option>
        </Select>
        <Poptip placement="bottom-end">
          <div slot="content">
            <Icon type="ios-create-outline" />附件
            <Divider style="margin: 2px"/>
            <Icon type="md-albums" />修改
            <Divider style="margin: 2px"/>
            <Icon type="ios-appstore-outline" />详情
            <Divider style="margin: 2px"/>
            <Icon type="md-at" />删除</div>
          <Button class="btn1" type="primary" style="margin: 10px 0 0">操作<Icon type="ios-arrow-down" /></Button>
        </Poptip>
        <ButtonGroup style="margin:10px 0 0">
          <Button type="info">按钮组1<Icon type="md-add" /></Button>
          <Button type="success">按钮组2<Icon type="md-at" /></Button>
          <Button type="warning">按钮组3<Icon type="ios-trash" /></Button>
        </ButtonGroup>
      </TabPane>
      <TabPane label="地图" tab="tab1">
        <div id="map"></div>
      </TabPane>
      <TabPane label="eCharts" tab="tab1">
        <div style="display: flex;height: 50%">
          <LineEChart style="display:inline-block;width: 50%;height: 100%" :data="lineChartData"></LineEChart>
          <barEChart style="display:inline-block;width: 50%;height: 100%" :data="barChartData"></barEChart>
        </div>
        <div style="display: flex;height: 50%">
          <pieEChart style="display:inline-block;width: 50%;height: 100%" :data="pieEChartData"></pieEChart>
          <radarEChart style="display:inline-block;width: 50%;height: 100%" :data="radarEChart"></radarEChart>
        </div>
      </TabPane>
      <TabPane label="数据表格" tab="tab1" style="overflow: auto">
        <Divider>展开子项与父项保持一致</Divider>
        <dataTable :columns="columns1" :data="table_data1"></dataTable>
        <Divider>展开子项与父项不一致</Divider>
        <dataTable :columns="columns2" :data="table_data2"></dataTable>
      </TabPane>
      <TabPane label="页面跳转" tab="tab1">
        页面跳转
      </TabPane>
      <TabPane label="带放大功能的轮播" tab="tab1">
        <Carousel style="width: 100%"></Carousel>
      </TabPane>
      <TabPane label="双层tabs" tab="tab1">
        <div style="width: 100%;height: 100%;overflow: hidden;">
          <Tabs :animated="false" name="tab1-1">
            <TabPane label="数据表格1" tab="tab1-1">1</TabPane>
            <TabPane label="数据表格2" tab="tab1-1">2</TabPane>
          </Tabs>
        </div>
      </TabPane>
      <TabPane label="panel" tab="tab1">
        <div style="width: 100%;height: 100%;background:blanchedalmond;overflow: hidden;">
          <Tabs :animated="false" name="tab1-1">
            <TabPane label="panel-style1" tab="tab1-1">
              <PanelStyle1>
                <div>123</div>
              </PanelStyle1>
            </TabPane>
            <TabPane label="panel-style2" tab="tab1-1">
              <PanelStyle2 title="采集项目分类信息">123</PanelStyle2>
            </TabPane>
          </Tabs>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
    import ModalBox from '@/platform/chunks/Modal/confirm/Index'
    import Dialog from '@/platform/chunks/Modal/dialog/Index'
    import dataTable from '@/platform/chunks/DataTable/Index'
    import {Spin, Select, Option} from 'view-design'
    import LineEChart from '@/platform/chunks/ECharts/lineChart'
    import barEChart from '@/platform/chunks/ECharts/barChart'
    import pieEChart from '@/platform/chunks/ECharts/pieChart'
    import radarEChart from '@/platform/chunks/ECharts/radarChart'
    import Carousel from '@/platform/chunks/Carousel/Index'
    import PanelStyle1 from '@/platform/chunks/Panel/panel-style1/Index'
    import PanelStyle2 from '@/platform/chunks/Panel/panel-style2/Index'
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
        radarEChart,
        Carousel,
        Select,
        Option,
        PanelStyle1,
        PanelStyle2
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
          table_data1: [
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
          columns2: [
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
          table_data2: [
            {
              id: '100',
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
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

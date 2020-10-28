<template>
  <div class="dashboard-editor-container">
    <panel-group :data="panelGroupData" />
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="24">
        <div class="chart-wrapper">
          <line-chart :chart-data="lineChartData" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import { panelGroupData, flowStat } from '@/api/dashboard'

export default {
  name: 'DashboardAdmin',
  components: { PanelGroup, LineChart },
  data() {
    return {
      panelGroupData: {
        'service_num': 0,
        'today_request_num': 0,
        'current_qps': 0,
        'app_num': 0
      },
      lineChartData: {
        'title': '流量统计',
        'today': [],
        'yesterday': []
      }
    }
  },
  created() {
    this.fetchPanelGroupData()
    this.fetchFlowStat()
  },
  methods: {
    fetchPanelGroupData(id) {
      panelGroupData({ }).then(response => {
        this.panelGroupData = response.data
      }).catch(() => {
      })
    },
    fetchFlowStat(id) {
      flowStat({ }).then(response => {
        this.lineChartData.today = response.data.today
        this.lineChartData.yesterday = response.data.yesterday
      }).catch(() => {
      })
    },
    handleSetLineChartData(type) {
      // this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>

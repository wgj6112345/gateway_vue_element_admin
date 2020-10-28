import request from '@/utils/request'

export function panelGroupData(query) {
  return request({
    url: '/dashboard/panel_data',
    method: 'get',
    params: query
  })
}

export function flowStat(query) {
  return request({
    url: '/dashboard/flow_stat',
    method: 'get',
    params: query
  })
}


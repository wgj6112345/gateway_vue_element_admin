import request from '@/utils/request'

export function appList(query) {
  return request({
    url: '/app/app_list',
    method: 'get',
    params: query
  })
}

export function appDetail(query) {
  return request({
    url: '/app/app_detail',
    method: 'get',
    params: query
  })
}

export function appDelete(query) {
  return request({
    url: '/app/app_delete',
    method: 'post',
    params: query
  })
}

export function appAdd(data) {
  return request({
    url: '/app/app_add',
    method: 'post',
    data
  })
}

export function appUpdate(data) {
  return request({
    url: '/app/app_update',
    method: 'post',
    data
  })
}

export function appStat(query) {
  return request({
    url: '/app/app_stat',
    method: 'get',
    params: query
  })
}

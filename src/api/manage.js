import request from '@/utils/request'
import axios from "axios";

const api = {
  user: '/user',
  role: '/role',
  service: '/service',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree'
}

export default api

export function postAction(url,parameter) {
  // let sign = signMd5Utils.getSign(url, parameter);
  //将签名和时间戳，添加在请求接口 Header
  // let signHeader = {"X-Sign": sign,"X-TIMESTAMP": signMd5Utils.getDateTimeToString()};

  return request({
    url: url,
    method:'post' ,
    data: parameter,
  })
}

//post method= {post | put}
export function httpAction(url,parameter,method) {
  return request({
    url: url,
    method:method ,
    data: parameter,
  })
}

//put
export function putAction(url,parameter) {
  return request({
    url: url,
    method:'put',
    data: parameter
  })
}

//get
export function getAction(url,parameter) {
  return request({
    url: url,
    method: 'get',
    params: parameter,

  })
}

//deleteAction
export function deleteAction(url,parameter) {
  return request({
    url: url,
    method: 'delete',
    params: parameter
  })
}

export function getUserList (parameter) {
  return request({
    url: user,
    method: 'get',
    params: parameter
  })
}
export function getRoleList (parameter) {
  return request({
    url: api.role,
    method: 'get',
    params: parameter
  })
}

export function getServiceList (parameter) {
  return request({
    url: api.service,
    method: 'get',
    params: parameter
  })
}

export function getPermissions (parameter) {
  return request({
    url: api.permissionNoPager,
    method: 'get',
    params: parameter
  })
}

export function getOrgTree (parameter) {
  return request({
    url: api.orgTree,
    method: 'get',
    params: parameter
  })
}

// id == 0 add     post
// id != 0 update  put
export function saveService (parameter) {
  return request({
    url: api.service,
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  })
}

export function saveSub (sub) {
  return request({
    url: '/sub',
    method: sub.id === 0 ? 'post' : 'put',
    data: sub
  })
}

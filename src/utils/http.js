/* eslint-disable dot-notation */
import axios from 'axios'

// create axios instance
const service = axios.create({
  baseURL: 'http://kjgxyun-ft.cpic.com.cn',
  timeout: 5000,
  headers: {
    common: {
    }
  }
})

// request interceptor
service.interceptors.request.use(config => {
  // process data before send request
  // add request timeout
  // config.headers.common['accesstoken'] = 'SAFEDEFAULT'
  /* if (config.url.indexOf('?') !== -1) {
    config.url += `&t=${new Date().getTime()}`
  } else {
    config.url += `?t=${new Date().getTime()}`
  } */
  config.data = JSON.stringify(config.data)
  console.log(config)
  return config
}, error => {
  return Promise.reject(error)
})

// response interceptor
service.interceptors.response.use(response => {
  // process data before receive response
  return response
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 404:
        error.message = '请求资源不存在'
        break
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    if (JSON.stringify(error).includes('timeout')) {
      error.message = 'connect server timeout,please flush this page'
    }
    return Promise.resolve(error.message)
  }
})

export default service

import axios from 'axios'
import {
  Message
} from 'element-ui'
import {
  host
} from './../config'

const service = axios.create({
  baseURL: host,
  timeout: 20000
  // headers: { format: 'JSON' }
})

const CancelToken = new axios.CancelToken(cancel => cancel())

const httpPending = {}
const removeHttpPending = (config, isRemove = true) => {
  if (!config) {
    return false
  }
  console.log(httpPending, 'httpPending')
  let key = config.url.includes(host) ? config.url.replace(host, '') : config.url
  console.log(key)
  let val = typeof config.data === 'object' ? JSON.stringify(config.data) : config.data
  if (httpPending[key] === val) {
    console.log('isRemove', isRemove)
    if (isRemove) {
      delete httpPending[key]
    } else {
      console.warn(`[${key}]: repeated http request`) // 重复提交
    }
    // delete httpPending[key]
    return true
  }
  httpPending[key] = val

  return false
}

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    config.data = config.data || {}

    // 防止重复提交
    if (removeHttpPending(config, false)) {
      config.cancelToken = CancelToken
    }

    return config
  },
  error => Promise.reject(error)
)

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    removeHttpPending(response.config)

    // 返回处理
    if (res.code !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 2500
      })
      return response
    }
    return response.data.data
  },
  error => {
    removeHttpPending(error.config)
    Message({
      message: error.message,
      type: 'error',
      duration: 2500
    })
    return Promise.reject(error)
  }
)

export default service

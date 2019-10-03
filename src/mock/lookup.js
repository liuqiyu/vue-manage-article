import Mock from 'mockjs'
import {
  host
} from './../config'

Mock.mock(host + '/getGender', 'get', () => {
  const data = [{
    id: 0,
    label: '男'
  },
  {
    id: 1,
    label: '女'
  },
  {
    id: 2,
    label: '位置'
  }
  ]
  return {
    data,
    message: '登陆成功！',
    code: 200
  }
})

/* eslint-disable */

const robotModule = {
  'list': {
    'type': 'get',
    'url': '/robot/list',
    'summary': '',
    'consumes': [
      'application/json'
    ]
  },

  'searchRobotByDeviceId': {
    'type': 'get',
    'url': '/robot/searchRobotByDeviceId',
    'summary': '',
    'consumes': [
      'application/json'
    ]
  },

  'findRobotCustomFunction': {
    'type': 'get',
    'url': '/robot/findRobotCustomFunction',
    'summary': '',
    'consumes': [
      'application/json'
    ]
  }
}

export default ({ $axios, redirect, env }, inject) => {
  // $axios.setToken('admin:admin', 'Basic') // 虽然可以自定义 prefix，但并不会转化 btoa
  // 这种方式就会
  const service = $axios.create({
    auth: {
      username: 'admin',
      password: 'admin'
    },
    headers: {
      common: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
      }
    },
    responseType: 'json'
  })

  service.setBaseURL(`${env.baseUrl}/api`)

  /**
   * 配置：请求拦截
   */
  service.onRequest(config => {
    // 拦截参数，做特别的输出
    /* if (config.params) {
      config.params.name = 'test'
    } else {
      config.params = { name: 'test' }
    } */
    console.log('Making request to ' + config.url)
  })

  /**
   * 配置：接受拦截
   */
  service.onResponse(res => {
    // 业务的 code 判断
    if (res.data && res.data) {
      return res.data
    } else {
      // 跳转错误处理
      return Promise.reject(res)
    }
  })

  /**
   * 配置：错误状态码
   */
  service.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }

    if(code === 500) {
      redirect('/sorry')
    }

    if (code === 200) {
      console.log('业务报错')
    }

  })
  
  const handler = ({ type, url, summary, consumes }) => {
    if (type === 'get') {
      return () => service.get(url, {
        withCredentials: false,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        }
      })
    } else {
        return () => service.post(url, {
          withCredentials: false,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        })
    }
  }
  
  const apis = {}

  Object.entries(robotModule).forEach(([key, api]) => {
    apis[key] = handler(api)
  })

  inject('apis', apis)
}
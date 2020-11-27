import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    /**
     * 在这里声明 api[modelName][apiName]
     */
    $apis: {
      list: (params?: any) => Promise<any>,
      searchRobotByDeviceId: (params?: any) => Promise<any>,
      findRobotCustomFunction: (params?: any) => Promise<any>,
    }
  }

  // 可以使用 `VueConstructor` 接口
  // 来声明全局 property
  interface VueConstructor {
    $myGlobal: string
  }
}

// usage
// console.log(vm.$myProperty)
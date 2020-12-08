import Vue from 'vue'

declare module 'vuex/types/index' {
  interface Store<S> {
    $apis: TApi
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    /**
     * 在这里声明 api[modelName][apiName]
     */
    $apis: TApi
  }

  // 可以使用 `VueConstructor` 接口
  // 来声明全局 property
  interface VueConstructor {
    $myGlobal: string
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    myOption?: string
  }
}

// 额外的组件选项
// var vm = new Vue({
//   myOption: 'Hello'
// })

// usage
// console.log(vm.$myProperty)

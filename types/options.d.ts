import Vue from 'vue'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    myOption?: string
  }
}

// 额外的组件选项
// var vm = new Vue({
//   myOption: 'Hello'
// })
<template>

  <a-layout>
    <a-layout-header>
      <div class="robot" :class="'robot-' + robotId">
        <a-select v-model="robotId" style="width: 240px" @change="handleChange">
          <a-select-option v-for="(robot) in robotlist" :key="robot.deviceId" :value="robot.deviceId">{{ robot.robotName }}</a-select-option>
        </a-select>
      </div>
    </a-layout-header>
    <a-layout-content class="container">
      <template v-if="$fetchState.pending">
        loading ........
      </template>
      <template v-else-if="$fetchState.error">
        <a-icon type="exclamation-circle" />
      </template>
      <a-descriptions v-else title="机器人详情">
        <a-descriptions-item label="名称">
          {{ detail.name }}
        </a-descriptions-item>
        <a-descriptions-item label="IP">
          {{ detail.ip }}
        </a-descriptions-item>
        <a-descriptions-item label="型号">
          {{ detail.modelName }}
        </a-descriptions-item>
        <a-descriptions-item label="导航类型">
          {{ detail.naviTypeName }}
        </a-descriptions-item>
        <a-descriptions-item label="语言">
          {{ detail.languageName }}
        </a-descriptions-item>
      </a-descriptions>
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RobotId',
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  loading: true,
  props: {
    robotlist: {
      type: Array,
      default: () => null
    }
  },
  async asyncData({ params, $axios }) {
    let detail = null
    try {
      const { data } = await $axios.$get('/robot/searchRobotByDeviceId')
      detail = data
    } catch (err) {
      console.log(err)
    }

    return {
      detail,
      robotId: +params.id
    }
  },
  data() {
    return {
      params: '',
      currentRobotId: ''
    }
  },
  async fetch() { // 不可以接受参数，否则就报错
    const { $axios /* , $isServer */ } = this
    try {
      const { data } = await $axios.$get('/robot/findRobotCustomFunction')
      this.params = data
    } catch (err) {
      throw new Error(err)
    }
  },

  // call fetch only on client-side
  fetchOnServer: true,

  methods: {
    handleChange(value: string) {
      console.log((value))
    }
  }
})
</script>

<style lang="less">
.container {
  padding: 15px;
}
</style>

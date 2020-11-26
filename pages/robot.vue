<template>
  <div class="app-container">
    <NuxtChild :key="$route.params.id" :robotlist="robotlist" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Robot',
  computed: {
    robotlist() {
      return this.$store.state.robotlist
    }
  },
  methods: {}
})
</script>

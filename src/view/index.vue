<template>
  <el-container class="main">
    <el-aside class="left">
      <ZNav />
    </el-aside>
    <el-main class="main-container">
      <router-view />
    </el-main>
  </el-container>
</template>
<script lang="ts">
import Vue from 'vue'
import ZNav from './nav.vue'
export default Vue.extend({
  components: {
    ZNav
  }
})
</script>
<style lang="scss" scoped>
  .main, .main-container {
    height: 100%;
    overflow: hidden;
  }
  .main-container {
    padding: 0 0 0 20px;
  }
</style>
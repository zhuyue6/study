<template>
  <el-container>
    <el-aside>
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

</style>
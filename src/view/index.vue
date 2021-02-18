<template>
  <el-container class="main">
    <el-aside class="left">
      <ZNav />
    </el-aside>
    <el-main class="main-container">
      <!-- <el-button @click="doit" /> -->
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
  },
  methods: {
    doit(){
      fetch('/ISAPI/test', {
        method: 'HEAD',
      }).then((d)=>{
        console.log(d)
        console.log(1111)
      }).catch((d)=>{
        console.log(d)
        console.log(1111)
      })
    } 
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
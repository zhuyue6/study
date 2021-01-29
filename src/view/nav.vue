<template>
  <el-menu
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :default-active="$route.path"
    :unique-opened="true"
    :router="true"
  >
    <subNav :data="nav.subList" />
  </el-menu>
</template>
<script lang="ts">
import Vue from 'vue'
import subNav from './subNav.vue'
import { nav } from '../config/nav'
export default Vue.extend({
  name: "ZNav",
  components: {
    subNav
  },
  data () {
    return {
      nav
    }
  }
})
</script>
<template>
  <el-menu
    active-text-color="#ffd04b"
    :default-active="$route.path"
    :unique-opened="true"
    :router="true"
  >
    <el-submenu
      v-for="subItem of nav.subList"
      :key="subItem.index"
      :index="subItem.index"
    >
      <template #title>
        <span>{{ subItem.name }}</span>
      </template>
      <el-menu-item
        v-for="item of subItem.children"
        :key="item.index"
        :index="item.absolutePath"
      >
        <i :class="item.class"></i>
        <template #title>
          <span>{{ item.name }}</span>
        </template>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script lang="ts">
import Vue from 'vue'
import { nav } from '../config/nav'
export default Vue.extend({
  name: "ZNav",
  data () {
    return {
      nav
    }
  }
})
</script>
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
        <i v-if="subItem.class" :class="subItem.class"></i>
        <span>{{ subItem.name }}</span>
      </template>
      <template v-for="sub2Item of subItem.children">
        <el-submenu
          v-if="sub2Item.children.length !== 0"
          :key="sub2Item.index"
          :index="sub2Item.index"
        >
          <template #title>
            <i v-if="sub2Item.class" :class="sub2Item.class"></i>
            <span>{{ sub2Item.name }}</span>
          </template>
          <el-menu-item
            v-for="item of sub2Item.children"
            :key="item.index"
            :index="item.absolutePath"
          >
            <i :class="item.class"></i>
            <template #title>
              <span>{{ item.name }}</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-menu-item
          v-else
          :key="sub2Item.index"
          :index="sub2Item.absolutePath"
        >
          <i :class="sub2Item.class"></i>
          <template #title>
            <span>{{ sub2Item.name }}</span>
          </template>
        </el-menu-item>
      </template>
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
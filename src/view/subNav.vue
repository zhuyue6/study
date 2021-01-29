<template>
  <div>
    <template v-for="item of data">
      <el-submenu
        v-if="item.type === 'dir'"
        :key="item.index"
        :index="item.index"
      >
        <template #title>
          <i v-if="item.class" :class="item.class"></i>
          <span>{{ item.name }}</span>
        </template>
        <subNav :data="item.children" />
      </el-submenu>
      <el-menu-item
        v-else
        :key="item.index"
        :index="item.absolutePath"
      >
        <i :class="item.class"></i>
        <template #title>
          <span>{{ item.name }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'subNav',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  }
})
</script>
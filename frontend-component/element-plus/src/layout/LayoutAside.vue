<template>
  <el-menu default-active="2" :collapse="isCollapse" @select="onMenuItemSelect">
    <el-sub-menu index="1">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>基础组件</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="/form">
      <template #title>
        <el-icon><Postcard /></el-icon>
        <span>表单组件</span>
      </template>
      <el-menu-item index="autocomplete"> 自动补全</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/show">
      <template #title>
        <el-icon><PieChart /></el-icon>
        <span>数据展示</span>
      </template>
      <el-menu-item index="table">表格</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4">
      <el-icon><LocationInformation /></el-icon>
      <template #title>导航</template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon><Mic /></el-icon>
      <template #title>反馈组件</template>
    </el-menu-item>
    <el-menu-item index="6">
      <el-icon><setting /></el-icon>
      <template #title>其他</template>
    </el-menu-item>
    <el-menu-item index="7" @click="isCollapse = !isCollapse">
      <el-icon><expand v-if="!isCollapse" /> <fold v-else /></el-icon>
      <template #title>折叠</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  PieChart,
  Menu as IconMenu,
  Setting,
  Expand,
  Fold,
  Postcard,
  LocationInformation,
  Mic,
} from '@element-plus/icons-vue'

const router = useRouter()

const isCollapse = ref(false)

function onMenuItemSelect(index: string, path: string[]) {
  console.info(`%c点击了菜单: 当前项: ${index}, 当前路径: ${path}`, 'color: darkcyan;')
  router.push({ path: path.join('/') })
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100vh;
}
</style>

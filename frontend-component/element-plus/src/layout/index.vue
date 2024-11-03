<template>
    <el-container class="container">
        <el-aside class="aside"> <LayoutAside /></el-aside>
        <el-main>
            <router-view v-slot="{ Component }">
                <component :is="Component"></component>
            </router-view>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import { ElContainer, ElMain, ElAside } from "element-plus";

import LayoutAside from "./LayoutAside.vue";
</script>

<style lang="scss" scoped>
.aside {
    width: auto; // 根据 el-menu 组件自动设置宽度
}
</style>

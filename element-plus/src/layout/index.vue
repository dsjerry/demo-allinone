<template>
    <RouterView v-slot="Component">
        <component :is="Component"></component>
    </RouterView>
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
import { RouteRecordRaw } from 'vue-router'

import Layout from '../layout/index.vue'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: '首页',
        component: Layout
    }
]
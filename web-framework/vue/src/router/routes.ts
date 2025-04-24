import { RouteRecordRaw } from "vue-router";

import Home from "../views/home/index.vue";
import AutoComplate from "../views/form/AutoComplete.vue";

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "index",
        component: Home,
    },
    {
        path: "/form",
        name: "form",
        redirect: "/form/autoComplete",
        children: [
            {
                path: "autoComplete",
                name: "autoComplete",
                component: AutoComplate,
            },
        ],
    },
];

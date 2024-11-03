import { defineConfig } from "rollup"
import typescript from "@rollup/plugin-typescript"
import terser from "@rollup/plugin-terser"

// export default {
//     input: "src/main.ts",
//     outdir: "dist",
//     plugins: [typescript()],
// }

export default defineConfig({
    input: "src/main.ts",
    output: {
        dir: "dist",
        format: "iife",
        compact: true,
        plugins: [terser()],
    },
    plugins: [typescript()],
})

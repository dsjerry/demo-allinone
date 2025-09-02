import { resolve } from "node:path"

console.log(import.meta)

console.log(import.meta.resolve("./index.md"))
console.log(resolve("./index.md"))

// console.log(import.meta.resolve("lodash")) // 如果有 node_modeles

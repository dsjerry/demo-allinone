// @ts-check

import { createHash } from "node:crypto"
import { readFile } from "node:fs/promises"
import { resolve } from "node:path"

const hasher = createHash("sha1")
hasher.setEncoding("hex")

// .cjs 直接使用 __dirname
hasher.write(await readFile(resolve(import.meta.dirname, "./index.js")))
hasher.end()

const file = hasher.read()
console.log(file)

// @ts-check

import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from 'node:stream/promises'
import { createGzip } from "node:zlib";
import { resolve } from "node:path";

const dirname = import.meta.dirname

await pipeline(
    createReadStream(resolve(dirname, './intro.md')),
    createGzip(),
    createWriteStream(resolve(dirname, './intro.md.gz'))
)
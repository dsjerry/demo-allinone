// @ts-check
const fs = require("fs")
const { join } = require("path")
const { streamPath } = require("../tools")

const DATA_PATH = join(process.cwd(), "fs", "data")

// === 写入数据

const writeSFile = join(DATA_PATH, "writeS.txt")
fs.writeFileSync(writeSFile, "", { encoding: "utf-8" })
const wtireS = fs.createWriteStream(writeSFile, { encoding: "utf-8" })

let writeCount = 1

const timerW = setInterval(() => {
  wtireS.write(`${writeCount}`)
  if (writeCount-- === 0) {
    clearInterval(timerW)
    wtireS.close()
  }
}, 1000)

// === 读取数据，然后写入到其他位置

const readS = fs.createReadStream(streamPath, "binary")

readS.pipe(fs.createWriteStream(join(__dirname, "./data/writeS.avi"), "binary"))

readS.pause()

setTimeout(() => {
  readS.resume()
})

readS.on("pause", () => {
  console.log("可读流 pause")
})

readS.on("resume", () => {
  console.log("可读流 resume")
})

readS.on("end", () => {
  console.log("可读流 end")
})

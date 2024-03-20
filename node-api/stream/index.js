const { pipeline, finished } = require("stream")
const fs = require("fs")
const { streamPath } = require("../tools")
const path = require("path")
const { promisify } = require("util")

const writeSDir = path.join(__dirname, "data")

const readStream = fs.createReadStream(streamPath)
const writeStream = fs.createWriteStream(path.join(writeSDir, "output.avi"))

const handleError = (error) => {
  console.error(error)
}

readStream.on("data", (chunk) => {})

// 流自身的 pipe，要想处理错误需要另外监听
readStream.pipe(writeStream)
readStream.on("error", handleError)
writeStream.on("error", handleError)

if (!fs.existsSync(writeSDir)) fs.mkdirSync(writeSDir)

// 方法自带错误处理回调
pipeline(readStream, writeStream, (error) => {
  if (error) {
    handleError(error)
  } else {
    console.log("流传输完成")
  }
})

finished(readStream, (error) => {
  if (error) {
    handleError(error)
  } else {
    console.log("[finished] 读取流完成")
  }
})

const { statSync } = require("fs")

// 获取文件信息
function getFileStat(pathStr) {
  try {
    const stats = statSync(pathStr)
    console.log(stats)
  } catch (error) {
    console.log(error)
  }
}

getFileStat(__dirname + "/intro.md")

console.log('我在用nvim编辑这个文件, 拜拜')

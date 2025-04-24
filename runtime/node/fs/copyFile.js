const fs = require("fs")
const path = require("path")

function running() {
  const prefix = "index_"
  const subfix_1 = "Admin.vue"
  const subfix_2 = "Manage.vue"
  const files = [
    "project",
    "opinion",
    "standardXg",
    "standardDt",
    "video",
    "about",
  ]

  const sourceFile = path.join(__dirname, "index_newsAdmin.vue")
  for (const file of files) {
    const targetFile = path.join(__dirname, prefix + file + subfix_1)
    fs.copyFileSync(sourceFile, targetFile)
    const targetFile2 = path.join(__dirname, prefix + file + subfix_2)
    fs.copyFileSync(sourceFile, targetFile2)
  }
}

running()

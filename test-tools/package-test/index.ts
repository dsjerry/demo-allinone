import * as _ from "lodash-es"

const data = {
  "1": {
    result: {
      code: 101,
      msg: "请勿上传空文档！",
      data: "",
    },
  },
  "2": {
    itemId: "952359c0a1bf4071bdc610a834d0e487",
    fileName: "timg.jpg",
    fileSize: "92287",
    url: "http://dzf.qunjishi.com/test/timg6703340335713540041.jpg",
    fileId: "4,8eb253905975",
  },
}

const arr = _.map(data).filter(item => {
  return item.fileName
})

const responseDataCleaning = (data: any) => {
  const cleanSign = ["null\\"]
  if (Array.isArray(data)) {
    return data.map(item => {
      for (const key in item) {
        if (cleanSign.includes(item[key])) {
          item[key] = ""
        }
      }
      return item
    })
  } else {
    for (const key in data) {
      if (cleanSign.includes(data[key])) {
        data[key] = ""
      }
    }
    return data
  }
}

console.log(
  responseDataCleaning([
    {
      name: "暂时",
      age: "null\\",
    },
  ])
)

const str = "危险化学品,卸搬运和仓储业、非煤矿"

console.log(str.split(/[,、]/))

console.log(
  "asd:",
  "http://dzf.qunjishi.com/test/chu121su128517278570349411813.png".split("、")
)

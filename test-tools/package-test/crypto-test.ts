import fs from "fs"
import CryptoJS from "crypto-js"
import { isEmpty } from "lodash-es"

const PWD_KEY = "01020304050607080910203040506070"

const crypto = {
  aesEncrypt: function (str: string): string {
    // if (isEmpty(str)) return "";
    var key = CryptoJS.enc.Utf8.parse(PWD_KEY)
    var iv = CryptoJS.enc.Utf8.parse("")
    var srcs = CryptoJS.enc.Utf8.parse(str)
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    })
    return encrypted.toString()
  },

  /**
   * AES解密
   */
  aesDecrypt: function (str: string): string {
    if (isEmpty(str)) return ""
    var key = CryptoJS.enc.Utf8.parse(PWD_KEY)
    var iv = CryptoJS.enc.Utf8.parse("")
    var decrypt = CryptoJS.AES.decrypt(str, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    })
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
  },

  encryptHex(str: string): string {
    var key = CryptoJS.enc.Utf8.parse(PWD_KEY)
    var iv = CryptoJS.enc.Utf8.parse("")
    const encryptedStr = CryptoJS.AES.encrypt(str, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).ciphertext
    return CryptoJS.enc.Hex.stringify(encryptedStr).toString(CryptoJS.enc.Utf8)
  },

  decryptHex(str: string): string {
    let decrypted = CryptoJS.AES.decrypt(
      CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(str)),
      CryptoJS.enc.Utf8.parse(PWD_KEY),
      {
        iv: CryptoJS.enc.Utf8.parse(""),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    )

    return decrypted.toString(CryptoJS.enc.Utf8).toString()
  },
}

const beEncrypt = "taskId=1001"
const pwBeEncrypt = "Infoview168!"

// console.log("加密链接:", crypto.encryptHex(beEncrypt))
// console.log("加密密码:", crypto.encryptHex('{entId: "1851505869695619084"}'))

console.log(crypto.decryptHex("b2d7ddeb88667c6f4b0711339176a3c3"))

const data = {
  id: -1,
  taskId: "1017",
  entId: "1836343549805858816",
  checkEnterpriseInventoryId: -1,
  enterpriseName: "陆川县长运汽车运输有限公司",
  enterpriseCode: "91450922742053363E",
  enterpriseId: "",
  description: "当前墙面存在裂缝",
  level: "一般事故隐患",
  inspectionBasis: "《墙面粉刷基本手册》第十条",
  fileName: "c121su12.png、chu12112.png、chu121su12.png",
  fileId: "4,93e17f6d54、4,3e17f660d54、4,93e17f660d54",
  url: "http://dzf.qunjishi.com/test/Dunqing8748247896283913646.jpg、http://dzf.qunjishi.com/test/henrikvilhelmberglund3887667899635983651.png、http://dzf.qunjishi.com/test/chu121su124687389883247698929.png",
  reportStatus: 0,
  createTime: "2024-11-13 13:14",
  createUser: "戴世杰",
  createId: "1839621334238367744",
  checkGroup: "第一现场检查组",
  checkGroupNo: "31",
  industry: "6",
  specificIndustryName: "其他",
  industryPath: "6",
  industryPathBinding: "6",
  majorAccidentCriterion: "",
  fullDescription: "当前墙面存在裂缝。不符合《墙面粉刷基本手册》第十条的规定。",
  prominentProblem: "是",
  checkUnitsType: "0",
  city: "450900",
}

// {reqdata: "a05ed9d102f4d8c787d5b71b766ed760e2c382533e459d02702a8bbaf0db73e93b92391cb78e740e54346309ad8035b30156c9558209fbbaa9cade5fec7461e9d45f07efeefd16537b1de874af3b9d99f0feac698639e99c08581384655c55d40c5d140b4df441a2c152cbf1c3e8954d21a910fa8ddc7cfd2acf0697350f0ac531f75266ddb74b069b121866a5d5b0aac951d741caa306610d116d36456e1725b2ec24630d64560162070590f4a2b675d5a27d109738e0405ef4772cb1db3ec76337e8538d8334a4f1d5485206b8f6af4510e856b3de31ac315ac0785651b4550e87866a9e1ebf92d7ea42cd6f7fc83860ca5c55f9dc03311ee70460a017892363e997d13f8309055405812ba248748c1fdfd32e963591b921d32e1240707486459bc1c595f19e2247fc2e617aa8c72aba9ea7497d1370d0d0824055b810d5bc1bee740e8b35fb6cf724922cef1fa59abfb9bfa5f258a8d5cbb244263c3171c37b2bdcf5f7c866fed49617c4269c9e1b3be28ae8a715b98ff24a2fbdbadf3a37529f90a15356665a4a5824895d8f4aabded6eb61609785591f46d112972376e9b08f6224cadf9f4963f4d6250d774b1363086d6fd18457c97f73267203f7b3d6e97123b90d9f3c07c5ad15b5d01fde851bb0b90f3cd2b5559eeccff3246d873816ffc1e1a2c3d6b1a3bd73cd46733743130bba8d49ce1bbbb999911570c441cb8d7761dd64b022936b349da8f4bb73c5670934e00f8fd6f2a4a25c984f3a8a2a8a71965163dceb7ce86cd33e275b6bfde21f81ddfc25d212ee5b5bf2546379ea1fafcd7c6f78bac476b6f5bc16fb85e4ca6ed21dff0cb1e167f0d785360db916f57fcb0f0d31e0047d8a608fdb4821ed7222138b0cb46f833166261c8d2486f5a4779e558c6199b3e833901c8cbee8a38bf04f62013c790993fbfae6cd6e1f0b1b1cf9dc8bf7ce6e3acefd455db34d361c2d73126f81d0783288b70cb03050432465f26ca3ff2bf96fc037d84907c346b3dfeaf4d45a2d183ff7a93bba920844"}

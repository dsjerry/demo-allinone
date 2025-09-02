const {
  createCipheriv,
  randomBytes,
  generateKeyPairSync,
  publicEncrypt,
  privateDecrypt,
  createHash,
} = require("node:crypto")

// const key = randomBytes(32)
// const iv = Buffer.from(randomBytes(16))

// const cipher = createCipheriv("aes-256-cbc", key, iv)
// cipher.update("hello world", "utf8", "hex")
// const encrypted = cipher.final("hex")

// console.log(encrypted)

const { publicKey, privateKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048, // 长度越长越安全，但也越慢
})

const encrypted = publicEncrypt(publicKey, Buffer.from("hello world"))
console.log(encrypted.toString("hex"))

const decrypted = privateDecrypt(privateKey, encrypted)
console.log(decrypted.toString("utf8"))

const hash = createHash("sha256")
hash.update("hello world")
console.log(hash.digest("hex"))

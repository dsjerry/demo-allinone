console.log("log1")

setTimeout(() => {
    console.log("log2")
})

new Promise((resolve, reject) => {
    console.log("log3")
    resolve()
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("log4")
        resolve()
    })
})

Promise.resolve().then(() => {
    console.log("log5")
})

console.log("log6")

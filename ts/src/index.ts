const arr = [
    { type: "input", name: "好的", id: "", stageId: "" },
    { type: "input", name: "", id: "", stageId: "" },
]

const arrProxy = new Proxy(arr, {})
console.log(JSON.stringify(arrProxy))

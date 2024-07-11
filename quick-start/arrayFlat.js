const arr = [1, [2], [3, 4], 5, [6, 7, [8, 9, [10, 11, [12, 13]]]]]

function forLoop(arr, newArr = []) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            forLoop(arr[i], newArr)
        } else {
            newArr.push(arr[i])
        }
    }

    return newArr
}

// const newArr = forLoop(arr)
// console.log("新：", newArr)
// console.log(arr.flat(Infinity))

function reduceFlat(arr) {
    return arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            return acc.concat(reduceFlat(cur))
        } else {
            return acc.concat(cur)
        }
    }, [])
}

console.log(reduceFlat(arr))

function shiftLeft(queue, k) {
    const arr = queue.copyWithin(0, k)
    console.log("asd", arr)
}

let queue = [1, 2, 3, 4, 5]
shiftLeft(queue, 2) // 相当于左移了两个位置
console.log(queue) // 输出: [3, 4, 5, 1, 2]

function tt() {
    const arr = [1, 2, 2, 3, 3, 4, 5]
}

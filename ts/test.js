const add = (num, ...nums) => {
    if (nums.length === 0) return num

    return num + add(...nums)
}

console.log(add(1, 2, 3, 4, 5))

const fibonacci = n => {
    if (n <= 1) return n

    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(10))

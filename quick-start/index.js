// @ts-check

const set = new Set()
const map = new Map([
    ["name", "jerry"],
    ["gender", "male"],
])

map.set("age", "18")

console.log(map)
console.log(map.get("name"))
console.log(map.has("name"))

set.add({ name: "jerry" })
set.add(1)

console.log(set.has({ name: "jerry" }))
console.log(set.has(1))

const setAge = { age: 18 }
set.add(setAge)

console.log(set.has(setAge))

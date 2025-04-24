let user: number[] = [1, 2, 3]
// 如果传进来的是number类型的数组，那就添加
function findNum(add: number[]): number[]
// 如果传进id就单个查询
function findNum(id: number): number[]
function findNum(ids: number | number[]): number[] {
    if (typeof ids === "number") {
        return user.filter(v => v === ids)
    } else if (Array.isArray(ids)) {
        user.push(...ids)
        return user
    } else {
        return user
    }
}

console.log(findNum([1]))

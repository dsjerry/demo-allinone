// @ts-check
function Parent() {
    this.colors = ["red", "blue", "green"]
}
Parent.prototype.getColors = function () {
    return this.colors
}

function Child() {
    this.colors.push("black")
}

// 设置 Child.prototype 的原型为 Parent 实例
Child.prototype = Object.create(Parent.prototype, {
    constructor: {
        writable: true
    }
})
Child.prototype.constructor = Child

const child = new Child()
console.log(child.getColors()) // ['red', 'blue', 'green', 'black']

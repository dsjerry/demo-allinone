const obj1 = {
    name: "张三",
    school: {
        name: "清华大学",
        address: "北京",
        getSchoolName() {
            return this.name
        },
    },
}

const obj2 = shallowClone(obj1)

console.log(obj1 === obj2)

obj2.school = {
    name: "北京大学",
}

console.log(obj1)

function shallowClone(obj) {
    const newObj = {}
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            newObj[prop] = obj[prop]
        }
    }
    return newObj
}

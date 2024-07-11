class Person {
    constructor(public name: string) {}
}

class XiaoMing implements Person {
    constructor(public name: string) {}

    getAge() {
        return 18
    }
}

class XiaoBai extends Person {
    constructor(public name: string) {
        super(name)
    }
}

const xm = new XiaoMing("xm")

xm.getAge()

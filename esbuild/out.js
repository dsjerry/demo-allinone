(function () {
    let target = { name: "target" };
    let proxy = new Proxy(target, {
        set(trapTarget, key, value, receiver) {
            // 忽略已经存在的值
            if (!trapTarget.hasOwnProperty(key)) {
                if (isNaN(value)) {
                    throw new TypeError("必须是数字")
                }
            }
            return Reflect.set(trapTarget, key, value, receiver)
        }
    });

    proxy.name = "proxy"    //  正常，因为本身已经存在
    proxy.age = "十八"      //  抛出错误，新 key，需要是数字
    proxy.age = 18;         //  正常
})();

(function () {
    let proxy = new Proxy({}, {
        get(trapTarget, key, receiver) {
            if (!(key in receiver)) {
                throw new TypeError("属性" + key + "不存在")
            }
            return Reflect.get(trapTarget, key, receiver)
        }
    });
})();


(function () {
    let target = { value: 42, name: "target" }
    let proxy = new Proxy(target, {
        has(trapTarget, key) {
            if (key === "value") return false;
            return Reflect.has(trapTarget, key);
        }
    })

    console.log("value" in proxy);  // false
    console.log("name" in proxy);   // true
    console.log("toString" in proxy);  // true
})();

(function () {
    let target = { value: 42, name: "target" }
    let proxy = new Proxy(target, {
        deleteProperty(trapTarget, key) {
            if (key === 'value') {
                return false
            } else {
                return Reflect.deleteProperty(trapTarget, key)
            }
        }
    })

    let result1 = delete proxy.value
    console.log(result1)    // false
    let result2 = delete proxy.name
    console.log(result2);   // true
})();
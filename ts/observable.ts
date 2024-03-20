const list: Set<Function> = new Set()

// 订阅者
const autorun = (cb: Function) => {
  if (!list.has(cb)) {
    list.add(cb)
  }
}

// 观察者
const observable = <T extends object>(params: T) => {
  return new Proxy(params, {
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver)
      list.forEach(fn => fn())
      return result
    }
  })
}

const persopnProxy = observable({ name: 'xm', age: 18 })

autorun(() => {
  console.log('有变化')
})

persopnProxy.age = 19
class List {
    ul = null
    _localKey = "todo_list"
    constructor(root) {
        this.root = root
    }
    init() {
        const ul = document.createElement("ul")
        ul.classList.add("list")
        this.root.append(ul)
        this.ul = ul
    }
    addItem(item) {
        const uuid = crypto.randomUUID()
        const li = document.createElement("li")
        li.id = uuid
        li.classList.add("list-item")
        li.textContent = item.value
        this.ul.append(li)

        this.saveToLocal(uuid, item.value)
    }
    saveToLocal(id, value) {
        localStorage.setItem(this._localKey, JSON.stringify({ id, value }))
    }
    getFromLocal() {
        const data = localStorage.getItem(this._localKey)
        return JSON.parse(data)
    }
}

module.exports = List

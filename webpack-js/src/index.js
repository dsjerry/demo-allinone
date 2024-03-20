import "./index.css"
import icon from "./icon.png"
import List from "./List"

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM content loaded")
    init()
})

function init() {
    const root = document.getElementById("root")

    const input = document.createElement("input")
    input.type = "text"
    input.classList.add("input")
    root.append(input)

    const image = new Image()
    image.src = icon
    image.width = 400
    image.onload = () => root.append(image)

    const list = new List(root)
    list.init()

    input.addEventListener("keyup", e => {
        if (e.key === "Enter") {
            console.log("输入确定：", e.target.value)
            list.addItem({ value: e.target.value })
            input.value = ""
        }
    })
}

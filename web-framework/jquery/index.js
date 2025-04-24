$("#app")
    .css("width", "100px")
    .css("height", "100px")
    .css("background-color", "red")

const list = $("ul li")
console.log(typeof list)
console.log(
    Array.from(list, (item, index) => {
        item.textContent += index
        return item
    })
)

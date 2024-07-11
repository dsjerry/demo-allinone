const dayjs = require("dayjs")

// console.log(dayjs().isAfter("2024-01-01", "year"))

function input(dateStr) {
    if (dayjs().isSame(dateStr, "year")) {
        if (dayjs().isSame(dateStr, "month")) {
            if (dayjs().isSame(dateStr, "day")) {
                console.log(dayjs(dateStr).format("HH:mm"))
            } else {
                console.log(dayjs(dateStr).format("MM-DD"))
            }
        } else {
            console.log(dayjs(dateStr).format("MM-DD"))
        }
    } else {
        console.log(dayjs(dateStr).format("YYYY-MM-DD"))
    }
}

input("2024-05-06")

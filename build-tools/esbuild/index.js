import { forEach } from "lodash-es";

function main() {
    const arr = [1,2,3,4]
    forEach(arr, (item) => {
        if (item === 3) {
            return false
        } 
        console.log(item)
    })
}

main()
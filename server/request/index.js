import axios from "axios"

async function req() {
    try {
        const res = await axios.post("", {
            email: "test@test.com",
            sequence: "64A6356528DE7E4BF9D0EA939442D7D0",
            version: "1.2.2",
            software_tag: "dm_aax_win",
        })
        console.log(res)
    } catch (error) {
        console.log("err", error)
    }
}

req()

import axios from 'axios'

axios.get("http://192.168.3.36:3000/users").then(res=>{
    console.log(res.data);
})
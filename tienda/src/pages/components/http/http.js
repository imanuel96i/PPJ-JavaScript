import axios from 'axios'

const http = axios.create({
    baseURL: "https://api-js-ppj.onrender.com/api",
})

export default http

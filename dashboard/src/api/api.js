import axios from 'axios'
const api = axios.create({
   //  baseURL: 'http://localhost:5000/api'
    baseURL: 'https://multi-vendor-site.onrender.com/api'
})
export default api

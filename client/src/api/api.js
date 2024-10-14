import axios from 'axios'
 // const local = 'http://localhost:5000'
const production = 'https://multi-vendor-site.onrender.com'
const api = axios.create({
    baseURL: `${production}/api`,
    withCredentials : true
})
export default api

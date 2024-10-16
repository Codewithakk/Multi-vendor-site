import axios from 'axios'
  const local = 'http://localhost:5000'
//const production = 'https://multi-vendor-site.onrender.com'
const api = axios.create({
    baseURL: `${local}/api`,
    withCredentials : true
})
export default api

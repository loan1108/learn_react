import axios from "axios"; 
const axiosClient = axios.create({
    baseURL:"http://localhost:3000/",
    timeout:30000
})
axiosClient.interceptors.response.use(function(response){
    return response
}, function(error){
    return Promise.reject(error)
})
export default axiosClient
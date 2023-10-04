import axios from "axios"; 
const axiosClient = axios.create({ 
    baseURL:"http://localhost:3001/users", 
    timeout:30000
})
axiosClient.interceptors.response.use(function(response){
    return response.data
}, function (error){
    return Promise.reject(error)
})
export default axiosClient
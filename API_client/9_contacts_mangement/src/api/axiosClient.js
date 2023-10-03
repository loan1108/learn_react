import axios from "axios"; 
const axiosClient = axios.create({ 
    baseURL:"https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts", 
    timeout:30000
})
axiosClient.interceptors.response.use(function(response){
    return response.data
}, function (error){
    return Promise.reject(error)
})
export default axiosClient
import axios from "axios"; 
const articleClient = axios.create({
    baseURL:"http://localhost:3001/article",
    timeout:30000
})
articleClient.interceptors.response.use(function(response){
    return response.data
}, function(error){
    return Promise.reject(error)
})
export default articleClient;
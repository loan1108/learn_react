import axios from "axios"; 
const axiosClient = axios.create({
    baseURL:"https://my-json-server.typicode.com/codegym-vn/mock-api-books",
    timeout:30000
})
export default axiosClient;
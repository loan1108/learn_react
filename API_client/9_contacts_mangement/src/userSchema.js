import * as Yup from "yup"; 
const userSchema = Yup.object({
    name:Yup.string().required(),
    email:Yup.string().required(), 
    phone:Yup.string().required()
})
export default userSchema;
import *as Yup from "yup"; 
const userSchema = Yup.object({
    title:Yup.string().required(),
    quantity:Yup.string().required()
})
export default userSchema;
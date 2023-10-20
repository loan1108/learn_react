import * as Yup from "yup";
const userSchema = Yup.object({
    name:Yup.string().required(),
    address:Yup.string().required(),
    phone:Yup.string().required(),
})
export default userSchema
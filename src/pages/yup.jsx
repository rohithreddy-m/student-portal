import * as YUP from "yup"
const yupShema=YUP.object({
    email:YUP.string().required("Email is Required").email("Enter valid Email"),
    password:YUP.string().required("Password is Required"),
    role:YUP.string().required("Role is Required")
})
export default yupShema
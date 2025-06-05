import { useFormik } from "formik"
import { loginSchema } from "../utils/schema/schema"
import { useNavigate } from "react-router-dom"
import Regex from "../utils/regex/regex"


const UseLogin = () => {

    const formik = useFormik({
        initialValues: {
            phoneNumber: ''
        },

        validationSchema: loginSchema()
    })

    const navigate = useNavigate()

    //send otp
    const handleSendOtp = async() =>{

        formik.handleSubmit()
        const errors = await formik.validateForm()

        if(Object.keys(errors)?.length === 0){
            navigate('/otp')
        }
    }

    //validate south africa phone number
    const handleValidateSAPhoneNumber = (value) =>{
        if(value?.length > 10 || !Regex.only_number.test(value)) return 

        if(!value?.length){
            formik.setFieldValue('phoneNumber','')
        }

        if(value?.length)

        if(value?.length === 1 && Number(value?.charAt(0)) === 0){
            formik.setFieldValue('phoneNumber',value)
        } else if(
            value?.length && 
            Number(value?.charAt(1)) === 6 || 
            Number(value?.charAt(1)) === 7 || 
            Number(value?.charAt(1)) === 8
        ){
            formik.setFieldValue('phoneNumber',value)
        }
    }

  return {
    formik,
    handleSendOtp,
    handleValidateSAPhoneNumber
  }
}

export default UseLogin

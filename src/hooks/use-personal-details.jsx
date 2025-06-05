import { useFormik } from "formik"
import { personalDetailsSchema } from "../utils/schema/schema"


const UsePersonalDetails = () => {

    const formik = useFormik({
        initialValues: {
            businessName: '',
            CIPCRegNumber: '',
            businessCategory: '',
            location: ''
        },

        validationSchema: personalDetailsSchema()
    })

  return {
    formik
  }
}

export default UsePersonalDetails

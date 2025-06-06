import { useFormik } from "formik"
import { personalDetailsSchema } from "../utils/schema/schema"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


const UsePersonalDetails = () => {

  const formik = useFormik({
      initialValues: {
          businessName: '',
          CIPCRegNumber: '',
          businessCategory: '',
          location: '',
          address: '',
          terms: false
      },

      validationSchema: personalDetailsSchema()
  })

  const categories = [
    {name: 'Category 1'},
    {name: 'Category 2'},
    {name: 'Category 3'},
    {name: 'Category 4'},
    {name: 'Category 5'},
  ]

  const navigate = useNavigate()
  const location = useLocation()

  const [error, setError] = useState(false)

  //get address & city from navigation
  useEffect(()=>{
    if(location?.state?.city){
      formik.setFieldValue('location',location?.state?.city)
      formik.setFieldValue('address',location?.state?.address)
    }
  },[location])

  //click select location
  const handleClickSelectLocation = () =>{
    navigate('/selectLocation')
  }

    //check
  const handleCheck = () =>{
    const bool = Boolean(
      formik.values.businessName &&
      formik.values.CIPCRegNumber &&
      formik.values.businessCategory &&
      formik.values.location &&
      formik.values.terms &&
      formik.values.address
    ) 
    return bool
  }


  //verify identify
  const handleVerifyIdentify = async() =>{
    if(!handleCheck()) return

    const errors = formik.validateForm()
    formik.handleSubmit()

    if(Object.keys(errors)?.length === 0){
    }
  }

  return {
    formik,
    categories,
    handleClickSelectLocation,
    handleVerifyIdentify,
    handleCheck,
    error
  }
}

export default UsePersonalDetails

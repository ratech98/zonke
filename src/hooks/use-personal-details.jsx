import { useFormik } from "formik"
import { personalDetailsSchema } from "../utils/schema/schema"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPersonalDetails } from '../redux-store/slice/auth'


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
  const dispatch = useDispatch()
  const location = useLocation()

  const {personalDetails} = useSelector(state=>state?.auth)

  const [error, setError] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  //get values from redux
  useEffect(()=>{
    if(personalDetails){
      formik.setFieldValue('businessName', personalDetails?.businessName)
      formik.setFieldValue('CIPCRegNumber', personalDetails?.CIPCRegNumber)
      formik.setFieldValue('businessCategory', personalDetails?.businessCategory)
      formik.setFieldValue('location', personalDetails?.location)
      formik.setFieldValue('address', personalDetails?.address)
      formik.setFieldValue('terms', personalDetails?.terms)
    }
  },[])

  //get address & city from navigation
  useEffect(()=>{
    if(location?.state?.city){
      formik.setFieldValue('location',location?.state?.city)
      formik.setFieldValue('address',location?.state?.address)
      dispatch(setPersonalDetails({
        ...personalDetails, 
        location: location?.state?.city,
        address: location?.state?.address
      }))
    }
  },[location])

  //click select location
  const handleClickSelectLocation = () =>{
    navigate('/selectLocation')
  }

  // continue
  const handleContinue = () =>{
    setOpenModal(!openModal)
    dispatch(setPersonalDetails(null))
    navigate('/businessDetailsStep1')
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

    const errors = await formik.validateForm()
    formik.handleSubmit()

    if(Object.keys(errors)?.length === 0){
      setOpenModal(!openModal)
    }
  }

  return {
    formik,
    categories,
    handleClickSelectLocation,
    handleVerifyIdentify,
    handleCheck,
    error,
    handleContinue,
    openModal,
    dispatch,
    setPersonalDetails,
    personalDetails
  }
}

export default UsePersonalDetails

import { useFormik } from 'formik'
import React, { useState } from 'react'
import { businessDetailsStep2Schema } from '../../utils/schema/schema'
import { useNavigate } from 'react-router-dom'

const UseStep2 = () => {

    const formik = useFormik({
        initialValues: {
            contactName: '',
            contactEmail: ''
        },

        validationSchema: businessDetailsStep2Schema()
    })

    const navigate = useNavigate()

    const [errorMsg, setErrorMsg] = useState(false)
    const [successMsg, setSuccessMsg] = useState(false)

    //verify email
    const handleVerifyEmail = async() =>{
        const errors = await formik.validateForm()
        formik.handleSubmit()

        if(Object.keys(errors)?.length === 0){
            setSuccessMsg(true)
        }
    }

    //continue
    const handleContinue = () =>{
        navigate('/businessDetailsStep3')
    }

    //check
    const handleCheck = () =>{
        const bool = Boolean(
            formik.values.contactEmail &&
            formik.values.contactName
        )

        return bool
    }


  return {
    formik,
    handleVerifyEmail,
    errorMsg,
    successMsg,
    handleContinue,
    handleCheck
  }
}

export default UseStep2

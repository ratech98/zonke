import { useFormik } from 'formik'
import React from 'react'
import { businessDetailsStep3Schema } from '../../utils/schema/schema'
import { useNavigate } from 'react-router-dom'

const UseStep3 = () => {

    const formik = useFormik({
        initialValues: {
            taxNumber: '',
            tradeLicense: '',
            proofOfAddress: '',
            registrationDocument: ''
        },

        validationSchema: businessDetailsStep3Schema()
    })

    const navigate = useNavigate()

    const handleCheck = () =>{
        const bool = Boolean(
            formik.values.taxNumber &&
            formik.values.tradeLicense
        )

        return bool
    }

    //continue
    const handleContinue = async() =>{
        const errors = await formik.validateForm()
        formik.handleSubmit()

        if(Object.keys(errors)?.length === 0){
            navigate('/businessDetailsStep4')
        }
    }

  return {
    formik,
    handleContinue,
    handleCheck
  }
}

export default UseStep3

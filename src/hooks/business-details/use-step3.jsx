import { useFormik } from 'formik'
import React from 'react'
import { businessDetailsStep3Schema } from '../../utils/schema/schema'

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

        }
    }

  return {
    formik,
    handleContinue,
    handleCheck
  }
}

export default UseStep3

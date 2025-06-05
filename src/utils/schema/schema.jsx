import * as yup from 'yup'

export const loginSchema = () =>(
    yup.object().shape({
        phoneNumber: yup.string().required('Phone number is required')
        .test(
        'len',
        'Phone number must be exactly 10 digits',
        (val) => val && val.toString().length === 10
      )
    })
)

export const personalDetailsSchema = () =>(
    yup.object().shape({
        businessName: yup.string().required('Business name is required'),
        CIPCRegNumber: yup.string().required('CIPC register number is required'),
        businessCategory: yup.object().required('Business category is required'),
        location: yup.string().required('Location is required')
    })
)
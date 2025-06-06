import * as yup from 'yup'
import Regex from '../regex/regex'

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
        CIPCRegNumber: yup.string()
        .matches(Regex.cipc_reg_number,'CIPC registration format number must be XXXX/XXXXXX/XX')
        .required('CIPC registration number is required'),
        businessCategory: yup.object().required('Business category is required'),
        location: yup.string().required('Location is required'),
        terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
    })
)
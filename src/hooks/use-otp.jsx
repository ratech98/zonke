import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UseOtp = () => {

    const formik = useFormik({
        initialValues: {
            otp: ''
        }
    })

    const navigate = useNavigate()

    const [seconds, setSeconds] = useState(29)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds <= 0) {
                    clearInterval(interval)
                    return 0
                }
                return prevSeconds - 1
            })
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    //resend otp
    const handleResendOtp = () =>{
        if(seconds > 0) return
        setSeconds(29)
    }

    //change phone number
    const handleChangePhoneNumber = () =>{
        navigate('/login')
    }

    //otp via call
    const handleOtpViaCall = () =>{
        navigate('/personalDetails')
    }

  return {
    formik,
    seconds,
    handleResendOtp,
    handleChangePhoneNumber,
    handleOtpViaCall
  }
}

export default UseOtp

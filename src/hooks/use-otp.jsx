import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setPhoneNumber } from '../redux-store/slice/auth'

const UseOtp = () => {

    const formik = useFormik({
        initialValues: {
            otp: ''
        }
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

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
    const handleSubmit = () =>{
        if(formik.values.otp?.length !== 6) return
        
        // dispatch(setPhoneNumber(null))
        navigate('/personalDetails')
    }

  return {
    formik,
    seconds,
    handleResendOtp,
    handleChangePhoneNumber,
    handleSubmit
  }
}

export default UseOtp

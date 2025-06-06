import Button from "../components/button/button"
import LoginPageTemplate from "../components/template/login-page-template"
import OtpTextfield from "../components/textfield/otp-textfield"
import TransSpan from "../components/translation/trans-span"
import UseOtp from "../hooks/use-otp"
import Regex from "../utils/regex/regex"


const Otp = () => {

  const {
    formik,
    seconds,
    handleResendOtp,
    handleChangePhoneNumber,
    handleSubmit
  } = UseOtp()

  return (
    <LoginPageTemplate>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <TransSpan className='lg:text-[32px] text-[24px] font-bold text-graniteGray'>
            Verification Code
          </TransSpan>
          <TransSpan className='text-[16px] text-graniteGray'>
            We have sent the verification code to you phone number
          </TransSpan>
        </div>

        <div className="flex flex-col gap-[24px]">
          <OtpTextfield
          length={6}
          onChange={(value)=>{
            if(Regex.only_number.test(value)){
              formik.setFieldValue('otp',value)
            }
          }}
          />

          <div className="flex items-center justify-between">
            <span className="font-medium text-[16px] text-orangeRed">
              00:{
                String(seconds)?.length === 1? 
                `0${seconds}`:seconds
                }
            </span>

            <TransSpan 
            className={`
            text-[16px] 
            ${seconds === 0? 'text-orangeRed':'text-silverSand'}
            font-semibold
            cursor-pointer
            `}
            onClick={handleResendOtp}
            >
              Resend OTP
            </TransSpan>
          </div>
        </div>

        <div className="flex items-center justify-between gap-[39px]">
          <div className="w-full">
            <Button
            name={'Change Phone Number'}
            textColor={'text-orangeRed'}
            borderColor={'border-orangeRed'}
            bgColor={'bg-transparent'}
            onClick={handleChangePhoneNumber}
            />
          </div>
          <div className="w-full">
            <Button
            name={'Submit'}
            borderColor={formik.values.otp?.length === 6? 'border-orangeRed':'border-polarWhite'}
            textColor={formik.values.otp?.length === 6? null:'text-silverGray'}
            bgColor={formik.values.otp?.length === 6? null:'bg-polarWhite'}
            onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </LoginPageTemplate>
  )
}

export default Otp

import TransSpan from '../components/translation/trans-span'
import Textfield from '../components/textfield/textfield'
import Button from '../components/button/button'
import LoginPageTemplate from '../components/template/login-page-template'
import UseLogin from '../hooks/use-login'
import Regex from '../utils/regex/regex'
import IMAGES from '../images/images'

const Login = () => {

  const {
    formik,
    handleSendOtp,
    handleValidateSAPhoneNumber
  } = UseLogin()

  return (
    <LoginPageTemplate>
      <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col gap-[32px]'>
          <TransSpan className='lg:text-[32px] text-[24px] font-bold text-graniteGray'>
            Sign up to your New Account
          </TransSpan>

          <Textfield
          px={'px-[14px] pl-27'}
          placeholder={'Enter Mobile Number'}
          label={'Phone Number'}
          onChange={handleValidateSAPhoneNumber}
          value={formik.values.phoneNumber}
          error={formik.touched.phoneNumber&&formik.errors.phoneNumber}
          errorMsg={
            formik.touched.phoneNumber&&formik.errors.phoneNumber?
            formik.errors.phoneNumber:null
          }
          customLeftUi={
            <div 
            className='
            flex items-center justify-center gap-[10px]
            h-full
            p-[12px]
            border-e-[0.5px] border-silver
            '>
              <img
              src={IMAGES.SAImg}
              className='w-[24px] h-[24px] object-contain'
              />
              <span className='text-darkCharCoal text-[14px] font-medium'>(+27)</span>
            </div>
          }
          />
        </div>

        <Button
        name={'Send OTP'}
        onClick={()=>{
          if(formik.values.phoneNumber?.length){
            handleSendOtp()
          }
        }}
        textColor={formik.values.phoneNumber?.length? null:'text-silverGray'}
        bgColor={formik.values.phoneNumber?.length? null:'bg-polarWhite'}
        />
      </div>
    </LoginPageTemplate>
  )
}

export default Login

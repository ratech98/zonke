import IMAGES from '../images/images'
import TransSpan from '../components/translation/trans-span'
import Textfield from '../components/textfield/textfield'
import Button from '../components/button/button'

const Login = () => {
  return (
    <div className="grid grid-cols-2">
      {/* image */}
      <div className='h-screen overflow-hidden'>
        <img
        src={IMAGES.loginImage}
        className='w-full h-full object-center object-cover'
        />
      </div>

      <div 
      className='
      relative 
      h-screen
      flex items-center justify-center
      px-20 py-28
      '>
        <div
        className='
        bg-white 
        shadow-shadow-1 shadow-shadow-2 shadow-shadow-3
        z-1 relative
        p-[54px]
        w-full h-full
        rounded-[16px]
        flex flex-col justify-between bg-red-500
        '>
          <div className='flex flex-col gap-[32px]'>
            <TransSpan className='text-[32px] font-bold text-graniteGray'>
              Sign up to your New Account
            </TransSpan>

            <Textfield
            placeholder={'Enter Mobile Number'}
            label={'Phone Number'}
            />
          </div>

          <Button
          name={'Send OTP'}
          />
        </div>

        {/* images */}
        <div className='absolute -top-70 right-0 z-0'>
          <img
          src={IMAGES.loginPageDesign2}
          className='w-[935px] h-[901px] object-center object-contain'
          />
        </div>
        <div className='absolute -top-2 right-0 z-0'>
          <img
          src={IMAGES.loginPageDesign}
          className='w-[437.21px] h-[301.11px] object-center object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Login

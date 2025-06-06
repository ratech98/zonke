import React from 'react'
import IMAGES from '../../images/images'

const LoginPageTemplate = ({
  children,
  image
}) => {
  return (
    <div className="grid md:grid-cols-12 grid-cols-1">
      {/* image */}
      <div className='lg:col-span-5 md:col-span-4 h-screen overflow-hidden md:block hidden'>
        <img
        src={image? image:IMAGES.loginImage}
        className='w-full h-full object-center object-cover'
        />
      </div>

      <div 
      className='
      lg:col-span-7 md:col-span-8
      relative 
      h-screen
      flex items-center justify-center
      xl:px-24 lg:px-15 px-5
      lg:py-28 md:py-15 py-20
      '>
        <div
        className='
        bg-white 
        shadow-shadow-1 shadow-shadow-2 shadow-shadow-3
        z-1 relative
        xl:p-[54px] lg:p-[40px] p-[30px]
        w-full h-full
        rounded-[16px]
        '>
            {children}
        </div>

        {/* images */}
        <div 
        className='
        absolute 
        lg:-top-70 -top-30
        right-0 
        z-0
        '>
          <img
          src={IMAGES.loginPageDesign2}
          className='
          lg:w-[935px] w-[400px]
          lg:h-[901px] h-[400px]
          object-center object-contain
          '/>
        </div>
        <div 
        className='
        absolute 
        lg:-top-2 -top-3
        right-0 
        z-0
        '>
          <img
          src={IMAGES.loginPageDesign}
          className='
          lg:w-[437.21px] w-[200px]
          lg:h-[301.11px] h-[150px]
          object-center object-contain
          '/>
        </div>
      </div>
    </div>
  )
}

export default LoginPageTemplate

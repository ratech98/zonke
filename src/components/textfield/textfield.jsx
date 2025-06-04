import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import TransSpan from '../translation/trans-span'

const Textfield = ({
  name,
  placeholder,
  onChange = ()=>{},
  type = 'text',
  borderRadius,
  px,
  py,
  error,
  value,
  countryCode,
  handleModal,
  border_color,
  readOnly,
  onKeyDown,
  borderWidth,
  passwordField,
  phoneNumberField,
  textColor,
  label
}) => {

  const {t} = useTranslation()
  const [pwdShow, setPwdShow] = useState(false)

  return (
    <div>
        <div className='relative'>
            {
                label &&
                <div className='mb-[8px]'>
                    <TransSpan className='text-[16px] text-dimGray font-medium'>
                        {label}
                    </TransSpan>
                </div>
            }
            {/* {
              phoneNumberField?
              <div className='absolute left-0 top-0 bottom-0 px-4 flex items-center text-placeholder'>
                <span className='border-e-2 pe-4 flex items-center gap-2'>
                  <span>{countryCode}</span>
                  <span onClick={handleModal} className='cursor-pointer'>{ICONS?.downward_arrow}</span>
                </span>
              </div>:null
            } */}
            {/* {
              passwordField?
              <div className='absolute right-0 top-0 bottom-0 flex items-center pe-4'>
                <span
                onClick={()=>setPwdShow(!pwdShow)}
                className='cursor-pointer'
                >
                  { !pwdShow?
                    <span>
                      {ICONS?.eyeOn}
                    </span>:
                    <span>
                      {ICONS?.eyeOff}
                    </span>
                  }
                </span>
              </div>
              :null
            } */}
            <input 
            className={`
            placeholder-silverSand
            placeholder-[16px]
            placeholder-medium
            flex 
            w-full 
            bg-white 
            outline-none
            text-[16px]
            ${px? px:'px-[14px]'}
            ${py? py:'py-[16px]'}
            ${error? 'border-red-500': border_color? border_color:'border-silver'}
            ${borderWidth? borderWidth:'border-1'}
            ${borderRadius? borderRadius:'rounded-[10px]'} 
            ${textColor? textColor:'text-black'}
            `}
            type={passwordField && !pwdShow? 'password': type}
            placeholder={t(placeholder)}
            onChange={(e)=>{onChange(e.target.value.trimStart())}}
            name={name}
            value={value}
            checked={value}
            onKeyDown={onKeyDown}
            readOnly={readOnly}
            />
        </div>
    </div>
  )
}

export default Textfield
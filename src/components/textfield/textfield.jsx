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
  textColor,
  label,
  errorMsg,
  customLeftUi,
  customRightUi,
  required,
  showCaret = true
}) => {

  const {t} = useTranslation()
  const [pwdShow, setPwdShow] = useState(false)

  return (
    <div>
        <div className=''>
            {
                label &&
                <div className='mb-[8px]'>
                    <span className='text-[16px] text-dimGray font-medium flex items-center'>
                        <span>{label}</span>
                        {required&&
                        <span className='text-classicRed'>*</span>
                        }
                    </span>
                </div>
            }
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
            <div className='relative'>
              <input 
              className={`
              relative
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
              ${!showCaret? 'caret-transparent':''}
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
              
              {
                customLeftUi?
                <div className='absolute left-0 top-0 bottom-0'>
                  {customLeftUi}
                </div>:null
              }
              {
                customRightUi?
                <div className='absolute right-0 top-0 bottom-0'>
                  {customRightUi}
                </div>:null
              }
            </div>
            <span className='text-xs text-red-500'>
              {errorMsg}
            </span>
        </div>
    </div>
  )
}

export default Textfield
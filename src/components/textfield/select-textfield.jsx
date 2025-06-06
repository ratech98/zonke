import { useEffect, useRef, useState } from 'react'
import ICONS from '../../icons/icons'

const SelectTextfield = ({
  placeholder,
  value,
  data,
  onChange,
  loading,
  error,
  py,px,
  border_color,
  readOnly,
  borderRadius,
  iconColor,
  noRecordsFound,
  label,
  required,
  textColor,
  borderWidth,
  errorMsg
}) => {
  const [openDropDown, setOpenDropDown] = useState(false)
  const [getValue, setGetValue] = useState('')
  const dropdownRef = useRef(null)
  const openDropdownRef = useRef(null)

  //click outside to close dropdown
  useEffect(()=>{
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropDown(false);
        if (openDropdownRef.current === dropdownRef) {
          openDropdownRef.current = null;
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  },[])

  //get value
  useEffect(()=>{
    setGetValue(value?.name || '')
  },[value])

  //open dropdown
  const handleOpenDropDown = () =>{
    if (readOnly) return;

    if (openDropdownRef.current && openDropdownRef.current !== dropdownRef) {
      openDropdownRef.current.current.setOpenDropDown(false);
    }

    setOpenDropDown((prev) => !prev);

    if (!openDropDown) {
      openDropdownRef.current = dropdownRef;
    } else {
      openDropdownRef.current = null;
    }
  }

  return (
    <div ref={dropdownRef}>
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
        <div className='relative'>
          {/* down caret icon */}
          <div 
          className='absolute right-0 inset-y-0 my-auto pe-4 flex items-center text-placeHolder'
          onClick={handleOpenDropDown}
          >
              <span 
              className={`
              transition-all
              text-[30px]
              ${openDropDown? 'rotate-180':'rotate-0'}
              ${iconColor? iconColor:'text-davyGray'}
              `}>
                {ICONS?.downCaret}
              </span>
          </div>

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
          pe-10
          w-full 
          flex
          border-1 
          ${px? px:'px-[14px]'}
          ${py? py:'py-[16px]'}
          ${error? 'border-red-500': border_color? border_color:'border-silver'}
          ${borderWidth? borderWidth:'border-1'}
          ${borderRadius? borderRadius:'rounded-[10px]'} 
          ${textColor? textColor:'text-black'}
          `}
          placeholder={placeholder}
          value={getValue}
          type="text" 
          onClick={handleOpenDropDown}
          readOnly
          />

          {/* dropdown */}
          <div className={`
          max-h-44  
          overflow-y-auto
          absolute left-0
          px-5 py-3
          w-full
          mt-1 
          origin-top-left 
          bg-white 
          divide-y 
          divide-gray-100 
          rounded-[10px]
          transition
          font-medium
          text-wrap
          hyphens-auto
          border
          border-orangeRed
          z-30
          ${openDropDown? 'flex':'hidden'} 
          `}>
            {loading&&!data?.length?
              <span className='font-semibold text-davyGray'>Loading...</span>
            :data?.length?
            <div className='w-full flex flex-col gap-3'>
              {
                data?.map((item,i)=>(
                  <span 
                  key={i}
                  className='text-lg cursor-pointer text-davyGray'
                  onClick={()=>{
                    onChange(item)
                    setOpenDropDown(false)
                  }}  
                  >
                    {item?.name}
                  </span>
                ))
              }
            </div>:
            <div className='w-full'>
              {noRecordsFound?
              noRecordsFound:
              <span className='text-davyGray font-bold'>No records found</span>
              }
            </div>
            }
          </div>
        </div>
        {/* error message */}
        <span className='text-xs text-red-500'>
          {errorMsg}
        </span>
    </div>
  )
}

export default SelectTextfield
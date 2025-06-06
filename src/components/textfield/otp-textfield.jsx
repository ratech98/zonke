import { useEffect, useRef, useState } from 'react'
import Regex from '../../utils/regex/regex';

const OtpTextfield = ({
    length,
    onChange = ()=>{},
    clearOtp,
    errorMsg
}) => {

    const inputRef = useRef(Array(length).fill(null));
    const [OTP, setOTP] = useState(Array(length).fill(''));
    const [activeIndex, setActiveIndex] = useState(null)

    useEffect(()=>{
        inputRef.current[0]?.focus()
        setActiveIndex(0)
    },[])

    useEffect(()=>{
      onChange(OTP.join(''))
    },[OTP])

    useEffect(()=>{
      setOTP(Array(length).fill(''))
    },[clearOtp])
  
    //text change
    const handleTextChange = (input, index) => {
      if(!Regex.only_number.test(input)) return

      const newPin = [...OTP];
      newPin[index] = input;
      setOTP(newPin);
  
      if (input.length === 1 && index < length - 1) {
        inputRef.current[index + 1]?.focus();
      }
  
      if (input.length === 0 && index > 0) {
        inputRef.current[index - 1]?.focus();
      }
    };

    const handlePaste = (e) => {
      e.preventDefault();
      console.log('Paste event triggered');
      const pasteData = e.clipboardData.getData('text/plain').trim();
      if (pasteData.length === length) {
          console.log('Length matches');
          const newPin = [...OTP];
          for (let i = 0; i < length; i++) {
              newPin[i] = pasteData[i];
          }
          setOTP(newPin);
          inputRef.current[length - 1]?.focus();
      }
    };

  return (
    <div>
        <div className='flex flex-col gap-[8px]'>
            <div className='flex items-center justify-between'>
              {Array.from({ length }, (_, index) => (
                  <input
                  key={index}
                  placeholder='-'
                  type="text"
                  maxLength={1}
                  value={OTP[index]}
                  onChange={(e) => {
                      handleTextChange(e.target.value, index)
                  }}
                  onFocus={()=> setActiveIndex(index)}
                  onPaste={handlePaste}
                  ref={(ref) => (inputRef.current[index] = ref)}
                  className={`
                  border-[1.5px]
                  ${index === activeIndex? 'border-orangeRed':'border-lightGray'}
                  bg-white 
                  outline-none
                  rounded-[16px]
                  text-center text-[24px]
                  font-medium
                  placeholder:text-gray
                  text-gray
                  caret-transparent
                  xl:max-w-[80px] w-full min-w-[40px]
                  h-[80px]
                  `}
                  style={{ marginRight: index === length - 1 ? '0' : '10px'}}
                  />
              ))}
            </div>
            {
              errorMsg?
              <span className='text-[16px] font-medium text-classicRed'>{errorMsg}</span>
              :null
            }
        </div>
    </div>
  )
}

export default OtpTextfield
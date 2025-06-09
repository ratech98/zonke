import React, { useEffect } from 'react'

const Dialog = ({
  children,
  open,
  height,
  maxWidth,
  borderRadius
}) => {

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <dialog
    className={`
    ${open? 'flex':'hidden'}
    shadow-lg 
    fixed 
    inset-0 
    bg-black/50
    w-full
    h-screen
    z-50
    items-center
    justify-center
    overflow-hidden
    p-[32px]
    `}
    >
        <div 
          className={`
            ${maxWidth && maxWidth}
            ${height? height:'max-h-[90%]'}
            overflow-y-auto 
            ${borderRadius&& borderRadius}
          `}>
            {/* <div className='sticky top-0 insex-x-0 py-5 bg-white'>
            </div> */}
            {children}
        </div>
    </dialog>
  )
}

export default Dialog
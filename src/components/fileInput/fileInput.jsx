import { useRef } from "react"
import IMAGES from "../../images/images"
import TransSpan from "../translation/trans-span"
import ICONS from "../../icons/icons"


const FileInput = ({
    onChange = ()=>{},
    value,
    label,
    required,
    error,
    errorMsg
}) => {

    const fileInputRef = useRef(null)

    //click
    const handleClick = () => {
     fileInputRef.current.click()
    }

    //file change
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile) {
            onChange(selectedFile)
            // console.log("Selected file:", selectedFile)
        }
    }

    //on drop
    const handleOnDrop = (e) =>{
        e.preventDefault()
        e.stopPropagation()
        const selectedfile = e.dataTransfer.files[0]
        if(selectedfile){
            onChange(selectedfile)
        } 
    }

    // Required for drop to work
    const handleOnDragOver = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }


  return (
    <div className="flex flex-col gap-[2px]">
        {
            label &&
            <span className="text-[16px] font-medium text-dimGray">
                <TransSpan>{label}</TransSpan>
                {
                    required &&
                    <span className="text-classicRed">*</span>
                }
            </span>
        }
        {
            value?
            <div 
            className="
            flex justify-between items-center
            bg-whiteSmoke 
            px-[16px] py-[12px] 
            rounded-[8px]
            "
            onClick={handleClick}
            onDrop={handleOnDrop}
            onDragOver={handleOnDragOver}
            >
                <div 
                className="flex items-center gap-[8px]"
                >
                    <div className="bg-white p-2 rounded-[8px]">
                        {
                            value?.name?.split('.').at(-1) === 'pdf'?
                            <img 
                            src={IMAGES.pdf}
                            className="w-[20px] h-[20px] object-contain"
                            />:
                            <img 
                            src={IMAGES.jpg}
                            className="w-[20px] h-[20px] object-contain"
                            />

                        }
                    </div>

                    <div className="flex flex-col gap-[4px]">
                        {
                            value?.name?.split('.').at(-1) === 'pdf'?
                            <span className='text-[12px] text-darkGunMetal'>
                                <TransSpan>{label}</TransSpan>
                                <span>.pdf</span>
                            </span>:
                            <span className='text-[12px] text-darkGunMetal'>
                                <TransSpan className='text-[12px] text-darkGunMetal'>{label}</TransSpan>
                                <span>.jpg</span>
                            </span>
                        }
                        
                        <span className="text-[11px] text-graniteGray">{Number(value?.size/1024).toFixed(2)} kb</span>
                    </div>
                </div>

                <span 
                className="cursor-pointer"
                onClick={(e)=>{
                    e.stopPropagation()
                    onChange('')
                }}
                >{ICONS.close}</span>
            </div>
            :
            <div 
            className={`
            flex flex-col gap-[4px] items-center 
            border border-dashed 
            ${error? 'border-red-500':'border-platinumGray'} 
            px-[16px] py-[20px] 
            rounded-[12px] 
            cursor-pointer
            `}
            onClick={handleClick}
            onDrop={handleOnDrop}
            onDragOver={handleOnDragOver}
            >
                <img
                src={IMAGES.fileImage}
                className="w-[24px] h-[24px] object-contain"
                />

                <TransSpan className='text-[12px] font-semibold text-onxyGray'>
                    No attachments uploaded
                </TransSpan>

                <TransSpan className='text-[10px] text-graniteGray'>
                    To add a file, click here!
                </TransSpan>
            </div>
        }
        {
            errorMsg && 
            <span className="text-xs text-red-500">file is required</span>
        }

        <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".jpg, .jpeg, .png, .pdf"
        />
    </div>
  )
}

export default FileInput

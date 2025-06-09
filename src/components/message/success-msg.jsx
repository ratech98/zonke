import ICONS from "../../icons/icons"
import TransSpan from "../translation/trans-span"


const SuccessMsg = ({message}) => {
  return (
    <div className="flex items-center gap-[4px] px-[12px] py-[6px] bg-mistyGreen rounded-[8px]">
        <span className="text-green text-xl">{ICONS.circleTick}</span>
        <TransSpan className='font-semibold text-[16px] text-green'>
            {
                message? message:
                "Email Verified Successfully"
            }
        </TransSpan>
    </div>
  )
}

export default SuccessMsg

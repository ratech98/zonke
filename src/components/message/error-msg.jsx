import ICONS from "../../icons/icons"
import TransSpan from "../translation/trans-span"


const ErrorMsg = ({message}) => {
  return (
    <div className="flex items-center gap-[4px] px-[12px] py-[6px] bg-palePink rounded-[8px]">
        <span className="text-classicRed text-xl">{ICONS.cancelRound}</span>
        <TransSpan className='font-semibold text-[16px] text-classicRed'>
            {
                message? message:
                "We couldn't verify your identity. Please check and try again"
            }
        </TransSpan>
    </div>
  )
}

export default ErrorMsg

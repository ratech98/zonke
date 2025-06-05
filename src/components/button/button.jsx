import TransSpan from "../translation/trans-span"


const Button = ({
    name,
    onClick,
    bgColor,
    textColor,
    borderColor
}) => {

  return (
    <div 
    className={`
    py-[10px] 
    text-center 
    font-medium
    text-[16px]
    rounded-[10px]
    flex justify-center items-center
    cursor-pointer
    shadow-shadow-4 shadow-shadow-5
    ${bgColor? bgColor:'bg-vermilion'}
    ${textColor? textColor:'text-white'}
    ${borderColor? `${borderColor} border-1`:''}
    `}
    onClick={onClick}
    >
        <TransSpan>{name}</TransSpan>
    </div>
  )
}

export default Button
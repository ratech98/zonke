

const RadioButton = ({
  name,
  checked,
  checked_color,
  onChange=()=>{},
  value,
  readOnly,
  onClick
}) => {

  return (
    <div>
        <div>
            <label className="cursor-pointer flex items-cener gap-[16px]">
                <input 
                type="radio" 
                name={name} 
                onChange={onChange}
                onClick={onClick}
                value={value}
                className={`
                w-4
                hidden
                ${checked_color}
                `} 
                checked={checked}
                readOnly={readOnly}
                />
                <div 
                className={`
                w-[24px] h-[24px] 
                border-[2px] 
                ${checked? 'border-orangeRed':'border-middleGray'} 
                rounded-full 
                flex items-center justify-center
                `}>
                    <div 
                    className={`
                    ${checked? 'block':'hidden'} 
                    w-[12px] h-[12px] 
                    rounded-full 
                    bg-orangeRed
                    `}>
                    </div>

                </div>
                <span className="text-[16px] text-darkCharCoal">{name}</span> 
            </label>
        </div>
    </div>
  )
}

export default RadioButton
import ICONS from "../../icons/icons"


const Checkbox = ({
  name,
  checked = false,
  checked_color,
  onChange=()=>{},
  readOnly,
  onClick
}) => {

  return (
    <div>
        <div>
            <label className="cursor-pointer flex items-cener gap-[16px]">
                <input 
                type="checkbox" 
                name={name} 
                onChange={onChange}
                onClick={onClick}
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
                w-[16px] h-[16px] 
                border-[1px] 
                border-graniteGray
                rounded-[2.67px] 
                flex items-center justify-center
                `}>
                    <div 
                    className={`
                    ${checked? 'block':'hidden'} 
                    w-[16px] h-[16px] 
                    rounded-[2.67px] 
                    bg-orangeRed
                    text-white
                    `}>
                        {ICONS.tick}
                    </div>

                </div>
                <span className="text-[16px] text-darkCharCoal">{name}</span> 
            </label>
        </div>
    </div>
  )
}

export default Checkbox
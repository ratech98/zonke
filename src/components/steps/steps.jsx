

const Steps = ({
    length = 4,
    stepNo = 1
}) => {
  return (
    <div className='flex items-center gap-[8px]'>
        {
        Array.from({length: length}).map((_, i) => (
            <div key={i} 
            className={`
            w-full h-[10px] 
            rounded-[8px] 
            ${i+1 <= stepNo? 'bg-vermilion':'bg-platinumGray'}
            `}></div>
        ))
        }
    </div>
  )
}

export default Steps

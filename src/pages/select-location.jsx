import Button from "../components/button/button"
import LoginPageTemplate from "../components/template/login-page-template"
import Textfield from "../components/textfield/textfield"
import TransSpan from "../components/translation/trans-span"
import UseSelectLocation from "../hooks/use-select-location"
import ICONS from "../icons/icons"
import IMAGES from "../images/images"


const SelectLocation = () => {

  const {
    search,
    setSearch,
    popularLocations,
    handleUseCurrentLocation
  } = UseSelectLocation()

  return (
    <LoginPageTemplate
    image={IMAGES.selectLocationImage}
    >
      <div className="flex flex-col gap-[32px]">
        <TransSpan className='lg:text-[32px] text-[24px] font-bold text-graniteGray'>
          Please Select Location
        </TransSpan>

        <div className="flex flex-col gap-[16px]">
          <Textfield
          px={'px-[14px] pl-[40px]'}
          placeholder={'Search by city or area name'}
          onChange={(value)=>{
            setSearch(value)
          }}
          value={search}
          customLeftUi={
            <div className="flex items-center justify-center h-full px-3">
              <span className="text-[20px] text-graniteGray">{ICONS.search}</span>
            </div>
          }
          borderColor={'border-platinumGray'}
          placeholderColor={'placeholder:text-graniteGray'}
          />

          <div className="flex items-center gap-3">
            <div className="w-full h-[0.2px] bg-platinum"></div>
            <TransSpan className="text-[12px] text-gray font-light">Or</TransSpan>
            <div className="w-full h-[0.2px] bg-platinum"></div>
          </div>

          <Button
          name={'Use my Current Location'}
          onClick={handleUseCurrentLocation}
          />
        </div>

        <div className="flex flex-col gap-[24px]">
          <TransSpan className='lg:text-[20px] text-[16px] font-semibold text-jetGray'>
            Popular Cities
          </TransSpan>

          <div className="flex flex-col gap-[12px] h-[10rem] overflow-y-auto">
            {
              popularLocations?.map((location,index)=>(
                <span 
                key={index}
                className="
                border-b border-platinum 
                pb-[12px] 
                text-[16px] text-jetGray
                font-medium
                ">
                  {location.name}
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </LoginPageTemplate>
  )
}

export default SelectLocation

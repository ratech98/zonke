import Button from "../../components/button/button"
import Dialog from "../../components/dialog/dialog"
import Steps from "../../components/steps/steps"
import LoginPageTemplate from "../../components/template/login-page-template"
import TransSpan from "../../components/translation/trans-span"
import UseStep4 from "../../hooks/business-details/use-step4"
import IMAGES from "../../images/images"

const Step4 = () => {

    const {
        options,
        handleGetStarted,
        handleCheck,
        handleSelect,
        selected,
        handleSignAgreement,
        openModal
    } = UseStep4()

  return (
    <LoginPageTemplate
    image={IMAGES.BusinessDetailsImage}
    >
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-[32px]">
                <div className="flex flex-col gap-[8px]">
                {/* title */}
                <TransSpan className='lg:text-[32px] text-[24px] font-bold text-graniteGray'>
                    Hello. Let's get you Onboard!
                </TransSpan>

                <Steps
                stepNo={4}
                />
                </div>

                <div className="flex flex-col gap-[24px]">
                    <TransSpan className='text-[20px] font-medium text-darkCharCoal'>
                    Engagement Model
                    </TransSpan>

                    <div className="flex flex-col gap-[20px]">
                        {
                            options?.map((item, index)=>(
                                <div 
                                key={index}
                                className={`
                                flex items-center gap-[8px] 
                                px-[16px] py-[12px] 
                                border-[1px] rounded-[10px]
                                ${selected === index? 'border-vermilion':'border-platinumGray'}
                                ${selected === index? 'bg-shellWhite':''}
                                `}
                                onClick={()=>handleSelect(index)}
                                >
                                    <img
                                    src={selected === index? item?.selected_image:item?.image}
                                    className="w-[32px] h-[32px] object-contain"
                                    />

                                    <TransSpan 
                                    className={`
                                    text[16px] 
                                    ${selected === index? 'text-vermilion':'text-darkCharCoal'}
                                    `}>
                                        {item?.name}
                                    </TransSpan>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <Button
            name={'Get Started'}
            onClick={()=>{
                if(handleCheck()){
                    handleGetStarted()
                }
            }}
            textColor={handleCheck()? null:'text-silverGray'}
            bgColor={handleCheck()? null:'bg-polarWhite'}
            />

            <Dialog
            open={openModal}
            >
                <div className="bg-white p-[32px] flex flex-col gap-[54px] rounded-[16px] lg:w-[597px] w-full text-center">
                    <div className="flex flex-col gap-[32px] items-center">
                        <img
                        src={IMAGES.roundTickImage}
                        className="w-[108px] h-[108px] object-contain"
                        />

                        <TransSpan className='font-semibold text-[24px] text-jetBlack lg:w-50'>Wallet Created Successfully!</TransSpan>

                        <div className="flex flex-col gap-[16px] text-center">  
                            <div className="text-[16px] text-jetGray flex items-center justify-center gap-1">
                                <TransSpan>Wallet ID:</TransSpan>
                                <span>ZA-12345678</span>
                            </div>

                            <div className="flex flex-col text-[14px] text-stormGray lg:w-70">
                                <TransSpan>Your Zonke Wallet is ready.</TransSpan>
                                <TransSpan>Complete your profile and sign your agreement to start receiving payments.</TransSpan>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-[10px]">
                        <div className="w-full">
                            <Button
                            name={'Business Profile'}
                            bgColor={'bg-transparent'}
                            borderColor={'border-vermilion'}
                            textColor={'text-vermilion'}
                            onClick={handleSignAgreement}
                            />
                        </div>

                        <div className="w-full">
                            <Button
                            name={'Sign Agreement'}
                            borderColor={'border-vermilion'}
                            onClick={handleSignAgreement}
                            />
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    </LoginPageTemplate>
  )
}

export default Step4

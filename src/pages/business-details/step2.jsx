import Button from "../../components/button/button"
import Steps from "../../components/steps/steps"
import LoginPageTemplate from "../../components/template/login-page-template"
import Textfield from "../../components/textfield/textfield"
import TransSpan from "../../components/translation/trans-span"
import UseStep2 from "../../hooks/business-details/use-step2"
import IMAGES from "../../images/images"
import ErrorMsg from "../../components/message/error-msg"
import SuccessMsg from "../../components/message/success-msg"


const Step2 = () => {

    const {
        formik,
        handleVerifyEmail,
        errorMsg,
        successMsg,
        handleContinue,
        handleCheck
    } = UseStep2()

  return (
    <LoginPageTemplate
    image={IMAGES.BusinessDetailsImage}
    >
        <div className='flex flex-col h-full'>
            <div className="flex flex-col justify-between gap-[100px] h-screen overflow-y-auto">  
                <div className="flex flex-col gap-[32px]">
                    <div className="flex flex-col gap-[8px]">
                        {/* title */}
                        <TransSpan className='lg:text-[32px] text-[24px] font-bold text-graniteGray'>
                            Hello. Let's get you Onboard!
                        </TransSpan>

                        <Steps
                        stepNo={2}
                        />
                    </div>

                    <div className="flex flex-col gap-[24px]">
                        <TransSpan className='text-[20px] font-medium text-darkCharCoal'>Contact Details</TransSpan>

                        {/* textfields */}
                        <div className="flex flex-col gap-[20px]">
                            {/* contact person name */}
                            <Textfield
                            placeholder={'Contact Person Name'}
                            label={'Contact Person Name'}
                            required={true}
                            onChange={(value)=>{
                            formik.setFieldValue('contactName',value)
                            }}
                            value={formik.values.contactName}
                            error={formik.touched.contactName&&formik.errors.contactName}
                            errorMsg={
                            formik.touched.contactName&&formik.errors.contactName?
                            formik.errors.contactName:null
                            }
                            readOnly={successMsg}
                            backgroundColor={successMsg? 'bg-whiteSmoke':''}
                            />

                            {/* contact person email */}
                            <Textfield
                            placeholder={'Email ID'}
                            label={'Email ID'}
                            required={true}
                            onChange={(value)=>{
                            formik.setFieldValue('contactEmail',value)
                            }}
                            value={formik.values.contactEmail}
                            error={formik.touched.contactEmail&&formik.errors.contactEmail}
                            errorMsg={
                            formik.touched.contactEmail&&formik.errors.contactEmail?
                            formik.errors.contactEmail:null
                            }
                            readOnly={successMsg}
                            backgroundColor={successMsg? 'bg-whiteSmoke':''}
                            />

                            <Textfield
                            px={'px-[14px] pl-27'}
                            placeholder={'Enter Mobile Number'}
                            label={'Phone Number'}
                            value={'0798768768'}
                            error={formik.touched.phoneNumber&&formik.errors.phoneNumber}
                            customLeftUi={
                                <div 
                                className='
                                flex items-center justify-center gap-[10px]
                                h-full
                                p-[12px]
                                border-e-[0.5px] border-silver
                                '>
                                <img
                                src={IMAGES.SAImg}
                                className='w-[24px] h-[24px] object-contain'
                                />
                                <span className='text-darkCharCoal text-[14px] font-medium'>(+27)</span>
                                </div>
                            }
                            readOnly={true}
                            backgroundColor={'bg-whiteSmoke'}
                            />
 
                            {
                                errorMsg&&
                                <ErrorMsg
                                message={"We couldn't verify your identity. Please check and try again"}
                                />
                            }

                            {
                                successMsg &&
                                <SuccessMsg/>
                            }
                        </div>
                    </div>
                </div>

                {
                    successMsg? 
                    <Button
                    name={'Save & Continue'}
                    onClick={handleContinue}
                    />:
                    <Button
                    name={'Verify Email'}
                    onClick={()=>{
                        if(handleCheck()){
                            handleVerifyEmail()
                        }
                    }}
                    textColor={handleCheck()? null:'text-silverGray'}
                    bgColor={handleCheck()? null:'bg-polarWhite'}
                    />
                }
            </div>
        </div>
    </LoginPageTemplate>
  )
}

export default Step2

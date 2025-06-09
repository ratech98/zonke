import Button from "../components/button/button"
import Checkbox from "../components/button/checkbox"
import Dialog from "../components/dialog/dialog"
import ErrorMsg from "../components/message/error-msg"
import LoginPageTemplate from "../components/template/login-page-template"
import SelectTextfield from "../components/textfield/select-textfield"
import Textfield from "../components/textfield/textfield"
import TransSpan from "../components/translation/trans-span"
import UsePersonalDetails from "../hooks/use-personal-details"
import ICONS from "../icons/icons"
import IMAGES from "../images/images"


const PersonalDetails = () => {

  const {
    formik,
    categories,
    handleClickSelectLocation,
    handleVerifyIdentify,
    handleCheck,
    error,
    handleContinue,
    openModal,
    dispatch,
    setPersonalDetails,
    personalDetails
  } = UsePersonalDetails()

  return (
    <LoginPageTemplate
    image={IMAGES.personalDetailsImage}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col justify-between gap-[100px] h-screen overflow-y-auto">
          <div className="flex flex-col gap-[32px]">
            {/* title */}
            <TransSpan className='lg:text-[32px] text-[24px] font-bold text-graniteGray'>
              Hello. Let's get you Onboard!
            </TransSpan>
            
            <div className="flex flex-col gap-[24px]">
              <TransSpan className='font-medium text-[20px] text-darkCharCoal'>
                ID Number Verification
              </TransSpan>

              {/* textfields */}
              <div className="flex flex-col gap-[20px]">
                {/* business name */}
                <Textfield
                placeholder={'Business Name'}
                label={'Business Name'}
                required={true}
                onChange={(value)=>{
                  formik.setFieldValue('businessName',value)
                  dispatch(setPersonalDetails({businessName: value}))
                }}
                value={formik.values.businessName}
                error={formik.touched.businessName&&formik.errors.businessName}
                errorMsg={
                  formik.touched.businessName&&formik.errors.businessName?
                  formik.errors.businessName:null
                }
                />

                {/* cipc reg number */}
                <Textfield
                placeholder={'CIPC Registration Number'}
                label={'CIPC Registration Number'}
                required={true}
                onChange={(value)=>{
                  // if(Regex.only_number.test(value)){
                    formik.setFieldValue('CIPCRegNumber',value)
                    dispatch(setPersonalDetails({...personalDetails, CIPCRegNumber: value}))
                  // }
                }}
                value={formik.values.CIPCRegNumber}
                error={formik.touched.CIPCRegNumber&&formik.errors.CIPCRegNumber}
                errorMsg={
                  formik.touched.CIPCRegNumber&&formik.errors.CIPCRegNumber?
                  formik.errors.CIPCRegNumber:null
                }
                />

                {/* business category */}
                <SelectTextfield
                label={'Business Category'}
                placeholder={'Business Category'}
                required={true}
                data={categories}
                onChange={(value)=>{
                  formik.setFieldValue('businessCategory',value)
                  dispatch(setPersonalDetails({...personalDetails, businessCategory: value}))
                }}
                value={formik.values.businessCategory}
                error={formik.touched.businessCategory&&formik.errors.businessCategory}
                errorMsg={
                  formik.touched.businessCategory&&formik.errors.businessCategory?
                  formik.errors.businessCategory:null
                }
                />

                {/* select location */}
                <Textfield
                px={'px-[14px] pl-[50px]'}
                placeholder={'Select Location'}
                label={'Location'}
                value={formik.values.location}
                error={formik.touched.location&&formik.errors.location}
                errorMsg={
                  formik.touched.location&&formik.errors.location?
                  formik.errors.location:null
                }
                customLeftUi={
                  <div className="flex items-center justify-center h-full px-3">
                    <span className="text-[30px] text-gray">{ICONS.location}</span>
                  </div>
                }
                required={true}
                showCaret={false}
                onClick={handleClickSelectLocation}
                />

                {/* terms and condition */}
                <div>
                  <div className="flex items-start">
                    <Checkbox
                    checked={formik.values.terms}
                    onChange={()=>{
                      formik.setFieldValue('terms',!formik.values.terms)
                      dispatch(setPersonalDetails({...personalDetails, terms: !formik.values.terms}))
                    }}
                    />

                    <span className="text-[12px] font-medium text-stormGray">
                      <TransSpan>I have read and accepted the</TransSpan> <TransSpan className='text-orangeRed underline'>Zonke</TransSpan> <TransSpan>terms & conditions and privacy policy</TransSpan>
                    </span>
                  </div>
                  <span className="text-xs text-red-500">
                    {
                      formik.touched.terms&&formik.errors.terms?
                      formik.errors.terms:null
                    }
                  </span>
                </div>

                {
                  error &&
                  <ErrorMsg/>
                }
              </div>
            </div>
          </div>

          <Button
          name={'Verify Identify'}
          onClick={handleVerifyIdentify}
          textColor={handleCheck()? null:'text-silverGray'}
          bgColor={handleCheck()? null:'bg-polarWhite'}
          />
        </div>
      </div>

      <Dialog
      open={openModal}
      >
        <div className="p-[32px] rounded-[16px] bg-white flex flex-col gap-[54px] items-center lg:w-[597px]">
          <div className="flex flex-col gap-[32px] items-center text-center">
            <img
            src={IMAGES.roundTickImage}
            className="w-[108px] h-[108px] object-contain"
            />
            
            <TransSpan className='text-[24px] font-semibold text-jetBlack w-100'>Business details verified successfully!</TransSpan>
          </div>

          <div className="w-full">
            <Button
            name={'Continue'}
            onClick={handleContinue}
            />
          </div>
        </div>
      </Dialog>
    </LoginPageTemplate>
  )
}

export default PersonalDetails

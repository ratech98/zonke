import Button from "../components/button/button"
import LoginPageTemplate from "../components/template/login-page-template"
import Textfield from "../components/textfield/textfield"
import TransSpan from "../components/translation/trans-span"
import UsePersonalDetails from "../hooks/use-personal-details"
import ICONS from "../icons/icons"
import IMAGES from "../images/images"


const PersonalDetails = () => {

  const {
    formik
  } = UsePersonalDetails()

  return (
    <LoginPageTemplate
    image={IMAGES.personalDetailsImage}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col justify-between h-screen overflow-y-auto gap-[100px]">
          <div className="flex flex-col gap-[32px]">
            <TransSpan className='lg:text-[32px] text-[24px] font-bold text-graniteGray'>
              Hello. Let's get you Onboard!
            </TransSpan>
            
            <div className="flex flex-col gap-[24px]">
              <TransSpan className='font-medium text-[20px] text-darkCharCoal'>
                ID Number Verification
              </TransSpan>

              {/* textfields */}
              <div className="flex flex-col gap-[20px]">
                <Textfield
                placeholder={'Business Name'}
                label={'Business Name'}
                required={true}
                onChange={(value)=>{
                  formik.setFieldValue('businessName',value)
                }}
                value={formik.values.businessName}
                error={formik.touched.businessName&&formik.errors.businessName}
                errorMsg={
                  formik.touched.businessName&&formik.errors.businessName?
                  formik.errors.businessName:null
                }
                />

                <Textfield
                placeholder={'CIPC Registration Number'}
                label={'CIPC Registration Number'}
                required={true}
                onChange={(value)=>{
                  formik.setFieldValue('CIPCRegNumber',value)
                }}
                value={formik.values.CIPCRegNumber}
                error={formik.touched.CIPCRegNumber&&formik.errors.CIPCRegNumber}
                errorMsg={
                  formik.touched.CIPCRegNumber&&formik.errors.CIPCRegNumber?
                  formik.errors.CIPCRegNumber:null
                }
                />

                <Textfield
                px={'px-[14px] pe-[50px]'}
                placeholder={'Business Category'}
                label={'Business Category'}
                value={formik.values.businessCategory}
                error={formik.touched.businessCategory&&formik.errors.businessCategory}
                errorMsg={
                  formik.touched.businessCategory&&formik.errors.businessCategory?
                  formik.errors.businessCategory:null
                }
                customRightUi={
                  <div className="flex items-center justify-center h-full px-3">
                    <span className="text-[30px] text-davyGray">{ICONS.downCaret}</span>
                  </div>
                }
                required={true}
                showCaret={false}
                />

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
                />
              </div>
            </div>
          </div>

          <Button
          name={'Verify Identify'}
          />
        </div>
      </div>
    </LoginPageTemplate>
  )
}

export default PersonalDetails

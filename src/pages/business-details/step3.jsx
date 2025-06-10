import LoginPageTemplate from '../../components/template/login-page-template'
import Steps from '../../components/steps/steps'
import TransSpan from '../../components/translation/trans-span'
import Textfield from '../../components/textfield/textfield'
import UseStep3 from '../../hooks/business-details/use-step3'
import FileInput from '../../components/fileInput/fileInput'
import Button from '../../components/button/button'
import IMAGES from '../../images/images'

const Step3 = () => {

  const {
    formik,
    handleContinue,
    handleCheck
  }  = UseStep3()

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
              stepNo={3}
              />
            </div>

             <div className="flex flex-col gap-[24px]">
                <TransSpan className='text-[20px] font-medium text-darkCharCoal'>
                  Compliance & Financial Details
                </TransSpan>

                {/* textfields */}
                <div className="flex flex-col gap-[20px]">
                  {/* contact person name */}
                  <Textfield
                  placeholder={'Tax Number'}
                  label={'Tax Number'}
                  required={true}
                  onChange={(value)=>{
                  formik.setFieldValue('taxNumber',value)
                  }}
                  value={formik.values.taxNumber}
                  error={formik.touched.contactName&&formik.errors.contactName}
                  errorMsg={
                  formik.touched.taxNumber&&formik.errors.taxNumber?
                  formik.errors.taxNumber:null
                  }
                  // readOnly={successMsg}
                  // backgroundColor={successMsg? 'bg-whiteSmoke':''}
                  />

                  {/* trade license */}
                  <FileInput
                  label={'Trade License'}
                  value={formik.values.tradeLicense}
                  onChange={(value)=>{
                    formik.setFieldValue('tradeLicense',value)
                  }}
                  required={true}
                  />

                  {/* proof of address */}
                  <FileInput
                  label={'Proof of Address'}
                  value={formik.values.proofOfAddress}
                  onChange={(value)=>{
                    formik.setFieldValue('proofOfAddress',value)
                  }}
                  />

                  {/* registration document */}
                  <FileInput
                  label={'Registration Document'}
                  value={formik.values.registrationDocument}
                  onChange={(value)=>{
                    formik.setFieldValue('registrationDocument',value)
                  }}
                  />
                </div>
            </div>
          </div>

          <Button
          name={'Save & Continue'}
          onClick={()=>{
              if(handleCheck()){
                  handleContinue()
              }
          }}
          textColor={handleCheck()? null:'text-silverGray'}
          bgColor={handleCheck()? null:'bg-polarWhite'}
          />
        </div>
      </div>
    </LoginPageTemplate>
  )
}

export default Step3

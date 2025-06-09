import React from 'react'
import LoginPageTemplate from '../../components/template/login-page-template'
import IMAGES from '../../images/images'
import TransSpan from '../../components/translation/trans-span'
import Steps from '../../components/steps/steps'
import Textfield from '../../components/textfield/textfield'
import Button from '../../components/button/button'
import UseStep1 from '../../hooks/business-details/use-step1'

const Step1 = () => {

    const {
        handleContinue
    } = UseStep1()

  return (
    <LoginPageTemplate
    image={IMAGES.BusinessDetailsImage}
    >
        <div className='flex flex-col h-full'>
            <div className='flex flex-col gap-[100px] h-screen overflow-y-auto'>
                <div className='flex flex-col gap-[32px]'>
                    <div className='flex flex-col gap-[8px]'>
                        {/* title */}
                        <TransSpan className='lg:text-[32px] text-[24px] font-bold text-graniteGray'>
                            Hello. Let's get you Onboard!
                        </TransSpan>

                        <Steps
                        stepNo={1}
                        />
                    </div>

                    <div className='flex flex-col gap-[24px]'>
                        <TransSpan className='text-[20px] font-medium text-darkCharCoal'>Business Profile Details</TransSpan>

                        {/* textfields */}
                        <div className='flex flex-col gap-[20px]'>
                            {/* business name */}
                            <Textfield
                            placeholder={'Business Name'}
                            label={'Business Name'}
                            required={true}
                            value={'Business Name'}
                            readOnly={true}
                            backgroundColor={'bg-whiteSmoke'}
                            />
                            {/* cipc reg number */}
                            <Textfield
                            placeholder={'CIPC Registration Number'}
                            label={'CIPC Registration Number'}
                            required={true}
                            value={'1234/123456/12'}
                            readOnly={true}
                            backgroundColor={'bg-whiteSmoke'}
                            />
                            {/* business type */}
                            <Textfield
                            placeholder={'Business Type'}
                            label={'Business Type'}
                            required={true}
                            value={'Retail store'}
                            readOnly={true}
                            backgroundColor={'bg-whiteSmoke'}
                            />
                            {/* business status */}
                            <Textfield
                            placeholder={'Business Status'}
                            label={'Business Status'}
                            required={true}
                            value={'Active'}
                            readOnly={true}
                            backgroundColor={'bg-whiteSmoke'}
                            />
                        </div>
                    </div>
                </div>

                <Button
                name={'Save & Continue'}
                onClick={handleContinue}
                />
            </div>
        </div>
    </LoginPageTemplate>
  )
}

export default Step1

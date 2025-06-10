import { lazy } from "react"
const Login = lazy(()=>import('../pages/login')) 
const Otp = lazy(()=>import('../pages/otp')) 
const PersonalDetails = lazy(()=>import('../pages/personal-details')) 
const SelectLocation = lazy(()=>import('../pages/select-location')) 
const SelectLocationMap = lazy(()=>import('../pages/select-location-map')) 
const Step1 = lazy(()=>import('../pages/business-details/step1')) 
const Step2 = lazy(()=>import('../pages/business-details/step2')) 
const Step3 = lazy(()=>import('../pages/business-details/step3')) 
const Step4 = lazy(()=>import('../pages/business-details/step4')) 


const AllRoutes = [
    {
        name: 'login',
        component: <Login/>,
        path: '/login'
    },
    {
        name: 'otp',
        component: <Otp/>,
        path: '/otp'
    },
    {
        name: 'personal details',
        component: <PersonalDetails/>,
        path: '/personalDetails'
    },
    {
        name: 'select location',
        component: <SelectLocation/>,
        path: '/selectLocation'
    },
    {
        name: 'select location map',
        component: <SelectLocationMap/>,
        path: '/selectLocationMap'
    },
    {
        name: 'business details step 1',
        component: <Step1/>,
        path: '/businessDetailsStep1'
    },
    {
        name: 'business details step 2',
        component: <Step2/>,
        path: '/businessDetailsStep2'
    },
    {
        name: 'business details step 3',
        component: <Step3/>,
        path: '/businessDetailsStep3'
    },
    {
        name: 'business details step 4',
        component: <Step4/>,
        path: '/businessDetailsStep4'
    },
]

export default AllRoutes

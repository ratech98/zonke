import { lazy } from "react"
const Login = lazy(()=>import('../pages/login')) 
const Otp = lazy(()=>import('../pages/otp')) 
const PersonalDetails = lazy(()=>import('../pages/personal-details')) 
const SelectLocation = lazy(()=>import('../pages/select-location')) 
const SelectLocationMap = lazy(()=>import('../pages/select-location-map')) 


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
]

export default AllRoutes

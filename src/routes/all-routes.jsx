import Login from "../pages/login"
import Otp from "../pages/otp"
import PersonalDetails from "../pages/personal-details"


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
    }
]

export default AllRoutes

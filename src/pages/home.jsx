import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()
    const {name} = useSelector(state => state?.auth)

  return (
    <div 
    onClick={()=>navigate('/about')}
    className='text-2xl text-random'
    >
      {name? name: 'home'}
    </div>
  )
}

export default Home

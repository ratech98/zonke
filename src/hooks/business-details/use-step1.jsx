import { useNavigate } from "react-router-dom"


const UseStep1 = () => {

    const navigate = useNavigate()

    //continue
    const handleContinue = () =>{
        navigate('/businessDetailsStep2')
    }

  return {
    handleContinue
  }
}

export default UseStep1

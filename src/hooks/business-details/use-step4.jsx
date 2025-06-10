import { useState } from "react"
import IMAGES from "../../images/images"
import { useNavigate } from "react-router-dom"
import { persistor } from '../../redux-store/store'


const UseStep4 = () => {

    const options = [
        {
            image: IMAGES.qr,
            name: 'Scan & Pay (QR Code)',
            selected_image: IMAGES.qrOrange
        },
        {
            image: IMAGES.link,
            name: 'Payment Link',
            selected_image: IMAGES.linkOrange
        },
        {
            image: IMAGES.doubleTick,
            name: 'Both (Scan & Pay + Payment Link)',
            selected_image: IMAGES.doubleTickOrange
        },
    ]

    const navigate = useNavigate()

    const [selected, setSelected] = useState(null)
    const [openModal, setOpenModal] = useState(false)

    //select
    const handleSelect = (index) =>{
        setSelected(index)
    }

    //check
    const handleCheck = () => {
        const bool = Boolean(
            selected !== null
        )

        return bool
    }

    //get started
    const handleGetStarted = () =>{
        setOpenModal(true)
    }

    //sign agreement
    const handleSignAgreement = async() =>{
        setOpenModal(false)
        await persistor.purge()
        navigate('/login')
    }

  return {
    options,
    handleGetStarted,
    handleCheck,
    handleSelect,
    selected,
    handleSignAgreement,
    openModal
  }
}

export default UseStep4

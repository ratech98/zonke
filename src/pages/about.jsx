import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
  return (
    <div onClick={()=> navigate('/')}>
      about
    </div>
  )
}

export default About

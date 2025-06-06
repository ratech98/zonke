import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UseSelectLocation = () => {

  const popularLocations = [
    {name: 'Cape Town'},
    {name: 'Johannasburg'},
    {name: 'Gqueberha'},
    {name: 'Durban'},
    {name: 'Pretoria'},
    {name: 'Bloemfountein'},
    {name: 'East London'},
    {name: 'Knvsna'},
  ]

  const navigate = useNavigate()

  const [search, setSearch] = useState('')

  //click use my current location
  const handleUseCurrentLocation = () =>{
    navigate('/selectLocationMap')
  }

  return {
    search,
    setSearch,
    popularLocations,
    handleUseCurrentLocation
  }
}

export default UseSelectLocation

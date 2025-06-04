import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'

const RootNavigator = () => {
  return (
    <div>
        <Suspense fallback={<div>loading...</div>}>
        <Routes>
            <Route element={<Home/>}  path='/'/>
            <Route element={<About/>}  path='/about'/>
        </Routes>
        </Suspense>
    </div>
  )
}

export default RootNavigator

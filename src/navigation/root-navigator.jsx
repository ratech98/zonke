import React, { Suspense, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AllRoutes from '../routes/all-routes'

const RootNavigator = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    navigate('/login')
  },[])

  return (
    <div className='font-inter'>
        <Suspense fallback={<div>loading...</div>}>
        <Routes>
          {
            AllRoutes?.map((item,index)=>(
              <Route
              key={index}
              element={item.component}
              path={item?.path}
              />
            ))
          }
        </Routes>
        </Suspense>
    </div>
  )
}

export default RootNavigator

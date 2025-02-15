import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Landing from '../Pages/Common/Landing'
import Registration from '../Pages/Common/Registration'
import Login from '../Pages/Common/Login'

function CommonRoute() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/Login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default CommonRoute

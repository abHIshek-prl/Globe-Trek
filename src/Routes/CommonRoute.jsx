import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Landing from '../Pages/Common/Landing'
import Registration from '../Pages/Common/Registration'
import Login from '../Pages/Common/Login'
import Chat from '../Pages/Common/Chat'
import Payment from '../Pages/Common/Payment'

function CommonRoute() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/pay' element={<Payment/>}/>
      </Routes>
    </div>
  )
}

export default CommonRoute

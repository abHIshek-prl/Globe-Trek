import React from 'react'
import { Router,Route, Routes } from 'react-router-dom'
import Home from '../../Pages/User/Home'
import Service from '../../Pages/User/Service'
import About from '../../Pages/User/About'
import Bookings from '../../Pages/User/Bookings'



function UserRoute() {
  return (
    <div>
      

        <Routes>
           
            <Route path='/home' element={<Home/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/bookings' element={<Bookings/>}/>
        </Routes>


    </div>
  )
}

export default UserRoute

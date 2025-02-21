import React from 'react'
import { Router,Route, Routes } from 'react-router-dom'
import Home from '../../Pages/User/Home'
import Service from '../../Pages/User/Service'
import About from '../../Pages/User/About'
import Bookings from '../../Pages/User/Bookings'
import Planning from '../../Pages/User/Planning'
import Package from '../../Pages/User/Package'
import Vehicle from '../../Pages/User/Vehicle'
import Guid from '../../Pages/User/Guid'
import Resort from '../../Pages/User/Resort'
import Advanture from '../../Pages/User/Advanture'



function UserRoute() {
  return (
    <div>
      

        <Routes>
           
            <Route path='/home' element={<Home/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/bookings' element={<Bookings/>}/>
            <Route path='/planning' element={<Planning/>}/>
            <Route path='/package' element={<Package/>}/>
            <Route path='/vehicle' element={<Vehicle/>}/>
            <Route path='/guid' element={<Guid/>}/>
            <Route path='/resort' element={<Resort/>}/>
            <Route path='/advanture' element={<Advanture/>}/>

        </Routes>


    </div>
  )
}

export default UserRoute

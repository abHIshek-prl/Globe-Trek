import React from 'react'
import {Route, Routes } from 'react-router-dom'
import AgencyHome from '../../Pages/Agency/AgencyHome'
import AgProvide from '../../Pages/Agency/AgProvide'
import AgAbout from '../../Pages/Agency/AgAbout'
import AddPackage from '../../Pages/Agency/AddPackage'
import AddVehicle from '../../Pages/Agency/AddVehicle'
import AddGuid from '../../Pages/Agency/AddGuid'
import AddResort from '../../Pages/Agency/AddResort'
import AddActivty from '../../Pages/Agency/AddActivty'

function AgencyRoute() {
  return (
    <div>
      

    <Routes>
           
       <Route path='/aghome' element={<AgencyHome/>}/>
       <Route path='/provide' element={<AgProvide/>}/>
       <Route path='/agabout' element={<AgAbout/>}/>
       <Route path='/agpackage' element={<AddPackage/>}/>
       <Route path='/agvehicle' element={<AddVehicle/>}/>
       <Route path='/agguid' element={<AddGuid/>}/>
       <Route path='/agresort' element={<AddResort/>}/>
       <Route path='/agactivity' element={<AddActivty/>}/>


    </Routes>

    </div>
  )
}

export default AgencyRoute

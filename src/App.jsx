
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import UserRoute from './Routes/User-Route/UserRoute'
import CommonRoute from './Routes/CommonRoute'
import AgencyRoute from './Routes/Agency-Route/AgencyRoute'



function App() {
  

  return (
    <>
    {/* USER */}
     
    <BrowserRouter>
      <UserRoute/>
      <CommonRoute/>
      <AgencyRoute/>
    </BrowserRouter>
    

    
     
     
     
     

    </>
  )
}

export default App



// register -> user home
// login -> agency home
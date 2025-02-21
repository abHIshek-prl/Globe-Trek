
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import UserRoute from './Routes/User-Route/UserRoute'
import CommonRoute from './Routes/CommonRoute'



function App() {
  

  return (
    <>
    {/* USER */}
     
    <BrowserRouter>
      <UserRoute/>
      <CommonRoute/>
    </BrowserRouter>
    

    
     
     
     
     

    </>
  )
}

export default App



// register -> home
// login -> chat
// home -> start planning -> payment
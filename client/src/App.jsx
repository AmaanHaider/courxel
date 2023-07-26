
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Users/Dashboard'
import Home from './Pages/UserPages/Home'
import Login from './Pages/UserPages/Login'
import Signup from './Pages/UserPages/Signup'
import UserPrivateRoute from './PrivateRoutes/UserPrivateRoute'

function App() {
  return (
    <div>
      <Routes>
        {/* //userroutes  ---------------------------*/}
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      <Route path='/dashboard' element={<UserPrivateRoute Component={Dashboard} />}/>
      </Routes>
    </div>
  )
}

export default App

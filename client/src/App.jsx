
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Users/Signup'
import Login from './Components/Users/Login'
import Dashboard from './Components/Users/Dashboard'
import Home from './Pages/UserPages/Home'

function App() {
  return (
    <div>
      <Routes>
        {/* //userroutes  ---------------------------*/}
        <Route path='/' element={<Home/>}/>

        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App

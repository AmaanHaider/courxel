
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/UserPages/Home'
import Login from './Pages/UserPages/Login'
import Signup from './Pages/UserPages/Signup'
import CourseDetails from './Pages/UserPages/CourseDetails'
import { UserPrivateRoute } from './PrivateRouter/UserPrivateRoute'
import DashBoard from './Pages/UserPages/DashBoard'
import Example from './Example'
import Purchased from './Pages/UserPages/Purchased'
import PurchasedDetails from './Pages/UserPages/PurchasedDetails'
import PageNotFound from './Pages/PageNotFound'

function App() {
  return (
    <div>
      <Routes>
          <Route path='*' element={<PageNotFound/>}/>
        {/* //userroutes  ---------------------------*/}
          <Route path='/' element={<Home/>}/>
          <Route path='/example' element={<Example/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
  {/*----------------------- user private routes ----------------------*/}
         <Route path="/user" element={<UserPrivateRoute/>}>
          <Route path="" element={<DashBoard/>} />
          <Route path="courses/:id" element={<CourseDetails/>}/> 
          <Route path="purchased" element={<Purchased/>}/> 
          <Route path="purchased/:id" element={<PurchasedDetails/>}/> 
        </Route>


        


      </Routes>
    </div>
  )
}

export default App





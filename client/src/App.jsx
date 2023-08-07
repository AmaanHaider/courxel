
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/UserPages/Home'
import Login from './Pages/UserPages/Login'
import Signup from './Pages/UserPages/Signup'
import CourseDetails from './Pages/UserPages/CourseDetails'
import PageNotFound from './Components/PageNotFound'
import { UserPrivateRoute } from './PrivateRouter/UserPrivateRoute'
import DashBoard from './Pages/UserPages/DashBoard'

function App() {
  return (
    <div>
      <Routes>
        <Route path='*' element={<PageNotFound/>}/>
        {/* //userroutes  ---------------------------*/}
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
  {/*----------------------- user private routes ----------------------*/}
         <Route path="/user" element={<UserPrivateRoute/>}>
          <Route path="" element={<DashBoard/>} />
        <Route path="courses/:id" element={<CourseDetails/>}/> 

          {/* <Route path="courses" element={<Course/>} />
          <Route path="courses/details/:id" element={<CourseDetails/>}/> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App

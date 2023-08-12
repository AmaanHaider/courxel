
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/UserPages/Home'
import Login from './Pages/UserPages/Login'
import Signup from './Pages/UserPages/Signup'
import CourseDetails from './Pages/UserPages/CourseDetails'
import { UserPrivateRoute } from './PrivateRouter/UserPrivateRoute'
import DashBoard from './Pages/UserPages/DashBoard'
import Purchased from './Pages/UserPages/Purchased'
import PurchasedDetails from './Pages/UserPages/PurchasedDetails'
import PageNotFound from './Pages/UserPages/PageNotFound'
import AdminSignUp from './Pages/AdminPages/AdminSignUp'
import AdminLogin from './Pages/AdminPages/AdminLogin'
import AdminDashboard from './Pages/AdminPages/AdminDashboard'
import AdminMyCourses from './Pages/AdminPages/AdminMyCourses'
import { AdminPrivateRoute } from './PrivateRouter/AdminPrivateRoutes'
import AdminCourseEdit from './Pages/AdminPages/AdminCourseEdit'

function App() {
  return (
    <div>
      <Routes>
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='' element={<PageNotFound/>}/>


          {/*----------------userroutes----------------*/}
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>

          {/*---------------- user private routes----------------*/}
          <Route path="/user/" element={<UserPrivateRoute/>}>
            <Route path="" element={<DashBoard/>} />
            <Route path="courses/:id" element={<CourseDetails/>}/> 
            <Route path="purchased" element={<Purchased/>}/> 
            <Route path="purchased/:id" element={<PurchasedDetails/>}/> 
          </Route>

{/* ----------------------------------------------------------------------------------- */}

           {/*----------------adminroutes----------------*/}

          <Route path='/admin/signup' element={<AdminSignUp/>}/>
          <Route path='/admin/login' element={<AdminLogin/>}/>


           {/*----------------adminPrivateroutes----------------*/}

          <Route path='/admin/' element={<AdminPrivateRoute/>}>
            <Route path='dashboard' element={<AdminDashboard/>}/>
            <Route path='dashboard/mycourses' element={<AdminMyCourses/>}/>
            <Route path='dashboard/mycourses/:id' element={<AdminCourseEdit/>}/>
          </Route>

      </Routes>
    </div>
  )
}

export default App





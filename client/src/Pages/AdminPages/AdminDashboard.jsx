import React from 'react'
import AdminDashboardComp from '../../Components/Admin/AdminDashboardComp'
import AdminCreateCourseComp from '../../Components/Admin/AdminCreateCourseComp'


const AdminDashboard = () => {
  return (
    <AdminDashboardComp Children={<AdminCreateCourseComp/>}/>
  )
}

export default AdminDashboard
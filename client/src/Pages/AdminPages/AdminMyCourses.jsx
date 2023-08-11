import React from 'react'
import AdminDashboardComp from '../../Components/Admin/AdminDashboardComp'
import AdminMyCourseComp from '../../Components/Admin/AdminMyCourseComp'

const AdminMyCourses = () => {
  return (
    <AdminDashboardComp Children={<AdminMyCourseComp/>}/>
  )
}

export default AdminMyCourses
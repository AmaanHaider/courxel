import React from 'react'
import AdminDashboardComp from '../../Components/Admin/AdminDashboardComp'
import AdminCourseEditComp from '../../Components/Admin/AdminCourseEditComp'

const AdminCourseEdit = () => {
  return (
    <AdminDashboardComp Children={<AdminCourseEditComp/>}/>
  )
}

export default AdminCourseEdit
import React from 'react'
import DashboardComp from '../../Components/Users/DashboardComp'
import CourseComp from '../../Components/Users/CourseComp'

const DashBoard = () => {
  return (
    <DashboardComp Children={<CourseComp/>} />
  )
}

export default DashBoard
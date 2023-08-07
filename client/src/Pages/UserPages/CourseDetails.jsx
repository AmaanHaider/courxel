import React from 'react'
import DashboardComp from '../../Components/Users/DashboardComp'
// import CourseComp from '../../Components/Users/CourseComp'
import CourseDetailsComp from '../../Components/Users/CourseDetailsComp'

const CourseDetails = () => {
  return (
    <DashboardComp Children={<CourseDetailsComp/>}/>
  )
}

export default CourseDetails
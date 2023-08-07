import React from 'react'
import PuchasedComp from '../../Components/Users/PuchasedComp'
import DashboardComp from '../../Components/Users/DashboardComp'

const Purchased = () => {
  return (
    <DashboardComp Children={<PuchasedComp/>}/>
  )
}

export default Purchased
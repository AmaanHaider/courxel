import React from 'react'
import DashboardComp from '../../Components/Users/DashboardComp'
import PurchasedDeatilsComp from '../../Components/Users/PurchasedDeatilsComp'

const PurchasedDetails = () => {
  return (
    <DashboardComp Children={<PurchasedDeatilsComp/>} />
  )
}

export default PurchasedDetails
import React from 'react'
import RevenueCard, { MasterRevenueComponent } from './RevenueCard'
{/* TODO:left near revenure card at 1:54pm 28 feb need to fix the hover issue of revenue card and then work on transaction and transaction table */}
const Overview = () => {
  return (
    <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-3  my-3'>
        <MasterRevenueComponent title={"Next Payout"} amount={"2,312.23"} orderCount={23} nextPayment={Date.now()} />
        <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
        <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"}/>

    </div>
  )
}
// FIXME: Left here

export default Overview

import React from 'react'
import RevenueCard, { MasterRevenueComponent } from './RevenueCard'
{/* TODO:left near revenure card at 1:54pm 28 feb need to fix the hover issue of revenue card and then work on transaction and transaction table */}
const Overview = () => {
  return (
    <>
      <div className='p-2 flex justify-between items-center'>
        <p className='font-semibold text-xl'>Overview</p>
        <div className='flex font-medium border-2 w-fit bg-white text-lg flex-row items-center'>This Month 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>

</div>
      </div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-3  my-3'>
          <MasterRevenueComponent title={"Next Payout"} amount={"2,312.23"} orderCount={23} nextPayment={Date.now()} />
          <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
          <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"}/>

      </div>
    </>
  )
}
// FIXME: Left here

export default Overview

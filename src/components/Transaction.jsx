import React from 'react'
import Button from './Button'

const Transaction = () => {
  return (
    <div className='flex flex-col p-1 my-1 gap-3'>
      
      <p className='text-bold text-2xl p-1 m-1'>
      Transactions | This Month
      </p>

      <div className='grid gap-3 grid-cols-2 w-[15%] '>
        <Button count={22} isClicked={false} name={'Payouts'} />
        <Button count={6} isClicked={true} name={'Refunds'} />
      </div>
    </div>
  )
}

export default Transaction

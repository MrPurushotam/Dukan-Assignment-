import React from 'react'
import Searchbar from './Searchbar'

const TransactionTable = () => {
  return (
    <div className='flex flex-col p-4 w-full mx-auto bg-white'>
      <div className='flex justify-between'> 
        <div className=' w-1/5'>
          <Searchbar placeholder={"Order ID or transactions ID"} className={"bg-white"} />  
        </div>
        <div className='flex items-center flex-row '>
          <div className='flex-row flex items-center p-1 text-lg border-2 shadow-sm '>Sort 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z" clip-rule="evenodd" />
          </svg>
        </div>
          <div className='border-2 shadow-md p-1 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
</div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default TransactionTable

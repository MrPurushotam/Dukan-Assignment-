import React from 'react'
import Searchbar from './Searchbar'

const TransactionTable = () => {
  let tabledata=[
    {
      orderId:"#281209",
      status:true,
      transactionId:"TRX123456",
      refundDate:"Today, 8:45 PM",
      amount:1125.00
    },
    {
      orderId:"#281210",
      status:false,
      transactionId:"TRX789012",
      refundDate:"Tomorrow, 10:00 AM",
      amount:950.50
    },
    {
      orderId:"#281211",
      status:true,
      transactionId:"TRX345678",
      refundDate:"Yesterday, 3:30 PM",
      amount:750.00
    },
    {
      orderId:"#281212",
      status:true,
      transactionId:"TRX901234",
      refundDate:"Today, 11:20 AM",
      amount:2000.00
    },
    {
      orderId:"#281213",
      status:false,
      transactionId:"TRX567890",
      refundDate:"Tomorrow, 9:00 AM",
      amount:1800.00
    },
    {
      orderId:"#281214",
      status:false,
      transactionId:"TRX098765",
      refundDate:"Yesterday, 2:00 PM",
      amount:500.00
    },
    {
      orderId:"#281215",
      status:true,
      transactionId:"TRX456789",
      refundDate:"Today, 10:30 AM",
      amount:3000.00
    },
    {
      orderId:"#281216",
      status:false,
      transactionId:"TRX987654",
      refundDate:"Tomorrow, 11:30 AM  ",
      amount:1200.00
    },
    {
      orderId:"#281217",
      status:false,
      transactionId:"TRX654321",
      refundDate:"Yesterday, 4:00 PM",
      amount:900.00
    },
    {
      orderId:"#281218",
      status:true,
      transactionId:"TRX234567",
      refundDate:"Today, 9:45 AM",
      amount:1500.00
    },
  ]
  return (
    <div className='flex flex-col p-4 w-full mx-auto bg-white'>
      <div className='flex justify-between'> 
        <div className=' w-2/5'>
          <Searchbar lightColorBg={true} placeholder={"Order ID or transactions ID"} className={"bg-white"} />  
        </div>
        <div className='flex items-center flex-row '>
          <div className='flex-row flex items-center p-1 text-lg border-2 shadow-sm '>Sort 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M2.24 6.8a.75.75 0 0 0 1.06-.04l1.95-2.1v8.59a.75.75 0 0 0 1.5 0V4.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L2.2 5.74a.75.75 0 0 0 .04 1.06Zm8 6.4a.75.75 0 0 0-.04 1.06l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75a.75.75 0 0 0-1.5 0v8.59l-1.95-2.1a.75.75 0 0 0-1.06-.04Z" clip-rule="evenodd" />
            </svg>
        </div>
          <div className='border-2 shadow-md p-1 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="w-full h-auto relative overflow-x-auto shadow-md sm:rounded-lg my-8 mx-auto">
        <table className='w-full mx-auto' >
          <thead className='text-sm text-left  bg-slate-200 ' >
            <tr className='' >
              <th scope="col" className="w-1/5 px-4 py-2">
                  Order ID
              </th>
              <th scope="col" className="w-1/5 px-4 py-2">
                  Status
              </th>
              <th scope="col" className="w-1/5 px-4 py-2">
                  Transaction ID
              </th>
              <th scope="col" className="w-1/5 px-4 py-2">
                  Refund Date
              </th>
              <th scope="col" className="w-1/5 text-left px-4 py-2">
                  Order Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {tabledata.map(data=>(
              <tr className=' font-semibold py-2 ' key={data.orderId}>
                <td className='w-1/5 text-customBlue-500 px-4'>
                  {data.orderId}
                </td>
                <td className='w-1/5 text-customGrey-500 px-4'>
                  {data.status?"Successful":"Processing"}
                </td> 
                <td className='w-1/5  text-customGrey-500 px-4'>
                  {data.transactionId}
                </td>
                <td className='w-1/5  text-customGrey-500 px-4'>
                  {data.refundDate}
                </td>
                <td className='w-1/5 text-right  text-customGrey-500 px-4'>
                  ₹{parseFloat(data.amount)}
                </td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TransactionTable

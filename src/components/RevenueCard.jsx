import React from 'react'

const RevenueCard = ({title,orderCount,amount,nextPayment}) => {
  return (
    <div className='shadow-md rounded-lg m-1 max-h-[130px] min-w-[300px]'>
    <div className={`bg-white p-4`}>
        <div className={`text-customGrey-500 flex font-medium text-lg items-center`}>
            {title}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
        </div>
        <div className='flex justify-between py-3'  >
            <div className={`font-semibold text-xl text-black`}>
                ₹{amount}
            </div>
            {orderCount?
            <div className={`flex text-customBlue-600 font-semibold underline items-center cursor-pointer`}>
                <div>
                    {orderCount} Order{orderCount>1?"s":""} 
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                </svg>
            </div>:null}

        </div>
    
    </div>
    </div>
  )
}
export default RevenueCard

export const MasterRevenueComponent=({title,orderCount,amount,nextPayment})=>{

    return(
    <div className='shadow-md rounded-lg border-2 border-black m-1 min-w-[300px]'>
        <div className={`bg-customBlue-500 p-5 hover:bg-customBlue-700`}>
            <div className={`text-white text-lg flex font-medium items-center`}>
                {title}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div>
            <div className='flex justify-between py-2 '  >
                <div className={`font-semibold text-3xl text-white`}>
                    ₹{amount}
                </div>
                {orderCount?
                <div className={`flex text-white text-lg underline items-center cursor-pointer`}>
                    <div>
                        {orderCount} Order{orderCount>1?"s":""} 
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                    </svg>
                </div>:null}
            </div>
        </div>
        
        <div className='flex flex-col'>
            <div className='flex justify-between text-[#fff] bg-customBlue-700 w-full px-6 py-2 '>
                <div>Next Payment Date:</div>
                <div>Today, {new Date(nextPayment).toLocaleDateString('en-IN',{hour:"numeric",minute:"numeric",hour12:true}).split(', ')[1]}</div>
            </div>
        </div>
    </div>
    )
}

import React from 'react'

const Searchbar = ({ placeholder, onChange, className,lightColorBg }) => {
  return (
    <div className={`w-full flex flex-row items-center relative ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 ">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input type="text" placeholder={placeholder} className={`pl-10 pr-4 py-1  font-medium w-full ${lightColorBg?"bg-white border-2 ":"bg-gray-200"}  rounded-md`} onChange={onChange} />
    </div>
  )
}

export default Searchbar

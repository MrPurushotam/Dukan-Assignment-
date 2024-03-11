import React from 'react'

const Button = ({name,isClicked,count}) => {
  return (
    <>
      <button 
        className={`${isClicked?"bg-customBlue-500 text-gray-100":"bg-gray-300 text-slate-700"}
          min-w-24 py-1 rounded-full max-w-[110px] mx-3`
        }>
          {name} {count==0?"":`(${count})`}
        </button>
    </>
  )
}

export default Button

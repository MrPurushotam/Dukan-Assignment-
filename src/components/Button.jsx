import React from 'react'

const Button = ({name,isClicked,count}) => {
  return (
    <>
      <button className={`${isClicked?"bg-customBlue-500 text-gray-100":"bg-gray-300 text-slate-700"} px-3 p-1 rounded-3xl`}>{name} {count==0?"":`(${count})`}</button>
    </>
  )
}

export default Button

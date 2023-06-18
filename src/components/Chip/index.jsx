import React from 'react'

function index({title}) {
  return (
    <div className="flex justify-center items-center w-5 h-5  bg-[#E0E0E0]" style={{borderRadius:10,fontFamily:"Inter",fontSize:12}}>
      {title}
    </div>
  )
}

export default index
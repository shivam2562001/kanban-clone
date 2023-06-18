import React from 'react'
import "./priorchip.css"
function index({prior}) {
  return (
    <div className={`${prior}-prior ${prior}-text-style`}>
        {prior}
    </div>
  )
}

export default index
import React from 'react'
import { FiAlignJustify } from "react-icons/fi";

const NavBar = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <div className='bg-gray-900 p-3 text-white'>
      <FiAlignJustify size={40} onClick={()=>setSidebarToggle(!sidebarToggle)}/>
    </div>
  )
}

export default NavBar

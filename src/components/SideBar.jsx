import React from 'react'

const SideBar  = ({sidebarToggle}) => {
  return (
    <div className={`bg-gray-900 ${sidebarToggle ? "w-[190px]" : "w-[90px]"}  fixed h-full text-white`}>
       SideBar
    </div>
  )
}

export default SideBar

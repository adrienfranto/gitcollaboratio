import React from 'react'
import NavBar from './NavBar'
import Page from './Page'

const Dashbord = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <div className={`flex flex-col ${sidebarToggle ?  "ml-[190px]" : "ml-[90px]"}   w-full`}>
        <NavBar
            
          sidebarToggle = {sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        <Page/>
    </div>
  )
}

export default Dashbord

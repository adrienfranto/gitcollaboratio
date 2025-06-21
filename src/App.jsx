import React, { useState } from 'react'
import SideBar from './components/SideBar'
import Dashbord from './components/Dashbord'

const App = () => {
  const [sidebarToggle,setSidebarToggle] = useState(false);

  return (
    <div className='flex'> 
       <SideBar 
          sidebarToggle = {sidebarToggle}
       />
       <Dashbord
          
          sidebarToggle = {sidebarToggle}
          setSidebarToggle={setSidebarToggle}
       />
    </div>
  )
}

export default App

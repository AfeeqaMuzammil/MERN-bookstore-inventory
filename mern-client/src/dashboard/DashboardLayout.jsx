
import React from 'react'
import { Outlet } from 'react-router-dom'
import DashSideBar from './DashSideBar'


const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <DashSideBar/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout

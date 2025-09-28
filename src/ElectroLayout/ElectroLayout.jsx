import React from 'react'
import Footer from '../Pages/Footer'
import { Outlet } from 'react-router-dom'
import Nav from '../Pages/Nav'

const ElectroLayout = () => {
  return (
    <div>
        <Nav />
        {/* main */}
        <Outlet />
        {/* footer */}
        <Footer />
    </div>
  )
}


export default ElectroLayout
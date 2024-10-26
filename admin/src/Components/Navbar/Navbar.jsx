// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav_bar_logo.png'
import navProfile from '../../assets/admin_profile.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="nav-logo" />
        <img src={navProfile} alt="" className="nav-profile" />
    </div>
  )
}

export default Navbar
import React from 'react'

import "./NavBar.scss"

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <div className='nav-logo'><h2>LOGO</h2></div>
      <div className='nav-links'>
        <ul>
          <li>About us</li>
          <li>Contact us</li>
          <li>Admin Pannel</li>
        </ul>
      </div>
      <div className='nav-avatar'>Logout</div>
    </div>
  )
}

export default NavBar
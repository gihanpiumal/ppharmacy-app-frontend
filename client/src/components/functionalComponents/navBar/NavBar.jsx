import React from 'react'
import {NavLink} from "react-router-dom"

import {RoutesConstant} from "../../../assets/constants"

import "./NavBar.scss"

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <div className='nav-logo'><h2>LOGO</h2></div>
      <div className='nav-links'>
        <ul>
          <li><NavLink to={"/home"}>About us</NavLink></li>
          <li><NavLink to={"/home"}>Contact us</NavLink></li>
          <li><NavLink to={RoutesConstant.adminPannel}>Admin Pannel</NavLink></li>
        </ul>
      </div>
      <div className='nav-avatar'>Logout</div>
    </div>
  )
}

export default NavBar
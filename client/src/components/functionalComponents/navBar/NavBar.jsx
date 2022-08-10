import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RoutesConstant } from "../../../assets/constants";
import { adminStateChange } from "../../../services/actions/adminStateAction";

import "./NavBar.scss";

const NavBar = () => {
  const dispatch = useDispatch();

  const changeStatus = (key) => {
    dispatch(adminStateChange(key));
  };
  return (
    <div className="navbar-container">
      <div className="nav-logo">
        <h2>LOGO</h2>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink to={"/home"}>About us</NavLink>
          </li>
          <li>
            <NavLink to={"/home"}>Contact us</NavLink>
          </li>
          <li>
            <NavLink
              to={RoutesConstant.adminPannel}
              onClick={() => changeStatus("Dashboard")}
            >
              Admin Pannel
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-avatar">Logout</div>
    </div>
  );
};

export default NavBar;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { adminStateChange } from "../../../services/actions/adminStateAction";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

import "./AdminMenu.scss";

const AdminMenu = () => {
  const dispatch = useDispatch();

  const changeStatus = (key) => {
    dispatch(adminStateChange(key));
  };
  return (
    <Menu>
      <Menu.Item onClick={() => changeStatus("Dashboard")} key={"dashboard"}>
        Dashboard
      </Menu.Item>
      <Menu.Item key={"categories"} onClick={() => changeStatus("Categories")}>
        Categories
      </Menu.Item>
      <Menu.Item key={"medicines"}>Medicines</Menu.Item>
      <Menu.SubMenu key={"users"} title="Users">
        <Menu.Item key={"user_details"}>User Details</Menu.Item>
        <Menu.Item key={"user_roals"}>User Roals</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key={"store"}>Store</Menu.Item>
      <Menu.Item key={"purchase"}>Purchase</Menu.Item>
    </Menu>
  );
};

export default AdminMenu;

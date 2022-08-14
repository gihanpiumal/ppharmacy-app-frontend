import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { adminStateChange } from "../../../services/actions/adminStateAction";
import { getCategories } from "../../../services/actions/categoriesAction";
import { getUsers } from "../../../services/actions/usersAction";
import { getUserRoles } from "../../../services/actions/userRoalsAction";
import { getFromStore } from "../../../services/actions/storeAction";
import { getMedicines } from "../../../services/actions/medicineAction";
import { getPurchaceDetails } from "../../../services/actions/purchaseAction";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

import "./AdminMenu.scss";

const AdminMenu = () => {
  const dispatch = useDispatch();

  let objStore = {
    medicineId: "",
  };
  let objUsers = {
    firstName: "",
    userRoleId: "",
  };
  let objUserRoal = {
    roleName: "",
  };
  let objCategory = {
    categoryName: "",
  };
  let objMedicine = {
    name: "",
    doctrorApproval: null,
    categoryId: "",
  };
  let objPurchase = {
    purchaseNo: "",
    categoryId: "",
    medicineId: "",
    date: "",
    userId: "",
    addToStore: null,
  };

  const changeStatus = (val) => {
    dispatch(adminStateChange(val));
    switch (val) {
      case "Categories":
        return dispatch(getCategories(objCategory));
      // case "Medicines":
      //   return dispatch(getCategories(objMedicine));
      // case "User Details":
      //   return dispatch(getCategories(objUsers));
      // case "User Roals":
      //   return dispatch(getCategories(objUserRoal));
      // case "Store":
      //   return dispatch(getCategories(objStore));
      // case "Purchase":
      //   return dispatch(getCategories(objPurchase));
      default:
        break;
    }
  };
  return (
    <Menu>
      <Menu.Item onClick={() => changeStatus("Dashboard")} key={"dashboard"}>
        Dashboard
      </Menu.Item>
      <Menu.Item key={"categories"} onClick={() => changeStatus("Categories")}>
        Categories
      </Menu.Item>
      <Menu.Item key={"medicines"} onClick={() => changeStatus("Medicines")}>
        Medicines
      </Menu.Item>
      <Menu.SubMenu key={"users"} title="Users">
        <Menu.Item
          key={"user_details"}
          onClick={() => changeStatus("User Details")}
        >
          User Details
        </Menu.Item>
        <Menu.Item
          key={"user_roals"}
          onClick={() => changeStatus("User Roals")}
        >
          User Roals
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key={"store"} onClick={() => changeStatus("Store")}>
        Store
      </Menu.Item>
      <Menu.Item key={"purchase"} onClick={() => changeStatus("Purchase")}>
        Purchase
      </Menu.Item>
    </Menu>
  );
};

export default AdminMenu;

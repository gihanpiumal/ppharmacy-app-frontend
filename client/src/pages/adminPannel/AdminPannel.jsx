import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { Col, Row } from "antd";

import { AdminMenu } from "../../components/functionalComponents";
import {
  Categories,
  Medicines,
  Purchase,
  Store,
  UserRoals,
  Users,
  Dashboard,
} from "../../components";
import "./AdminPannel.scss";

const AdminPannel = () => {
  const store = useSelector((state) => state.STORE);
  const users = useSelector((state) => state.USERS);
  const userRoalse = useSelector((state) => state.USER_ROALS);
  const categories = useSelector((state) => state.CATEGORIES);
  const medicines = useSelector((state) => state.MEDICINES);
  const purchase = useSelector((state) => state.PURCHASE);
  const AdminState = useSelector((state) => state.ADMIN_STATE);

  const renderSwitch = () => {
    switch (AdminState) {
      case "Medicines":
        return <Medicines />;
      case "Categories":
        return <Categories />;
      case "User Details":
        return <Users />;
      case "User Roals":
        return <UserRoals />;
      case "Store":
        return <Store />;
      case "Purchase":
        return <Purchase />;
      case "Dashboard":
        return <Dashboard />;
      default:
        return "foo";
    }
  };

  return (
    <div className="adminpannel-wrapper">
      <Row>
        <Col span={4}>
          <AdminMenu />
        </Col>
        <Col span={20}>{renderSwitch()}</Col>
      </Row>
    </div>
  );
};

export default AdminPannel;

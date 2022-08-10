import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { Col, Row } from "antd";

import { AdminMenu } from "../../components/functionalComponents";
import { Categories } from "../../components";
import "./AdminPannel.scss";

const AdminPannel = () => {
  const store = useSelector((state) => state.STORE);
  const users = useSelector((state) => state.USERS);
  const userRoalse = useSelector((state) => state.USER_ROALS);
  const categories = useSelector((state) => state.CATEGORIES);
  const medicines = useSelector((state) => state.MEDICINES);
  const purchase = useSelector((state) => state.PURCHASE);
  const AdminState = useSelector((state) => state.ADMIN_STATE);

  const Xx = AdminState
  console.log(AdminState);
  return (
    <div className="adminpannel-wrapper">
      <Row>
        <Col span={4}>
          <AdminMenu />
        </Col>
        <Col span={20}>
          <div>
            <Xx />
          </div>
        </Col>
        {/* <Col span={20}>{AdminState == "Categories" && <Categories />}</Col> */}
      </Row>
    </div>
  );
};

export default AdminPannel;

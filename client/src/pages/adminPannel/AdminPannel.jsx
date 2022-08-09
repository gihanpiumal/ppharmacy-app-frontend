import React, { Component } from "react";
import { useSelector } from "react-redux";

const AdminPannel = () => {
  const store = useSelector((state) => state.STORE);
  const users = useSelector((state) => state.USERS);
  const userRoalse = useSelector((state) => state.USER_ROALS);
  const categories = useSelector((state) => state.CATEGORIES);
  const medicines = useSelector((state) => state.MEDICINES);
  const purchase = useSelector((state) => state.PURCHASE);
  console.log(store);
  console.log(users);
  console.log(userRoalse);
  console.log(categories);
  console.log(medicines);
  console.log(purchase);
  return <div>AdminPannel</div>;
};

export default AdminPannel;

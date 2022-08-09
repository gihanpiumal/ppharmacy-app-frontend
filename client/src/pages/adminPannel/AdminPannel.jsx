import React, { Component } from "react";
import { useSelector } from "react-redux";

const AdminPannel = () => {
  const users = useSelector((state) => state.us);
  const usersRoal = useSelector((state) => state.usr);
  console.log(users);
  console.log(usersRoal);
  return <div>AdminPannel</div>;
};

export default AdminPannel;

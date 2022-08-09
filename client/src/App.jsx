import React, { useEffect } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { appRoutes } from "./navigation";
import { RoutesConstant } from "./assets/constants";
import { NavBar } from "./components";
import { getUsers } from "./services/actions/usersAction";
import { getUserRoles } from "./services/actions/userRoalsAction";
import { getFromStore } from "./services/actions/storeAction";
import { getCategories } from "./services/actions/categoriesAction";
import { getMedicines } from "./services/actions/medicineAction";
import { getPurchaceDetails } from "./services/actions/purchaseAction";

const App = (props) => {
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
  useEffect(() => {
    dispatch(getUsers(objUsers));
    dispatch(getUserRoles(objUserRoal));
    dispatch(getFromStore(objStore));
    dispatch(getCategories(objCategory));
    dispatch(getMedicines(objMedicine));
    dispatch(getPurchaceDetails(objPurchase));
  }, [dispatch]);

  let routes = (
    <Switch>
      {appRoutes()}, <Redirect to={RoutesConstant.home} />
    </Switch>
  );

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        {routes}
      </BrowserRouter>
    </div>
  );
};

export default App;

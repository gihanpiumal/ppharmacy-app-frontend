import React, { useEffect } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { appRoutes } from "./navigation";
import { RoutesConstant } from "./assets/constants";
import { NavBar } from "./components";
import { getUsers , getUserRoles} from "./services/actions/users";
// import { getUserRoles} from "./services/actions/userRoals";

const App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getUserRoles());
  }, [dispatch]);

  let routes = (
    <Switch>
      {appRoutes()}, <Redirect to={RoutesConstant.home} />
    </Switch>
  );

  return (
    <div>
      <NavBar />
      <BrowserRouter>{routes}</BrowserRouter>
    </div>
  );
};

export default App;

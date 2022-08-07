import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { appRoutes } from "./navigation";
import { RoutesConstant } from "./assets/constants";
import {NavBar} from "./components";

const App = (props) => {
  let routes = (
    <Switch>
      {appRoutes()}, <Redirect to={RoutesConstant.home} />
    </Switch>
  );

  return (
    <div>
      <NavBar/>
      <BrowserRouter>{routes}</BrowserRouter>
    </div>
  );
};

export default App;

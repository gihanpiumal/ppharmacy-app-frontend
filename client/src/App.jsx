import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { appRoutes } from "./navigation";
import { RoutesConstant } from "./assets/constants";

const App = (props) => {
  let routes = (
    <Switch>
      {appRoutes()}, <Redirect to={RoutesConstant.login} />
    </Switch>
  );

  return (
    <div>
      {/* <AuthProvider> */}
      <BrowserRouter>{routes}</BrowserRouter>
      {/* </AuthProvider> */}
    </div>
  );
};

export default App;

import { Login } from "../pages";
import PrivateRoutes from "./PrivateRoutes";
import { RoutesConstant, } from "../assets/constants";

export default () => {
  return [
    <PrivateRoutes
      exact
      key="login"
      path={RoutesConstant.login}
      component={Login}
    />,
  ];
};

import { Home } from "../pages";
import PrivateRoutes from "./PrivateRoutes";
import { RoutesConstant, } from "../assets/constants";

export default () => {
  return [
    <PrivateRoutes
      exact
      key="home"
      path={RoutesConstant.home}
      component={Home}
    />,
  ];
};

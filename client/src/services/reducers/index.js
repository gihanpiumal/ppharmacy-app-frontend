import { combineReducers } from "redux";

import {users} from "./users";
import { userRole } from "./userRoles";

export default combineReducers({
  us:users,
  usr:userRole
});

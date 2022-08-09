import { combineReducers } from "redux";

import users from "./usersReducer";
import userRole from "./userRolesReducer";
import categories from "./categoriesReducer";
import medicines from "./medicineReducer";
import purchase from "./purchaceReducer";
import store from "./storeReducer";

export default combineReducers({
  USERS: users,
  USER_ROALS: userRole,
  CATEGORIES: categories,
  MEDICINES: medicines,
  PURCHASE: purchase,
  STORE: store,
});

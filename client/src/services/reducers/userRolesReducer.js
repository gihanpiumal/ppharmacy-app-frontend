import actionTypes from "../actions/actionTypes";

export default (userRoles = [], action) => {
  switch (action.type) {
    case actionTypes.get_all_userRoals:
      return action.payload;
      case actionTypes.add_userRoal:
        return [...userRoles, action.payload];
    case actionTypes.update_userRoal:
      return userRoles.map((userRole) =>
        userRole._id === action.payload._id ? action.payload : userRole
      );
    case actionTypes.delete_userRoal:
      return userRoles.filter((userRole) => userRole._id !== action.payload);
    default:
      return userRoles;
  }
};

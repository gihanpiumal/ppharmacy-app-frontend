import actionTypes from "../actions/actionTypes";

export default (purchases = [], action) => {
  switch (action.type) {
    case actionTypes.get_all_from_purchase:
      return action.payload;
    case actionTypes.add_to_purchase:
      return [...purchases, action.payload];
    case actionTypes.update_from_purchase:
      return purchases.map((purchase) =>
        purchase._id === action.payload._id ? action.payload : purchase
      );
    case actionTypes.delete_from_purchase:
      return purchases.filter((purchase) => purchase._id !== action.payload);
    default:
      return purchases;
  }
};

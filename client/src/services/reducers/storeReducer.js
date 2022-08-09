import actionTypes from "../actions/actionTypes";

export default (stores = [], action) => {
  switch (action.type) {
    case actionTypes.get_all_from_store:
      return action.payload;
    case actionTypes.add_to_store:
      return [...stores, action.payload];
    case actionTypes.update_from_store:
      return stores.map((store) =>
        store._id === action.payload._id ? action.payload : store
      );
    case actionTypes.delete_user:
      return stores.filter((store) => store._id !== action.payload);
    default:
      return stores;
  }
};

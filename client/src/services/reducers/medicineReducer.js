import actionTypes from "../actions/actionTypes";

export default (medicines = [], action) => {
  switch (action.type) {
    case actionTypes.get_all_medicines:
      return action.payload;
    case actionTypes.add_medicine:
      return [...medicines, action.payload];
    case actionTypes.update_medicine:
      return medicines.map((medicine) =>
        medicine._id === action.payload._id ? action.payload : medicine
      );
    case actionTypes.delete_medicine:
      return medicines.filter((medicine) => medicine._id !== action.payload);
    default:
      return medicines;
  }
};

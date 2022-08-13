import * as api from "../api";
import actionTypes from "../actions/actionTypes";

//Action Creators
export const getPurchaceDetails = (obj) => async (dispatch) => {
  try {
    const { data } = await api.postData("/purchase/get_all", obj);
    dispatch({ type: actionTypes.get_all_from_purchase, payload: data.allPurchase.purchase });
  } catch (error) {
    console.log(error.message);
  }
};

export const addPurchase = (obj) => async (dispatch) => {
  try {
    const { data } = await api.postData("/purchase/new/add", obj);
    dispatch({ type: actionTypes.add_to_purchase, payload: data.addedData });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePurchase = (id, obj) => async (dispatch) => {
  try {
    const { data } = await api.putData("/purchase/update/" + id, obj);
    dispatch({ type: actionTypes.update_from_purchase, payload: data.updatePurchaseStore });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePurchase = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteData("/purchase/delete/" + id);
    dispatch({ type: actionTypes.delete_from_purchase, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

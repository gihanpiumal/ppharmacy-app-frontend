import * as api from "../api";
import actionTypes from "../actions/actionTypes";

//Action Creators
export const getMedicines = (obj) => async (dispatch) => {
  try {
    const { data } = await api.postData("/medicines/get_all", obj);
    dispatch({ type: actionTypes.get_all_medicines, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addMedicines = (obj) => async (dispatch) => {
  try {
    const { data } = await api.postData("/medicines/new/add", obj);
    dispatch({ type: actionTypes.add_medicine, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMedicines = (id, obj) => async (dispatch) => {
  try {
    const { data } = await api.putData("/medicines/update/" + id, obj);
    dispatch({ type: actionTypes.update_medicine, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMedicines = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteData("/medicines/delete/" + id);
    dispatch({ type: actionTypes.delete_medicine, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

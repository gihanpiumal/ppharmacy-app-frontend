 import * as api from "../api";
import actionTypes from "../actions/actionTypes";

//Action Creators
export const getMedicines = (obj) => async (dispatch) => {
  try {
    const { data } = await api.postData("/medicines/get_all", obj);
    console.log(data.allMedicines.Medicine);
    dispatch({ type: actionTypes.get_all_medicines, payload: data.allMedicines.Medicine });
  } catch (error) {
    console.log(error.message);
  }
};

export const addMedicines = (obj) => async (dispatch) => {
  try {
    const { data } = await api.postData("/medicine/new/add", obj);
    dispatch({ type: actionTypes.add_medicine, payload: data.allMedicines.addedData});
    console.log([data.allMedicines.addedData]);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMedicines = (id, obj) => async (dispatch) => {
  try {
    const { data } = await api.putData("/medicine/update/" + id, obj);
    dispatch({ type: actionTypes.update_medicine, payload: data.updateMedicines });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMedicines = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteData("/medicine/delete/" + id);
    dispatch({ type: actionTypes.delete_medicine, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

import * as api from "../api";
import actionTypes from "../actions/actionTypes";

export const getUserRoles = (obj) => async (dispatch) => {
  try {
    const { data } = await api.postData("/user_role/get_all", obj);
    dispatch({ type: actionTypes.get_all_userRoals, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addUserRoal = (obj) => async (dispatch) => {
  try {
    const { data } = await api.postData("/user_role/new/add", obj);
    dispatch({ type: actionTypes.add_userRoal, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUserRoal = (id, obj) => async (dispatch) => {
  try {
    const { data } = await api.putData("/user_role/update/" + id, obj);
    dispatch({ type: actionTypes.update_userRoal, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUserRoal = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteData("/user/delete/" + id);
    dispatch({ type: actionTypes.delete_userRoal, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

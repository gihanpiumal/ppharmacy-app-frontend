import * as api from "../api";
import  actionTypes  from "./actionTypes";


export const getFromStore = (obj) => async (dispatch) => {
    try {
      const { data } = await api.postData("/store/get_all",obj);
      dispatch({ type: actionTypes.get_all_from_store, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const addStore = (obj) => async (dispatch) => {
    try {
      const { data } = await api.postData("/store/new/add", obj);
      dispatch({ type: actionTypes.add_to_store, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const updateStore = (id, obj) => async (dispatch) => {
    try {
      const { data } = await api.putData("/store/update/" + id, obj);
      dispatch({ type: actionTypes.update_from_store, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const deleteStore = (id) => async (dispatch) => {
    try {
      const { data } = await api.deleteData("/store/delete/" + id);
      dispatch({ type: actionTypes.delete_from_store, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
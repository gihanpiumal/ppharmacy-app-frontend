import * as api from "../api";
import actionTypes from "../actions/actionTypes";

//Action Creators
export const getCategories = (obj) => async (dispatch) => {
  try {
    const { data } = await api.postData("/category/get_all", obj);
    dispatch({ type: actionTypes.get_all_categories, payload: data.allCategory.categories});
  } catch (error) {
    console.log(error.message);
  }
};

export const addCategories = (obj) => async (dispatch) => {
  try {
    const { data } = await api.postData("/category/new/add", obj);
    dispatch({ type: actionTypes.add_category, payload: data.addedData });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCategories = (id, obj) => async (dispatch) => {
  try {
    const { data } = await api.putData("/category/update/" + id, obj);
    dispatch({ type: actionTypes.update_category, payload: data.updateCategory });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCategories = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteData("/category/delete/" + id);
    dispatch({ type: actionTypes.delete_category, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

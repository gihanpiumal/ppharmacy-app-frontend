import * as api from "../api";

//Action Creators
export const getUsers = () => async (dispatch) => {
  let obj = {
    firstName: "",
    userRoleId: "",
  };
  try {
    const { data } = await api.postData("/user/get_all",obj);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

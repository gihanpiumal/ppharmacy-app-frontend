import * as api from "../api";

//Action Creators
export const getUsers = () => async (dispatch) => {
  let obj = {
    firstName: "",
    userRoleId: "",
  };
  try {
    const { data } = await api.postData("/user/get_all",obj);
    dispatch({ type: "FETCH_AL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserRoles = () => async (dispatch) => {
  let obj2 = {
    roleName: "",
  };
  try {
    const { data } = await api.postData("/user_role/get_all",obj2);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

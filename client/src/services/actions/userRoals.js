import * as api from "../api";

export const getUserRoles = () => async (dispatch) => {
  let obj2 = {
    roleName: "",
  };
  try {
    const { data } = await api.postData("/user_role/get_all",obj2);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

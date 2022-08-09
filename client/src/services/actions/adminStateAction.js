//Action Creators
export const adminStateChange = (status) => (dispatch) => {
    try {
      dispatch({ type: "UPDATE_ADMIN", payload: status });
    } catch (error) {
      console.log(error.message);
    }
  };
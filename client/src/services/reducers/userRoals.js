export default (state = {userRoles:[] }, action) => {
    switch (action.type) {
      case "FETCH_ALL":
        return action.payload;
      case "CREATE":
        return state;
      default:
        return state;
    }
  };
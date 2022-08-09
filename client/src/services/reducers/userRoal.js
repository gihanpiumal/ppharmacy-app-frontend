export default (state = { userRoals: []}, action) => {
    switch (action.type) {
      case "FETCH_AL":
        return action.payload;
      case "CREATE":
        return action.payload;
      default:
        return state;
    }
  };
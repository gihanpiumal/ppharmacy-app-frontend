export const userRole = (state = { userRoles: [] }, action) => {
  switch (action.type) {
    case "CREATE":
      return { userRoles: action.payload };
    default:
      return state;
  }
};

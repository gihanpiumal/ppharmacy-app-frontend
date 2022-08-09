export default (adminState = "Dashboard", action) => {
  switch (action.type) {
    case "UPDATE_ADMIN":
      return (adminState = action.payload);

    default:
      return adminState;
  }
};

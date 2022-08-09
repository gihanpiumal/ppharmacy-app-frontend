export const users =(state = { users: []}, action) => {
  switch (action.type) {
    case "FETCH_AL":
      return {users:action.payload};
    default:
      return state;
  }
};


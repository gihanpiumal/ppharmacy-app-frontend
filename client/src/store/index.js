import { createStore } from "redux";

const reducerFn = (state = { users: [22,56] }, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return { users: action.payload };
    case "CREATE":
      return state;
    default:
      return state;
  }
};

const store = createStore(reducerFn);

export default store;

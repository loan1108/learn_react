import actionTypes from "../actionTypes";
const state = [];
const usersReducer = (initialState = state, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_SUCCEEDED:
      return [...action.payload];
    case actionTypes.DELETE_USER_SUCCEEDED:
      alert("Response status 200");
      const newUsers = [...initialState].filter(
        (user) => user.id !== action.payload
      );
      return newUsers;
    default:
      return [...initialState];
  }
};
export default usersReducer;

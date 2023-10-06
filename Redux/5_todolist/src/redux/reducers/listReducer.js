import actionTypes from "../actionTypes";
const state = [
  { id: 1, name: "Learn Js" },
  { id: 2, name: "Learn HTML/Css" },
  { id: 3, name: "Learn React" },
];

const listReducer = (initialState = state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case actionTypes.ADDNEWTASK:
      return [...initialState, action.payload];
    case actionTypes.REMOVETASK:
        return [...initialState.filter(task=> task.id!==action.payload.id)];
    default:
      return state;
  }
};
export default listReducer;

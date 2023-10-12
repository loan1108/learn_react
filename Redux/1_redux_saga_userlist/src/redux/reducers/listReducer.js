import actionTypes from "../actionTypes";
const state=[]; 
const listReducer = (initialState=state, action)=>{
    switch(action.type){
        case actionTypes.GET_USERSLIST_SUCCEEDED: 
            return [...action.payload]

        default:
            return [...initialState]
    }
}
export default listReducer
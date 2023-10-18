import actionTypes from "../actionTypes";
const state={initialPage: null}; 
const choosenPageReducer =(initialState=state, action)=>{
    switch(action.type){
        case actionTypes.CHANGE_PAGE_SUCCEEDED:
            return {...initialState, initialPage:action.payload}
        default:
            return{...initialState}
    }
}
export default choosenPageReducer;
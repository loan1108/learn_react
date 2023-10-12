import actionTypes from "../actionTypes";
const state ={
    loginedUser:{}
}; 
const loginReducer =(initialState=state, action)=>{
    switch(action.type){
        case actionTypes.LOGIN_SUCCEEDED:
            return {...initialState, loginedUser:action.payload}
        default:
            return {...initialState}
        }
}
export default loginReducer
import actionTypes from "../actionTypes";
const state={
    initialCounter:0
}
const counterReducer = (initialState=state, action)=>{
    switch (action.type){
        case actionTypes.INCREMENT:
            return{
                ...initialState,
                initialCounter:initialState.initialCounter +action.payload
            }
        case actionTypes.DECREMENT:
            return{
                ...initialState,
                initialCounter:initialState.initialCounter -action.payload
            }
        default:
            return state
    }
}
export default counterReducer
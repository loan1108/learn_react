import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import listReducer from "./listReducer";
const rootReducer = combineReducers({
    loginReducer,
    listReducer
})
export default rootReducer;
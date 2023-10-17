import {combineReducers} from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import choosenPageReducer from "./choosenPageReducer";
const rootReducer = combineReducers({productsReducer, cartReducer, choosenPageReducer})
export default rootReducer;
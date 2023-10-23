import {combineReducers} from "redux";
import productsReducer from "./productsReducer";
import choosenPageReducer from "./choosenPageReducer";

const rootReducer = combineReducers({productsReducer, choosenPageReducer})
export default rootReducer;
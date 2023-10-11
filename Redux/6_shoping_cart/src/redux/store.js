import{createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga"; 
import rootReducer from "./reducers/rootReducer";
import productsSaga from "../redux_saga/productsSaga";
import checkoutSaga from "../redux_saga/checkoutSaga";
const sagaMiddleware = createSagaMiddleware(); 

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(productsSaga)
sagaMiddleware.run(checkoutSaga)
export default store;
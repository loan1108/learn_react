import{createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga"; 
import rootReducer from "./reducers/rootReducer";
import productsSaga from "../redux_saga/productsSaga";
import checkoutSaga from "../redux_saga/checkoutSaga";
import changePageSagaWatcher from "../redux_saga/changePageSagaWatcher";
// import addCartSagaWatcher from "../redux_saga/addCartSagaWatcher";
const sagaMiddleware = createSagaMiddleware(); 

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(productsSaga)
sagaMiddleware.run(checkoutSaga)
sagaMiddleware.run(changePageSagaWatcher)
// sagaMiddleware.run(addCartSagaWatcher)

export default store;
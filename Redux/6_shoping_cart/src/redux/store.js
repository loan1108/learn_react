import{createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga"; 
import rootReducer from "./reducers/rootReducer";
import productsSaga from "../redux_saga/productsSaga";
import changePageSagaWatcher from "../redux_saga/changePageSagaWatcher";
const sagaMiddleware = createSagaMiddleware(); 

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(productsSaga)
sagaMiddleware.run(changePageSagaWatcher)


export default store;
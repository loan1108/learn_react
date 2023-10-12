import { createStore,applyMiddleware} from "redux";
import rootReducer from "./reducers/rootReducer";
import loginSaga from "../redux-saga/loginSaga";
import listSaga from "../redux-saga/listSaga";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(loginSaga);
sagaMiddleware.run(listSaga)
export default store;
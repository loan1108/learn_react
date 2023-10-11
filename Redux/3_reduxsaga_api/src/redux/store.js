import { createStore,applyMiddleware} from "redux";
import usersListSaga from "../redux-saga/usersListSaga";
import rootReducer from "./reducers/rootReducer";
import deleteUserSaga from "../redux-saga/deleteUserSaga";
import createSagaMiddleware from "redux-saga"
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(usersListSaga)
sagaMiddleware.run(deleteUserSaga)
export default store;